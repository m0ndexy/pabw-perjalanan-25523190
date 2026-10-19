// js/data.js: sisa P8 yang tidak diambil dari server
export const profil = {
  namaLengkap: "Ahmad Dani Maulana",
  peranSaya: "Mahasiswa Teknik Informatika",
  keahlianSaya: ["PHP", "JavaScript", "Python", "MySQL", "HTML", "CSS"],
  alamat: {
    kota: "Yogyakarta",
    provinsi: "D.I. Yogyakarta",
  },
  jumlahProyek: 4,
};

export function buatPerkenalan({ namaLengkap = "Anonim", peranSaya = "Mahasiswa" } = {}) {
  return `${namaLengkap} — ${peranSaya}`;
}

export const formatKeahlian = (daftar = []) => daftar.join(" · ");

export function saring(daftar = [], kategori = "semua") {
  if (!kategori || kategori.toLowerCase() === "semua") return daftar;
  return daftar.filter(
    (proyek) => proyek.kategori?.toLowerCase() === kategori.toLowerCase()
  );
}
