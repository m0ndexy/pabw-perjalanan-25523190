# WORKSHEET P5
**Pertemuan 5 · Layout Modern: Flexbox dan Grid**  
*Lanjutan dari Pertemuan 4, halaman yang sama dengan susunan yang baru*  
Pengembangan Aplikasi Berbasis Web · SIF302 · Semester Gasal 2026/2027

| Data Mahasiswa | Keterangan |
|---|---|
| **NAMA** | Ahmad Dani Maulana |
| **NIM** | 25523190 |
| **KELAS** | A |
| **TANGGAL** | 28/09/2026 |

---

## Lembar A — Tentukan Kerangka Halaman Lebih Dulu

### A.1 Kerangka Halaman

| Bagian Halaman | Peran | Nilai yang Saya Pakai |
|---|---|---|
| **Baris pertama** | Kepala halaman: logo, judul, menu | `auto` · tinggi mengikuti isi |
| **Baris kedua** | Isi: sidebar dan konten | `1fr` · mengisi sisa tinggi |
| **Baris ketiga** | Kaki halaman | `auto` · tinggi mengikuti isi |
| **Kolom isi** | Sidebar tetap, konten lentur | `16rem 1fr` · sidebar tetap |

---

### A.2 Sumbu dan Arah

| Komponen | Arah | Sumbu Utama | Sumbu Silang |
|---|---|---|---|
| **Navbar** | baris | horizontal | vertikal |
| **Baris tombol pada kartu** | baris | horizontal | vertikal |
| **Daftar menu samping** | kolom | vertikal | horizontal |

---

### A.3 Kapan Flex, Kapan Grid

| Bagian | Pilihan Saya | Alasan Satu Baris |
|---|---|---|
| **Kepala halaman** | `flex` | Menyusun judul dan menu navigasi secara horizontal dalam satu baris dengan gap. |
| **Isi dua kolom** | `grid` | Membagi kerangka layout dua dimensi antara dua kolom konten secara teratur. |
| **Galeri kartu** | `grid` | Menata kartu secara otomatis menyesuaikan kolom dengan repeat dan minmax tanpa media query. |
| **Isi di dalam satu kartu** | `flex` | Menyusun elemen di dalam kartu (form, teks, tombol) secara linier satu arah. |

---

## Lembar B — layout.css: Kerangka Halaman dan Navbar

### B.1 Kerangka Halaman
- Menambahkan satu wadah pembungkus `<div class="page">` di `profil.html` yang membungkus `header`, `main`, dan `footer`.
- Menambahkan aturan `.page` di `layout.css`:
  ```css
  .page {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100dvh;
  }
  ```
- Menghapus `min-height: 100vh` jika ada di body, tingginya kini ditangani oleh `.page`.

### B.2 Navbar dan Isi
- Navbar memakai flexbox dengan `gap: var(--space-4)`.
- Area isi memakai grid dengan `gap: var(--space-6)`.
- Hasil pemeriksaan:
  - Navbar tetap satu baris saat judul memanjang.
  - Kolom tidak saling mendorong keluar.
  - Tidak ada float di layout.css.

---

## Lembar C — komponen.css: Kartu dan Galeri

### C.1 Galeri Adaptif
- Menggunakan grid adaptif:
  ```css
  .galeri {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: var(--space-4);
  }
  ```
- Saat jendela diseret dari 360 px ke 1 280 px, jumlah kolom menyesuaikan sendiri tanpa media query.

### C.2 Isi Kartu
- Baris tombol pada kartu menggunakan flexbox:
  ```css
  .kartu__kaki {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-2);
  }
  ```

### C.3 Yang Dipakai untuk Lebar

| Nilai | Artinya | Dipakai Untuk |
|---|---|---|
| `1fr` | Membagi ruang sisa setelah ukuran tetap dihitung | Kolom konten |
| `16rem` | Lebar tetap yang ikut ukuran font dasar | Sidebar atau batas minimum kartu |
| `minmax(16rem, 1fr)` | Batas minimal 16rem dan maksimal 1fr | Jalur kartu galeri |
| `repeat(auto-fit, ...)` | Jumlah jalur mengikuti ruang yang ada | Kolom galeri kartu |

---

## Lembar D — Penempatan: Span dan Area Bernama

### D.1 Span
- Blok sorotan atau kartu yang ingin diperlebar memakai span:
  ```css
  .sorotan { grid-column: span 2; }
  .papan   { grid-row: span 2; }
  ```

### D.2 Area Bernama
- Penempatan menggunakan area bernama:
  ```css
  .isi {
    display: grid;
    grid-template-columns: 16rem 1fr;
    grid-template-areas:
      "sisi utama"
      "sisi bawah";
  }
  .sisi  { grid-area: sisi; }
  .utama { grid-area: utama; }
  ```

### D.3 Pilihan Penempatan Saya

| Blok | Cara | Potongan Kode |
|---|---|---|
| Kartu sorotan pada galeri | span | `.sorotan { grid-column: span 2; }` |
| Area layout isi halaman | area bernama | `.sisi { grid-area: sisi; } .utama { grid-area: utama; }` |

---

## Lembar E — Tiga Kasus yang Sering Gagal

### E.1 Tinggi Kartu Tidak Seragam
- Menambahkan `min-height: 14rem` dan `align-content: start` pada kartu galeri agar tingginya seragam dan rapi:
  ```css
  .galeri .kartu {
    display: grid;
    align-content: start;
    min-height: 14rem;
  }
  ```

### E.2 Isi Panjang Mendorong Kolom
- Memberi `min-width: 0` pada item flex/grid agar bisa menyusut, dan `overflow-wrap: anywhere` pada judul agar teks panjang membungkus ke bawah:
  ```css
  .kartu__isi { min-width: 0; }
  .kartu__judul { overflow-wrap: anywhere; }
  ```

### E.3 Item Meluber Keluar Kotak
- Pada layar 360 px, tabel diberi pembungkus `.tabel-wadah` dengan `overflow-x: auto` agar tidak meluber keluar layar.
- Menggunakan `minmax(min(20rem, 100%), 1fr)` pada `.isi` agar di layar sempit otomatis turun menjadi 1 kolom tanpa meluber.

---

## Lembar F — Pemeriksaan, Tiket Keluar, dan Penilaian Mandiri

### F.1 Periksa Satu per Satu

| Periksa | Cara Memeriksa | Lolos |
|---|---|:---:|
| **Kerangka halaman** | Matikan sementara isi, baris tetap tiga | [x] |
| **Jarak memakai gap** | Cari kata margin pada layout.css dan komponen.css (hanya reset dan centering) | [x] |
| **Lebar memakai fr atau rem** | Cari nilai px pada deklarasi lebar kolom | [x] |
| **Galeri adaptif** | Seret jendela, jumlah kolom berubah tanpa media query | [x] |
| **Tidak meluber** | Uji pada 360 px dan 1 280 px | [x] |
| **Tema gelap Pertemuan 4** | Tombol pengalih masih bekerja | [x] |

### F.2 Satu Baris untuk Diingat
- **Potongan kode:** `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));`
- **Dipakai pada:** Galeri kartu (`.galeri`) di `komponen.css` agar jumlah kolom otomatis menyesuaikan lebar layar.

### F.3 Penilaian Mandiri

| Bagian | Bobot | Nilai Saya | Bukti |
|---|---|---|---|
| **Kerangka halaman: baris dan kolom** | 30 | 30 | Baris grid `.page` terbaca `auto 1fr auto`, tiga baris utuh |
| **Flexbox: navbar dan isi kartu** | 25 | 25 | Navbar dan tombol kartu memakai flex dan gap, tidak ada float |
| **Grid: galeri adaptif dan penempatan** | 30 | 30 | Kolom berubah dengan auto-fit & minmax, span dan area bernama diterapkan |
| **Kerapian: nol luberan, nol !important** | 15 | 15 | Tampilan rapi di 360 px dan 1 280 px, tidak ada !important |
| **TOTAL** | **100** | **100** | |

### F.4 Tiket Keluar

| Pertanyaan | Jawaban |
|---|---|
| **Bagian halaman mana yang memakai flex, dan mengapa flex yang cocok** | Navbar (`.navbar`) dan baris tombol kartu (`.kartu__kaki`), karena menyusun elemen secara sebaris (satu dimensi) dengan jarak yang rapi memakai gap. |
| **Bagian halaman mana yang memakai grid, dan mengapa grid yang cocok** | Kerangka halaman (`.page`), area isi (`.isi`), dan galeri kartu (`.galeri`), karena mengatur tata letak dua dimensi (baris dan kolom) sekaligus membagi ruang dengan `fr`. |
| **Satu kasus meluber yang Anda temui hari ini, dan perbaikannya** | Teks panjang atau tabel menabrak batas kolom karena item grid tidak mau menyusut; diperbaiki dengan menambahkan `min-width: 0` pada kartu dan pembungkus tabel `overflow-x: auto`. |

### F.5 Catatan untuk Pengampu
- **Bagian yang paling sulit:** Menentukan batas minimal pada `minmax()` agar kartu tidak terlalu sempit di layar kecil.
- **Bagian yang saya ingin dibahas di kelas:** Kapan waktu yang paling tepat memilih `auto-fit` dibanding `auto-fill` di proyek nyata.
