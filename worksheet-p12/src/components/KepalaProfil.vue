<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema" />
    <div class="header-baris">
      <h1>{{ props.profil.namaLengkap || props.profil.nama || "Mengatur Jam Perjalanan" }}</h1>
      <div class="header-kanan">
        <nav class="navbar">
          <ul>
            <li><a href="#bagian-1">Home</a></li>
            <li><a href="#bagian-2">Journey</a></li>
            <li><a href="#proyek">Proyek</a></li>
            <li><a href="#footer">Footer</a></li>
          </ul>
        </nav>
        <label for="tema" class="tombol-tema">
          <span class="label-tema-terang">Tema Terang</span>
          <span class="label-tema-gelap">Tema Gelap</span>
        </label>
      </div>
    </div>
  </header>
</template>
