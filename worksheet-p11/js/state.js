// js/state.js: pusat keadaan aplikasi
import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: []
};

// Ekspos ke window agar bisa diperiksa dari Console (Lembar C.5)
if (typeof window !== "undefined") {
  window.state = state;
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);
  render(state);
}

// Lembar C.3 & C.4: salinan baru, bukan push
export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((fId) => fId !== id); // toggle agar bisa dibatalkan
  } else {
    state.favorit = [...state.favorit, id];
  }
  simpan(state);
  render(state);
}

const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(stateSekarang = state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateSekarang.kategoriAktif,
    favorit: stateSekarang.favorit
  };
  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch (e) {
    console.error("Gagal menyimpan ke localStorage", e);
  }
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); // bentuk lama: buang
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI); // isi rusak: buang
    return null;
  }
}

export function pulihkan(isi) { // dipanggil sekali dari mulai() di app.js
  if (!isi) return; // kunjungan pertama: nilai bawaan tetap
  if (isi.kategoriAktif) state.kategoriAktif = isi.kategoriAktif;
  if (Array.isArray(isi.favorit)) state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
  render(state);
}