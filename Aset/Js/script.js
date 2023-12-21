document.addEventListener('DOMContentLoaded', function() {
    var navContainer = document.getElementById('nav-container');
    navContainer.classList.add('show-nav');

    setBackgroundImage();
});

function setBackgroundImage() {
    const body = document.body;
    const pageNameMatch = window.location.pathname.match(/\/(\w+)\.html/);
    
    if (pageNameMatch) {
        const pageName = pageNameMatch[1];
        body.style.opacity = 0; // Set opacity to 0 for a smooth transition
        requestAnimationFrame(function() {
            body.style.background = `url('Aset/${pageName}.jpg') no-repeat center center fixed`;
            body.style.backgroundSize = 'cover';
            document.getElementById('pageTitle').innerText = `Welcome to ${pageName} Page`;
            body.style.opacity = 1; // Set opacity back to 1 after the transition
        });
    } else {
        console.error('Invalid page URL');
    }
}
