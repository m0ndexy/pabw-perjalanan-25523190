<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import FormKontak from './components/FormKontak.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'

onMounted(async () => {
  pulihkan(muat()) // pilihan terakhir dari localStorage
  try {
    isiProyek(await ambilProyek()) // data/proyek.json atau GitHub
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <section id="bagian-1" class="kartu">
        <h2>Daftar Jadwal Perjalanan</h2>
        <div class="tabel-wadah table-wrap">
          <table>
            <caption>
              Jadwal Keberangkatan dan Estimasi Waktu Perjalanan
            </caption>
            <thead>
              <tr>
                <th scope="col">Rute Perjalanan</th>
                <th scope="col">Jam Berangkat</th>
                <th scope="col">Jam Tiba</th>
                <th scope="col">Moda Transportasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Yogyakarta – Jakarta</th>
                <td>07:00 WIB</td>
                <td>14:30 WIB</td>
                <td>Kereta Api Eksekutif</td>
              </tr>
              <tr>
                <th scope="row">Yogyakarta – Bandung</th>
                <td>08:15 WIB</td>
                <td>15:00 WIB</td>
                <td>Kereta Api Bisnis</td>
              </tr>
              <tr>
                <th scope="row">Yogyakarta – Surabaya</th>
                <td>09:30 WIB</td>
                <td>14:00 WIB</td>
                <td>Kereta Cepat</td>
              </tr>
              <tr>
                <th scope="row">Yogyakarta – Semarang</th>
                <td>13:00 WIB</td>
                <td>16:30 WIB</td>
                <td>Bus Antarkota</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <FormKontak />

      <section id="proyek" class="kartu sorotan">
        <h2>Daftar Proyek Portofolio</h2>
        <TombolFilter />
        <DaftarProyek />
      </section>
    </main>

    <footer id="footer">
      <p>Ahmad Dani Maulana · 25523190 · 2026</p>
    </footer>
  </div>
</template>
