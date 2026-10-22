<script setup>
import { reactive } from 'vue'

const form = reactive({
  tanggal: '',
  jamTerbang: '',
  jamTiba: ''
})

function submitForm(event) {
  event.preventDefault()
  console.log('Formulir berhasil diproses:', form)
}
</script>

<template>
  <section id="bagian-2" class="kartu">
    <h2>Formulir Rencana Perjalanan</h2>
    <figure>
      <img
        src="/images.jpg"
        alt="moving out"
        width="640"
        height="360"
        loading="lazy"
      />
      <figcaption>
        Gambar seekor semut yang tampak sedih memegang sebatang kayu
        dengan tas yang diikat di ujungnya yang sedang pergi melakukan
        perjalanan.
      </figcaption>
    </figure>
    <form @submit="submitForm" novalidate>
      <div class="form-kolom">
        <label for="tanggal">Tanggal Berangkat</label>
        <input type="date" id="tanggal" name="tanggal" v-model="form.tanggal" required />
        <span class="pesan-galat">Tanggal berangkat wajib diisi (pilih tanggal keberangkatan).</span>
      </div>
      <div class="form-kolom">
        <label for="jam-terbang">Jam Terbang</label>
        <input type="text" id="jam-terbang" name="jam-terbang" v-model="form.jamTerbang" required />
        <span class="pesan-galat">Jam terbang wajib diisi (contoh format: 08:00 WIB).</span>
      </div>
      <div class="form-kolom">
        <label for="jam-tiba">Jam Tiba</label>
        <input type="text" id="jam-tiba" name="jam-tiba" v-model="form.jamTiba" required />
        <span class="pesan-galat">Jam tiba wajib diisi (contoh format: 14:30 WIB).</span>
      </div>
      <div class="kartu__kaki">
        <button type="submit">Simpan</button>
      </div>
    </form>
  </section>
</template>
