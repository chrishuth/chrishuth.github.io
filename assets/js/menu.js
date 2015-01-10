var menuOpener = document.querySelector('.menu-opener'),
    menuOpenerInner = document.querySelector('.menu-opener-inner'),
    menu = document.querySelector('.menu'),
    menuInner = document.querySelector('.menu-inner');

menuOpener.addEventListener('click', function(){
    menuOpener.classList.toggle('active');
    menuOpenerInner.classList.toggle('active');
    menu.classList.toggle('active');
    menuInner.style.display = menuInner.style.display == 'flex' ? 'none':'flex';
}, false);