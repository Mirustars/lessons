
document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.menu__icon')) {
		document.documentElement.classList.toggle('menu-open');
		e.preventDefault();
	}

})

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 50){
        header.classList.add('header__fixed');
    } else{
        header.classList.remove('header__fixed');
    }
}