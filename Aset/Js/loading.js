// JavaScript untuk mengatur transisi dari loading screen ke konten utama

window.addEventListener('load', function() {
    var loaderWrapper = document.getElementById('loader-wrapper');
    var startDiv = document.getElementById('start');
    var contentContainer = document.getElementById('content-container');
    var navContainer = document.getElementById('nav-container');

    loaderWrapper.classList.add('hide'); // Tambahkan kelas 'hide' untuk memulai transisi fading
    startDiv.style.display = 'block'; // Tampilkan konten utama setelah loading screen disembunyikan
    contentContainer.classList.add('show'); // Tampilkan konten utama setelah loading screen disembunyikan
    navContainer.classList.add('show'); // Tampilkan navigasi setelah loading screen disembunyikan

    setBackgroundImage(); // Set background image based on page
});

// dan memanggil fungsi 'setBackgroundImage()' ketika konten DOM sudah dimuat.
document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen dengan ID 'nav-container'
    var navContainer = document.getElementById('video-background');
    
    // Periksa apakah elemen tersebut ada sebelum menambahkan class
    if (navContainer) {
        // Tambahkan class 'show-nav' ke elemen
        navContainer.classList.add('show');
    } 
});
