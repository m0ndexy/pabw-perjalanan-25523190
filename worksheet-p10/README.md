# Worksheet Pertemuan 10

### Lembar A.5: Panggilan Pertama dan Status Balasan
| Yang Dicatat | Nilai yang Saya Dapat |
| :--- | :--- |
| **Alamat API yang saya pakai** | `data/proyek.json` |
| **Status balasan** | `200` |
| **Nilai respons.ok** | `true` |
| **Jenis isi (Content-Type)** | `application/json` |

---

### Lembar B.3: Buktikan Galatnya Tertangkap
| Yang Saya Uji | Hasil yang Benar | Hasil yang Saya Dapat |
| :--- | :--- | :--- |
| **Alamat diubah menjadi alamat yang tidak ada** | Pesan galat tampil di halaman, Console bersih dari galat tak tertangani | `api.js:10 gagal memuat status 404` |
| **Jaringan dimatikan di panel Network** | Pesan galat tampil, bukan layar kosong | `Failed to load response data` |
| **Alamat dikembalikan seperti semula** | Daftar tampil kembali tanpa menyunting kode lain | Data muncul kembali |

---

### Lembar C.2: Peta Data Saya
| Nama Kunci | Jenis Nilai dan Contoh | Cara Mengaksesnya |
| :--- | :--- | :--- |
| **`judul`, `kategori`** | String (`"judul": "Katalog Produk"`, `"kategori": "Web"`) | `proyek.judul`, `proyek.kategori` |
| **`id`, `tahun`** | Number (`"id": 2`, `"tahun": 2026`) | `proyek.id`, `proyek.tahun` |
| **`selesai`** | Boolean (`"selesai": false`) | `proyek.selesai` |

---

## Catatan Penggunaan AI

- **Bagian yang dibantu AI:** Penerapan blok `try/catch` pada fungsi `ambilProyek()` di `api.js`, pemetaan kunci JSON Lembar C, dan penyusunan tabel verifikasi di README.
- **Bagian yang dikerjakan sendiri:** Simulasi pengujian galat 404 dan offline di browser Network panel, pengecekan data di Console, serta pengembalian alamat API ke semula.
