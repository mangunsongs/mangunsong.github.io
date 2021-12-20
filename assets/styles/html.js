console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
alert(" Stay Safe dan tetap perhatikan Protokol Kesehatan");

const menuToggle= document.querySelector('.menu-toggle input');
const nav = document.querySelector('#nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});     