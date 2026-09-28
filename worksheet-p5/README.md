## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Halaman profil dari Pertemuan 4 disusun ulang tata letaknya menggunakan CSS Grid untuk kerangka halaman dan Flexbox untuk komponen.

### Sketsa Kerangka Halaman

```text
+-------------------------------------------------------------+
| HEADER (.page baris 1: auto)                                |
| [Judul: Mengatur Jam Perjalanan]  [Navbar: Home Journey ...] |
| (display: flex, justify-content: space-between, gap)        |
+-------------------------------------------------------------+
| MAIN / .isi (.page baris 2: 1fr)                            |
| +-----------------------------+---------------------------+ |
| | Kartu 1: Jadwal Perjalanan  | Kartu 2: Formulir Rencana | |
| | (tabel keberangkatan)       | (gambar semut + form)     | |
| +-----------------------------+---------------------------+ |
+-------------------------------------------------------------+
| FOOTER (.page baris 3: auto)                                |
| Ahmad Dani Maulana · 25523190 · 2026                        |
+-------------------------------------------------------------+
```

### Kerangka Halaman (Lembar A.1)

| Bagian Halaman | Peran | Nilai yang Saya Pakai |
|---|---|---|
| **Baris pertama** | Kepala halaman: logo, judul, menu | `auto` · tinggi mengikuti isi |
| **Baris kedua** | Isi: sidebar dan konten | `1fr` · mengisi sisa tinggi |
| **Baris ketiga** | Kaki halaman | `auto` · tinggi mengikuti isi |
| **Kolom isi** | Sidebar tetap, konten lentur | `16rem 1fr` · sidebar tetap |

### Sumbu dan Arah Flexbox (Lembar A.2)

| Komponen | Arah | Sumbu Utama | Sumbu Silang |
|---|---|---|---|
| **Navbar** | baris | horizontal | vertikal |
| **Baris tombol pada kartu** | baris | horizontal | vertikal |
| **Daftar menu samping** | kolom | vertikal | horizontal |

### Kapan Flex, Kapan Grid (Lembar A.3)

| Bagian | Pilihan Saya | Alasan Satu Baris |
|---|---|---|
| **Kepala halaman** | `flex` | Menyusun judul dan menu secara mendatar dalam satu baris dengan gap. |
| **Isi dua kolom** | `grid` | Membagi kerangka layout dua dimensi antara kolom konten. |
| **Galeri kartu** | `grid` | Menyusun kumpulan kartu responsif menggunakan repeat dan minmax tanpa media query. |
| **Isi di dalam satu kartu** | `flex` | Menata elemen form dan tombol di dalam kartu secara satu arah. |

## Catatan Penggunaan AI

- **Bagian yang dibantu AI:** Membantu pengecekan sintaks CSS Grid (.page dan .isi) dan pembuatan readme.md (sketsa kerangka, dll).
