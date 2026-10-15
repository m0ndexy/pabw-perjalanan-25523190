const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong") || document.querySelector("#pesan-kosong");
const muat = document.querySelector("#muat");
const formRencana = document.querySelector("form");
const inputTanggal = document.querySelector("#tanggal");
const inputJamTerbang = document.querySelector("#jam-terbang");
const inputJamTiba = document.querySelector("#jam-tiba");
const tombolKirim = formRencana ? formRencana.querySelector('button[type="submit"]') : null;

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function aturMemuat(sedangMemuat) {
  if (muat) muat.hidden = !sedangMemuat;
}

function tampilkanGalat(pesan) {
  if (kosong) {
    kosong.textContent = pesan;
    kosong.hidden = false;
  }
}

function render(daftar = []) {
  if (!wadah) return;

  wadah.textContent = "";

  if (daftar.length === 0) {
    if (kosong) {
      kosong.textContent = "Belum ada data.";
      kosong.hidden = false;
    }
    return;
  }
  if (kosong) kosong.hidden = true;

  const fragment = document.createDocumentFragment();
  daftar.forEach((proyek) => {
    fragment.append(buatKartu(proyek));
  });
  wadah.append(fragment);
}

const renderDaftar = render;

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

function pasangFilter(daftar = []) {
  if (!barisFilter) return;

  const tombolSemua = document.querySelector('#filter button[data-kategori="semua"]');
  if (tombolSemua) {
    tandaiTombolAktif(tombolSemua);
  }

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;
    const terpilih = daftar.filter(
      (proyek) => kategori === "semua" || proyek.kategori?.toLowerCase() === kategori?.toLowerCase()
    );

    render(terpilih);
  });
}

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

const daftarKolomForm = [inputTanggal, inputJamTerbang, inputJamTiba];
daftarKolomForm.forEach((kolom) => {
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

    daftarKolomForm.forEach((kolom) => {
      if (!kolom) return;
      const sah = validasiKolom(kolom);
      if (!sah && !kolomBermasalah) {
        kolomBermasalah = kolom;
      }
    });

    const formSah = periksaSeluruhForm();

    if (kolomBermasalah) {
      kolomBermasalah.focus();
      return;
    }

    if (formSah) {
      console.log("Formulir rencana perjalanan valid dan berhasil diproses.");
    }
  });
}

export {
  buatKartu,
  render,
  renderDaftar,
  pasangFilter,
  aturMemuat,
  tampilkanGalat,
  tandaiTombolAktif,
  validasiKolom,
  periksaSeluruhForm,
  wadah,
  kosong,
  muat,
};
