// src/state.js: pusat keadaan aplikasi
import { reactive } from 'vue'

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: '',
})

// Ekspos ke window agar bisa diperiksa dari Console
if (typeof window !== "undefined") {
  window.state = state;
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((fId) => fId !== id)
  } else {
    state.favorit = [...state.favorit, id]
  }
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar
}

const KUNCI = "pabw-p11"
const VERSI = 2

export function simpan(stateSekarang = state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateSekarang.kategoriAktif,
    favorit: stateSekarang.favorit
  }
  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi))
  } catch (e) {
    console.error("Gagal menyimpan ke localStorage", e)
  }
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI))
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return isi
  } catch {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function pulihkan(isi) {
  if (!isi) return
  if (isi.kategoriAktif) state.kategoriAktif = isi.kategoriAktif
  if (Array.isArray(isi.favorit)) state.favorit = isi.favorit
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
  state.kategoriAktif = 'semua'
  state.favorit = []
}