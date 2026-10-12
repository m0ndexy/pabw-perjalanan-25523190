# Worksheet Pertemuan 9 · DOM, Event, dan Interaktivitas

## Lembar A — Memilih Elemen di Halaman

### A.2 Daftar Elemen yang Diisi

| Bagian Halaman | Pemilih yang Saya Pakai | Diisi Apa | Nama Variabel |
| :--- | :--- | :--- | :--- |
| **Daftar proyek** | `#daftar` | Kartu elemen `<li>` tiap proyek dari data `daftarProyek` | `wadah` |
| **Baris tombol filter** | `.filter` / `#baris-filter` | Tombol-tombol interaktif untuk menyaring kategori | `tombolFilter` |
| **Pesan daftar kosong** | `#pesan-kosong` | Pesan teks pemberitahuan saat hasil filter tidak ada | `pesanKosong` |
| **Form dan tiap kolomnya** | `form`, `#tanggal`, `#jam-terbang`, `#jam-tiba` | Input form rencana perjalanan & tombol submit | `formRencana`, `inputTanggal`, `inputJamTerbang`, `inputJamTiba` |

---

### A.3 Checklist Evaluasi Lembar A

- [x] **Folder `worksheet-p9/`** berisi `profil.html`, seluruh file CSS, dan `js/app.js` dari Pertemuan 8.
- [x] **Berkas `js/dom.js`** sudah dibuat dan disambungkan sebelum `</body>` tepat setelah `app.js`:
  ```html
    <script type="module" src="js/app.js"></script>
    <script type="module" src="js/dom.js"></script>
  </body>
  ```
- [x] **Seluruh pemilih di tabel A.2 sudah diuji di Console dan tidak ada yang `null`**:
  - `document.querySelector("#daftar")` -> elemen `<ul>` ditemukan.
  - `document.querySelectorAll(".filter")` -> `NodeList(3)` ditemukan.
  - `document.querySelector("#pesan-kosong")` -> elemen `<p>` ditemukan.
  - `document.querySelector("form")` -> elemen `<form>` ditemukan.
  - `document.querySelector("#tanggal")` -> elemen `<input type="date">` ditemukan.
  - `document.querySelector("#jam-terbang")` -> elemen `<input type="text">` ditemukan.
  - `document.querySelector("#jam-tiba")` -> elemen `<input type="text">` ditemukan.
- [x] **Halaman dibuka lewat server lokal; Console tidak menampilkan pesan 404 atau galat eksekusi.**
- [x] **Panel Elements sudah diverifikasi** untuk memastikan penamaan id dan kelas konsisten antara HTML dan JavaScript.

---

## Catatan Penggunaan AI

- **Bagian yang dibantu AI:** Pengecekan urutan tag `<script>`, perbaikan null pointer pada selector `#daftar`, konfigurasi ES Module export/import, dan penyusunan tabel A.2 di README.
- **Bagian yang dikerjakan sendiri:** Penyesuaian tata letak HTML profil perjalanan, pengujian interaktivitas di browser, serta pemodelan data kartu proyek.
