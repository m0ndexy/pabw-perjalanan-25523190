// js/state.js
import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: []
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
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
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try { return JSON.parse(localStorage.getItem(KUNCI)); }
  catch { return null; }        // simpanan rusak: pakai nilai bawaan
}

export function pulihkan(isi) {   // dipanggil sekali dari mulai() di app.js
  if (!isi) return;               // kunjungan pertama: nilai bawaan tetap
  if (isi.kategoriAktif) state.kategoriAktif = isi.kategoriAktif;
  if (Array.isArray(isi.favorit)) state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function toggleFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((fId) => fId !== id);
  } else {
    state.favorit.push(id);
  }
  simpan(state);
  render(state);
}