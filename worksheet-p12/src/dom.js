// js/dom.js: murni tampilan
import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong") || document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");

export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (kosong) {
    kosong.textContent = pesan;
    kosong.hidden = false;
  }
}

export function tandaiTombolAktif(kategoriAktif = "semua") {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle(
      "aktif",
      tombol.dataset.kategori?.toLowerCase() === (kategoriAktif || "semua").toLowerCase()
    );
  });
}

// dom.js: buatKartu() dari P9, ditambah satu tombol (Lembar C.3)
export function buatKartu(proyek, favorit = []) {
  const li = document.createElement("li");
  li.className = "kartu";

  const spanJudul = document.createElement("span");
  spanJudul.textContent = proyek.judul;
  li.append(spanJudul);

  const tombol = document.createElement("button");
  tombol.type = "button";
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(Number(proyek.id)) ? "★" : "☆";
  li.append(tombol);

  return li;
}

// Lembar C.2: render(data) menjadi render(state)
export function render(state) {
  if (!wadah) return;

  wadah.textContent = ""; // 1. kosongkan
  tandaiTombolAktif(state?.kategoriAktif);

  const daftarProyek = state?.daftarProyek || [];
  const kategoriAktif = state?.kategoriAktif || "semua";
  const tampil = saring(daftarProyek, kategoriAktif); // dari data.js

  if (tampil.length === 0) { // 2. keadaan kosong
    if (kosong) {
      kosong.textContent = "Belum ada data.";
      kosong.hidden = false;
    }
    return;
  }
  if (kosong) kosong.hidden = true;

  const fragment = document.createDocumentFragment();
  tampil.forEach((item) => { // 3. isi ulang
    fragment.append(buatKartu(item, state?.favorit || []));
  });
  wadah.append(fragment);
}

export { wadah, kosong, muatEl as muat };
