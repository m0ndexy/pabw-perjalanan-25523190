import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#pesan-kosong");
const formRencana = document.querySelector("form");
const inputTanggal = document.querySelector("#tanggal");
const inputJamTerbang = document.querySelector("#jam-terbang");
const inputJamTiba = document.querySelector("#jam-tiba");
const tombolKirim = formRencana ? formRencana.querySelector('button[type="submit"]') : null;

// Lembar B.1: Membuat elemen kartu proyek
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul; // teks, bukan HTML
  return li;
}

// Lembar D.1: Satu fungsi render untuk satu bagian halaman
function render(daftar = []) {
  if (!wadah) return;

  wadah.textContent = ""; // 1. kosongkan lebih dulu

  if (daftar.length === 0) { // 2. periksa keadaan kosong
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;

  const fragment = document.createDocumentFragment();
  daftar.forEach((proyek) => {
    fragment.append(buatKartu(proyek)); // 3. isi ulang
  });
  wadah.append(fragment);
}

const renderDaftar = render;

// Lembar C.2: Menandai tombol filter yang aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const data = typeof daftarProyek !== "undefined" ? daftarProyek : (window.daftarProyek || []);

// Lembar C.1: Event Delegation pada tombol filter
if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // klik di luar tombol, abaikan

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;
    const terpilih = data.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
  });
}

// Lembar D.2: Validasi formulir
function validasiKolom(kolom) {
  if (!kolom) return true;
  const pesanGalat = kolom.parentElement?.querySelector(".pesan-galat");
  const nilai = kolom.value.trim();
  const sah = nilai !== "";

  if (!sah) {
    kolom.setAttribute("aria-invalid", "true");
    if (pesanGalat) pesanGalat.style.display = "block";
  } else {
    kolom.setAttribute("aria-invalid", "false");
    if (pesanGalat) pesanGalat.style.display = "none";
  }

  return sah;
}

function periksaSeluruhForm() {
  const tanggalSah = inputTanggal ? inputTanggal.value.trim() !== "" : true;
  const jamTerbangSah = inputJamTerbang ? inputJamTerbang.value.trim() !== "" : true;
  const jamTibaSah = inputJamTiba ? inputJamTiba.value.trim() !== "" : true;
  const semuaSah = tanggalSah && jamTerbangSah && jamTibaSah;

  if (tombolKirim) {
    tombolKirim.disabled = !semuaSah;
  }

  return semuaSah;
}

// Validasi saat pengguna mengetik (input event)
const daftarKolomForm = [inputTanggal, inputJamTerbang, inputJamTiba];
daftarKolomForm.forEach((kolom) => {
  if (!kolom) return;
  kolom.addEventListener("input", () => {
    validasiKolom(kolom);
    periksaSeluruhForm();
  });
});

// Penangan submit formulir (Lembar D.2)
if (formRencana) {
  formRencana.addEventListener("submit", (event) => {
    event.preventDefault(); // Menghentikan pengiriman bawaan peramban di baris pertama

    let kolomBermasalah = null;

    daftarKolomForm.forEach((kolom) => {
      if (!kolom) return;
      const sah = validasiKolom(kolom);
      if (!sah && !kolomBermasalah) {
        kolomBermasalah = kolom;
      }
    });

    const formSah = periksaSeluruhForm();

    if (kolomBermasalah) {
      kolomBermasalah.focus(); // Memindahkan pandangan ke kolom yang perlu diperbaiki
      return;
    }

    if (formSah) {
      console.log("Formulir rencana perjalanan valid dan berhasil diproses.");
    }
  });
}

// Inisialisasi awal saat halaman pertama kali dibuka
const tombolSemua = document.querySelector('#filter button[data-kategori="semua"]');
if (tombolSemua) {
  tandaiTombolAktif(tombolSemua);
}

if (Array.isArray(data)) {
  render(data);
}

export {
  buatKartu,
  render,
  renderDaftar,
  tandaiTombolAktif,
  validasiKolom,
  periksaSeluruhForm,
  wadah,
  kosong,
};
