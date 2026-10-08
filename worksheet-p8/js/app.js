const pengalihTema = document.getElementById('tema');
if (pengalihTema) {
    pengalihTema.addEventListener('change', () => {
        document.body.classList.toggle('tema-aktif', pengalihTema.checked);
    });
}