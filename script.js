/**
 * Minimalist Linktree for Tirta Kepri
 * All icons loaded directly from the icons/ directory
 */

// Konfigurasi 3 Nomor WhatsApp Resmi
const WHATSAPP_CONTACTS = [
  {
    name: "Pelayanan 1 (Arni)",
    phone: "6281270182886", // Ganti dengan nomor WhatsApp Pelayanan 1
    desc: "Informasi tagihan, sambung baru & kendala teknis",
    message: "Halo Pelayanan 1 (Arni), saya ingin berkonsultasi mengenai layanan Tirta Kepri",
    icon: "icons/whatsapp.svg",
    isWbs: false
  },
  {
    name: "Pelayanan 2 (Candra)",
    phone: "6281367045371", // Ganti dengan nomor WhatsApp Pelayanan 2
    desc: "Informasi tagihan, sambung baru & kendala teknis",
    message: "Halo Pelayanan 2 (Candra), saya ingin berkonsultasi mengenai layanan Tirta Kepri",
    icon: "icons/whatsapp.svg",
    isWbs: false
  },
  {
    name: "Pengaduan Whistle Blowing System",
    phone: "6282379836060", // Ganti dengan nomor khusus WBS
    desc: "Kanal rahasia pelaporan indikasi pelanggaran",
    message: "Halo Tim WBS Tirta Kepri, saya ingin menyampaikan laporan/pengaduan Whistle Blowing System",
    icon: "icons/shield.svg",
    isWbs: true
  }
];

// Daftar Tautan Utama (Hanya WhatsApp dan 5 Layanan Resmi Pusimpel & Chatbot)
const links = [
  {
    type: "whatsapp-accordion",
    title: "Layanan WhatsApp Resmi",
    icon: "icons/whatsapp.svg",
    contacts: WHATSAPP_CONTACTS
  },
  {
    type: "link",
    title: "Pelayanan Chatbot 24 Jam",
    url: "https://tirtakepri.co.id",
    icon: "icons/bot.svg"
  },
  {
    type: "link",
    title: "Pendaftaran Sambungan Baru",
    url: "https://pusimpel.com/pendaftaran-tirtakepri/",
    icon: "icons/user-plus.svg"
  },
  {
    type: "link",
    title: "Kalkulator Tarif Pelanggan",
    url: "https://pusimpel.com/kalkulator/",
    icon: "icons/calculator.svg"
  },
  {
    type: "link",
    title: "Informasi Tarif Pelanggan",
    url: "https://pusimpel.com/tarif/",
    icon: "icons/tariff.svg"
  },
  {
    type: "link",
    title: "Periksa Tagihan",
    url: "https://pusimpel.com/cek_tagihan/",
    icon: "icons/bill.svg"
  }
];

const linksList = document.getElementById('linksList');
const sharePageBtn = document.getElementById('sharePageBtn');
const toast = document.getElementById('toast');

// Render Links
function renderLinks() {
  if (!linksList) return;

  linksList.innerHTML = links.map(item => {
    // 1. Accordion Khusus WhatsApp (3 Nomor)
    if (item.type === "whatsapp-accordion") {
      const contactsHtml = item.contacts.map(c => {
        const waUrl = `https://wa.me/${c.phone}?text=${encodeURIComponent(c.message)}`;
        const wbsClass = c.isWbs ? 'wbs-item' : '';

        return `
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="sub-contact-card ${wbsClass}">
            <div class="sub-contact-icon">
              <img src="${c.icon}" alt="${escapeHtml(c.name)}" class="sub-contact-icon-img">
            </div>
            <div class="sub-contact-info">
              <span class="sub-contact-title">${escapeHtml(c.name)}</span>
              <span class="sub-contact-sub">${escapeHtml(c.desc)}</span>
            </div>
            <div class="sub-contact-arrow">
              <img src="icons/arrow-right.svg" alt="Buka" class="arrow-icon-img">
            </div>
          </a>
        `;
      }).join('');

      return `
        <div class="accordion-wrapper" id="whatsappAccordionWrapper">
          <button type="button" class="link-card accordion-trigger" id="whatsappAccordionBtn" aria-expanded="false">
            <span class="link-icon wa-icon" aria-hidden="true">
              <img src="${item.icon}" alt="WhatsApp" class="link-icon-img">
            </span>
            <span class="link-title">${escapeHtml(item.title)}</span>
            <span class="link-chevron" aria-hidden="true">
              <img src="icons/chevron-down.svg" alt="Tampilkan" class="chevron-icon-img">
            </span>
          </button>
          <div class="accordion-body">
            <div class="sub-contacts-list">
              ${contactsHtml}
            </div>
          </div>
        </div>
      `;
    }

    // 2. Link Card Standar
    return `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="link-card">
        <span class="link-icon" aria-hidden="true">
          <img src="${item.icon}" alt="${escapeHtml(item.title)}" class="link-icon-img">
        </span>
        <span class="link-title">${escapeHtml(item.title)}</span>
        <button type="button" class="link-more-btn" data-url="${item.url}" title="Salin tautan" aria-label="Salin tautan ${escapeHtml(item.title)}">
          <img src="icons/more.svg" alt="Salin" class="more-icon-img">
        </button>
      </a>
    `;
  }).join('');

  setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
  const accordionWrapper = document.getElementById('whatsappAccordionWrapper');
  const accordionBtn = document.getElementById('whatsappAccordionBtn');

  // Toggle Accordion WhatsApp
  function toggleWhatsappAccordion(forceOpen = null) {
    if (!accordionWrapper || !accordionBtn) return;
    
    const shouldOpen = forceOpen !== null ? forceOpen : !accordionWrapper.classList.contains('open');
    if (shouldOpen) {
      accordionWrapper.classList.add('open');
      accordionBtn.setAttribute('aria-expanded', 'true');
    } else {
      accordionWrapper.classList.remove('open');
      accordionBtn.setAttribute('aria-expanded', 'false');
    }
  }

  if (accordionBtn) {
    accordionBtn.addEventListener('click', () => {
      toggleWhatsappAccordion();
    });
  }



  // Tombol Salin Tautan pada kartu biasa
  const moreBtns = linksList.querySelectorAll('.link-more-btn');
  moreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const url = btn.getAttribute('data-url');
      copyToClipboard(url, 'Tautan berhasil disalin');
    });
  });
}

// Copy to Clipboard Helper
function copyToClipboard(text, message = 'Tautan berhasil disalin') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => fallbackCopy(text, message));
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const temp = document.createElement('textarea');
  temp.value = text;
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  showToast(message);
}

// Toast Notification
let toastTimeout = null;
function showToast(message) {
  if (!toast) return;
  if (toastTimeout) clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Share Page Button
if (sharePageBtn) {
  sharePageBtn.addEventListener('click', async () => {
    const pageUrl = window.location.href.split('#')[0];
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tirta Kepri',
          text: 'Tautan resmi layanan Perumda Air Minum Tirta Kepri',
          url: pageUrl
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      copyToClipboard(pageUrl, 'Tautan profil berhasil disalin');
    }
  });
}

// Utility Sanitizer
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Init
document.addEventListener('DOMContentLoaded', renderLinks);
