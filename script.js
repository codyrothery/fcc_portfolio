const header = document.querySelector('.navbar');

sindow.onscroll = function() {
    var top = window.scrollY;
    if(top>=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}