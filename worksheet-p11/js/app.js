// js/app.js: perakit
import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pulihkan(muat());                 // lembar D: pilihan terakhir, atau nilai bawaan
  pasangPendengar();                // events.js: klik filter, favorit, atur ulang
  aturMemuat(true);
  try {
    isiProyek(await ambilProyek()); // isiProyek memanggil render(state)
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
  } finally {
    aturMemuat(false);
  }
}
mulai();
