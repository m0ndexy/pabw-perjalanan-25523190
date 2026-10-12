import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const tombolFilter = document.querySelectorAll(".filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const formRencana = document.querySelector("form");
const inputTanggal = document.querySelector("#tanggal");
const inputJamTerbang = document.querySelector("#jam-terbang");
const inputJamTiba = document.querySelector("#jam-tiba");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul; // teks, bukan HTML
  return li;
}

const data = typeof daftarProyek !== "undefined" ? daftarProyek : (window.daftarProyek || []);

if (wadah && Array.isArray(data)) {
  wadah.textContent = "";
  data.forEach((proyek) => wadah.append(buatKartu(proyek)));
}
