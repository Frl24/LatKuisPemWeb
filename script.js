const tombolPesan = document.querySelectorAll('.btn-primary');

tombolPesan.forEach((tombol) => {
    tombol.addEventListener('click', () => {
        const namaMenu = tombol.parentElement.querySelector('h5').textContent;
        alert(`Pesanan ${namaMenu} berhasil ditambahkan.`);
    });
});