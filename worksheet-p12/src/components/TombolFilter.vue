<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'

const daftarKategori = ['semua', 'Web', 'Mobile', 'Data']
</script>

<template>
  <div id="filter" class="baris-filter">
    <button
      v-for="kategori in daftarKategori"
      :key="kategori"
      type="button"
      class="filter"
      :class="{ aktif: state.kategoriAktif.toLowerCase() === kategori.toLowerCase() }"
      @click="pilihKategori(kategori)"
    >
      {{ kategori === 'semua' ? 'Semua' : kategori }}
    </button>
    <button type="button" id="atur-ulang" @click="aturUlang">Atur ulang</button>
  </div>
</template>
