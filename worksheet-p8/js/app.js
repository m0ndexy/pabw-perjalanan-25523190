const pengalihTema = document.getElementById("tema");
if (pengalihTema) {
  pengalihTema.addEventListener("change", () => {
    document.body.classList.toggle("tema-aktif", pengalihTema.checked);
  });
}

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

const kalimat = `Nama saya ${profil.namaLengkap}, peran: ${profil.peranSaya}, dan saya belajar ${profil.keahlianSaya.length} keahlian utama.`;
console.log("=== LEMBAR B: DATA PROFIL & TEMPLATE LITERAL ===");
console.log(kalimat);

const kotaAsal = profil.alamat?.kota ?? "Belum ditentukan";
console.log(`Domisili: ${kotaAsal}`);
console.log("typeof namaLengkap  :", typeof namaLengkap);
console.log("typeof jumlahProyek :", typeof jumlahProyek);
console.log("Pilihan kategori saat ini (let):", pilihanKategori);

function buatPerkenalan({ namaLengkap = "Anonim", peranSaya = "Mahasiswa" } = {}) {
  return `${namaLengkap} — ${peranSaya}`;
}

const formatKeahlian = (daftar = []) => daftar.join(" · ");

console.log("\n=== LEMBAR C: DUA FUNGSI MURNI ===");
console.log("Hasil buatPerkenalan:", buatPerkenalan(profil));
console.log("Hasil formatKeahlian:", formatKeahlian(profil.keahlianSaya));

console.log("Uji buatPerkenalan (argumen berbeda):", buatPerkenalan({ namaLengkap: "Ahmad Dani", peranSaya: "Frontend Engineer" }));
console.log("Uji formatKeahlian (argumen berbeda):", formatKeahlian(["Git", "Linux", "Docker"]));

const daftarProyek = [
  { id: 1, judul: "Halaman Profil", tahun: 2026, selesai: true, kategori: "Web" },
  { id: 2, judul: "Katalog Produk", tahun: 2026, selesai: false, kategori: "Web" },
  { id: 3, judul: "Sistem Jadwal Perjalanan", tahun: 2026, selesai: true, kategori: "Web" },
  { id: 4, judul: "Aplikasi Tiket Bus", tahun: 2025, selesai: true, kategori: "Mobile" },
];

console.log("\n=== LEMBAR D: STRUKTUR DATA & ARRAY METHODS ===");

console.log("Daftar Keahlian (console.table):");
console.table(profil.keahlianSaya);

console.log("Seluruh Daftar Proyek (console.table):");
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.log("Proyek yang Selesai (filter):");
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log("Hasil find ('Katalog Produk'):", katalog);

const ringkasanProyek = daftarProyek.map(
  (proyek) => `${proyek.judul} (${proyek.tahun}) — ${proyek.selesai ? "Selesai" : "Proses"}`
);
console.log("Hasil map (Ringkasan Proyek):", ringkasanProyek);

const salinanProfil = { ...profil };
salinanProfil.peranSaya = "Fullstack Developer";
console.log("Verifikasi data asli profil tidak termutasi:");
console.log(" - profil.peranSaya asli   :", profil.peranSaya);
console.log(" - salinanProfil.peranSaya :", salinanProfil.peranSaya);

const proyekTerurut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);
console.log("Proyek Terurut Tahun (salinan terurut):");
console.table(proyekTerurut);
console.log("Data asli daftarProyek tetap pada urutan semula (id pertama = 1):", daftarProyek[0].id === 1);

console.log("\n=== LEMBAR E: PENANGANAN TIGA KASUS GALAT ===");

const keahlianOpsional = profil.keahlianTambahan?.length ?? 0;
console.log("Kasus 1 ditangani aman (keahlianTambahan ?? 0):", keahlianOpsional);

const elemenCari = document.querySelector("#elemen-tidak-ada");
if (elemenCari) {
  elemenCari.textContent = "Ditemukan";
} else {
  console.log("Kasus 2 ditangani aman: querySelector bernilai null dicek terlebih dahulu.");
}

const inputSimulasi = "4";
const totalJamKalkulasi = Number(inputSimulasi) + 2;
console.log(`Kasus 3 ditangani aman: Number("${inputSimulasi}") + 2 = ${totalJamKalkulasi} (bukan "${inputSimulasi}2")`);
