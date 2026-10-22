<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <div>
    <p id="muat" v-if="state.memuat">Memuat data...</p>
    <p id="galat" v-else-if="state.galat" class="pesan-galat">{{ state.galat }}</p>
    <p id="kosong" v-else-if="tampil.length === 0" class="pesan-kosong">Belum ada data.</p>

    <ul id="daftar" class="galeri" v-else>
      <li
        v-for="proyek in tampil"
        :key="proyek.id"
        class="kartu"
        :class="{ favorit: state.favorit.includes(Number(proyek.id)) }"
      >
        <span>{{ proyek.judul }}</span>
        <button
          type="button"
          class="favorit"
          @click="tambahFavorit(Number(proyek.id))"
        >
          {{ state.favorit.includes(Number(proyek.id)) ? '★' : '☆' }}
        </button>
      </li>
    </ul>
  </div>
</template>
