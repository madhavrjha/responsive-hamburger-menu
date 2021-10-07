const barButton = document.querySelector('header button.nav-bars');
const barButtonIcon = document.querySelector(
    'header button.nav-bars i.fas.fa-bars'
);
const navigationMenu = document.querySelector('header nav');

barButton.addEventListener('click', (e) => {
    if (navigationMenu.classList.contains('open')) {
        navigationMenu.classList.remove('open');
        barButtonIcon.className = 'fas fa-bars fa-2x';
    } else {
        navigationMenu.classList.add('open');
        barButtonIcon.className = 'fas fa-times fa-2x';
    }
});
