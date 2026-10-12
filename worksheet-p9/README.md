### Tiket Keluar (Lembar F)

1. **Satu potong data yang tersimpan sebagai variabel:**  
   Variabel `profil.namaLengkap`. Kalau isinya berubah, cukup ganti nilainya di `app.js` tanpa perlu edit file HTML.

2. **Beda `const` dan `let`:**  
   `const` nilainya tetap dan tidak bisa diisi ulang, sedangkan `let` nilainya bisa berubah (contoh: `let pilihanKategori = "semua"`).

3. **Menyalin objek dengan `{ ...profil }` vs tanpa titik-tiga:**  
   Tanpa titik-tiga (`const salinan = profil`), data asli ikut berubah saat salinan diganti. Dengan `{ ...profil }`, data asli tetap aman karena dibuat objek baru.

4. **Dua hal yang diperiksa saat muncul `Cannot read properties of null` pada `querySelector`:**  
   - Cek penulisan nama id/class di `querySelector` (apakah ada typo atau lupa tanda `#`).
   - Cek letak tag `<script>` (pastikan berada di bawah sebelum `</body>`).

5. **Kenapa nilai input formulir tidak bisa langsung dijumlahkan?**  
   Karena nilai dari input bertipe teks (*string*). Supaya bisa dijumlahkan harus diubah dengan `Number(input.value) + 2`.

---

## Catatan Penggunaan AI

- **Bagian yang dibantu AI:** Hanya mengecek ulang penulisan sintaks ES6+ (array methods, spread operator, destructuring) dan pembuatan README.
- **Bagian yang dikerjakan sendiri:** Pengisian data profil, daftar keahlian, pemodelan proyek perjalanan, dan pengujian Console di browser.
