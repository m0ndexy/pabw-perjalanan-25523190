// js/app.js: perakit
import { ambilProyek } from "./api.js";
import { render, pasangFilter, aturMemuat, tampilkanGalat } from "./dom.js";

async function muat() {
  aturMemuat(true); // keadaan memuat
  try {
    const daftar = await ambilProyek(); // 1. ambil (api.js)
    pasangFilter(daftar); // 2. filter P9 memakai data ini
    render(daftar); // 3. gambar (dom.js)
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
    console.error(galat.message); // untuk Anda, bukan untuk pengguna
  } finally {
    aturMemuat(false);
  }
}

muat(); // dipanggil sekali saat halaman dibuka

// Pengalih Tema
const pengalihTema = document.getElementById("tema");
if (pengalihTema) {
  pengalihTema.addEventListener("change", () => {
    document.body.classList.toggle("tema-aktif", pengalihTema.checked);
  });
}

// Data profil dari Pertemuan 8
const namaLengkap = "Ahmad Dani Maulana";
const peranSaya = "Mahasiswa Teknik Informatika";
const keahlianSaya = ["PHP", "JavaScript", "Python", "MySQL", "HTML", "CSS"];
const jumlahProyek = 4;
let pilihanKategori = "semua";

const profil = {
  namaLengkap: namaLengkap,
  peranSaya: peranSaya,
  keahlianSaya: keahlianSaya,
  alamat: {
    kota: "Yogyakarta",
    provinsi: "D.I. Yogyakarta",
  },
  jumlahProyek: jumlahProyek,
};

function buatPerkenalan({ namaLengkap = "Anonim", peranSaya = "Mahasiswa" } = {}) {
  return `${namaLengkap} — ${peranSaya}`;
}

const formatKeahlian = (daftar = []) => daftar.join(" · ");

if (typeof window !== "undefined") {
  window.profil = profil;
}

export { profil, buatPerkenalan, formatKeahlian };
