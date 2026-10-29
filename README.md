# Linktree Tirta Kepri

Aplikasi web statis profil tautan (*bio-link* / semacam Linktree) resmi untuk **Perumda Air Minum Tirta Kepri**. Dirancang dengan tampilan minimalis, elegan, dan *mobile-responsive*.

---

## ✨ Fitur Utama

- **Desain Minimalis & Mobile-First**: Tampilan terpusat dan nyaman digunakan di semua ukuran layar smartphone maupun desktop.
- **Layanan WhatsApp 3 Nomor (*Accordion*)**:
  - Pelayanan 1 (Arni)
  - Pelayanan 2 (Candra)
  - Pengaduan Whistle Blowing System (WBS)
- **Tautan Layanan Publik & Aplikasi**:
  - Pelayanan Chatbot 24 Jam
  - Pendaftaran Sambungan Baru (Pusimpel)
  - Kalkulator Tarif Pelanggan
  - Informasi Tarif Pelanggan
  - Periksa Tagihan Rekening Air
- **Media Sosial Resmi**: Instagram, Facebook, Website Resmi, dan Email.
- **Ikon Monokrom Bersih**: Semua icon dimuat dari folder `icons/` dengan warna putih konsisten.
- **Tanpa Dependency Berat**: Dibangun menggunakan murni HTML5, CSS3, dan Vanilla JavaScript.

---

## 📁 Struktur Berkas

```
informasi-tirtakepri/
├── icons/            # Kumpulan icon SVG aplikasi & media sosial
│   ├── app.svg
│   ├── bot.svg
│   ├── calculator.svg
│   ├── tariff.svg
│   ├── bill.svg
│   ├── user-plus.svg
│   ├── whatsapp.svg
│   └── ...
├── index.html        # Struktur halaman utama Linktree
├── style.css         # Desain tampilan minimalis & responsif
├── script.js         # Logika daftar tautan, dropdown WhatsApp & fungsi salin
└── README.md
```

---

## 🚀 Menjalankan Secara Lokal

Cukup buka berkas `index.html` langsung di browser Anda, atau gunakan server lokal sederhana:

```bash
# Menggunakan Python
python -m http.server 3000

# Atau menggunakan ekstensi Live Server di VS Code
```

Akses melalui browser di `http://localhost:3000`.

---

## 🌐 Publikasi ke GitHub Pages

1. Masuk ke repositori GitHub: `https://github.com/ramandaputra/linktree-tirtakepri`
2. Buka menu **Settings** > **Pages**
3. Pada bagian **Build and deployment**, pilih branch **`main`** dan folder **`/ (root)`**
4. Klik **Save**. Situs akan aktif di `https://ramandaputra.github.io/linktree-tirtakepri/`

---

© Perumda Air Minum Tirta Kepri.
