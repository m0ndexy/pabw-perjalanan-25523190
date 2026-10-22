// js/events.js: pendengar peristiwa
import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  // 1. Delegasi klik filter kategori
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol || tombol.id === "atur-ulang") return;
      const kategori = tombol.dataset.kategori;
      if (kategori) {
        pilihKategori(kategori);
      }
    });
  }

  // 2. Delegasi klik tombol favorit di wadah daftar (Lembar C.3)
  const wadah = document.querySelector("#daftar");
  if (wadah) {
    wadah.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  // 3. Tombol atur ulang (bila ada)
  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }

  // 4. Pengalih tema
  const pengalihTema = document.getElementById("tema");
  if (pengalihTema) {
    pengalihTema.addEventListener("change", () => {
      document.body.classList.toggle("tema-aktif", pengalihTema.checked);
    });
  }

  // 5. Validasi dan submit formulir rencana perjalanan
  const formRencana = document.querySelector("form");
  const inputTanggal = document.querySelector("#tanggal");
  const inputJamTerbang = document.querySelector("#jam-terbang");
  const inputJamTiba = document.querySelector("#jam-tiba");
  const tombolKirim = formRencana ? formRencana.querySelector('button[type="submit"]') : null;

  function validasiKolom(kolom) {
    if (!kolom) return true;
    const pesanGalat = kolom.parentElement?.querySelector(".pesan-galat");
    const nilai = kolom.value.trim();
    const sah = nilai !== "";

    if (!sah) {
      kolom.setAttribute("aria-invalid", "true");
      if (pesanGalat) pesanGalat.style.display = "block";
    } else {
      kolom.setAttribute("aria-invalid", "false");
      if (pesanGalat) pesanGalat.style.display = "none";
    }

    return sah;
  }

  function periksaSeluruhForm() {
    const tanggalSah = inputTanggal ? inputTanggal.value.trim() !== "" : true;
    const jamTerbangSah = inputJamTerbang ? inputJamTerbang.value.trim() !== "" : true;
    const jamTibaSah = inputJamTiba ? inputJamTiba.value.trim() !== "" : true;
    const semuaSah = tanggalSah && jamTerbangSah && jamTibaSah;

    if (tombolKirim) {
      tombolKirim.disabled = !semuaSah;
    }

    return semuaSah;
  }

  [inputTanggal, inputJamTerbang, inputJamTiba].forEach((kolom) => {
    if (!kolom) return;
    kolom.addEventListener("input", () => {
      validasiKolom(kolom);
      periksaSeluruhForm();
    });
  });

  if (formRencana) {
    formRencana.addEventListener("submit", (event) => {
      event.preventDefault();
      let kolomBermasalah = null;

      [inputTanggal, inputJamTerbang, inputJamTiba].forEach((kolom) => {
        if (!kolom) return;
        const sah = validasiKolom(kolom);
        if (!sah && !kolomBermasalah) {
          kolomBermasalah = kolom;
        }
      });

      if (kolomBermasalah) {
        kolomBermasalah.focus();
        return;
      }

      if (periksaSeluruhForm()) {
        console.log("Formulir rencana perjalanan valid dan berhasil diproses.");
      }
    });
  }
}
