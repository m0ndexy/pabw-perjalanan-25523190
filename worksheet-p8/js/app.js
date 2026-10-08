const pengalihTema = document.getElementById('tema');
if (pengalihTema) {
    pengalihTema.addEventListener('change', () => {
        document.body.classList.toggle('tema-aktif', pengalihTema.checked);
    });
}

const profil = {
    namaLengkap: "Ahmad Dani Maulana",
    peranSaya: "Mahasiswa Teknik Informatika",
    keahlianSaya: ["PHP", "Javascript", "Python", "MySQL", "HTML", "CSS"],
};

const kalimat = `Nama saya ${profil.namaLengkap}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);
