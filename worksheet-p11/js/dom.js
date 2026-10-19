// js/dom.js: murni tampilan
import { profil, buatPerkenalan, formatKeahlian, saring } from './data.js';

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
    tombol.classList.toggle("aktif", tombol.dataset.kategori?.toLowerCase() === kategoriAktif?.toLowerCase());
  });
}

export function buatKartu(proyek, adalahFavorit = false) {
  const li = document.createElement("li");
  li.className = "kartu";
  if (adalahFavorit) li.classList.add("favorit");
  li.textContent = proyek.judul;
  return li;
}

export function render(stateOrDaftar = []) {
  if (!wadah) return;

  wadah.textContent = "";

  const daftarAsli = Array.isArray(stateOrDaftar)
    ? stateOrDaftar
    : (stateOrDaftar.daftarProyek || []);
  const kategoriAktif = stateOrDaftar.kategoriAktif || "semua";
  const daftar = Array.isArray(stateOrDaftar)
    ? stateOrDaftar
    : saring(daftarAsli, kategoriAktif);

  tandaiTombolAktif(kategoriAktif);

  if (daftar.length === 0) {
    if (kosong) {
      kosong.textContent = "Belum ada data.";
      kosong.hidden = false;
    }
    return;
  }
  if (kosong) kosong.hidden = true;

  const fragment = document.createDocumentFragment();
  daftar.forEach((proyek) => {
    const fav = stateOrDaftar.favorit ? stateOrDaftar.favorit.includes(proyek.id) : false;
    fragment.append(buatKartu(proyek, fav));
  });
  wadah.append(fragment);
}

export { wadah, kosong, muatEl as muat };
