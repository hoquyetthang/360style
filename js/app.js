document.querySelector('.slider-next').onclick = function(){
    let lists = document.querySelectorAll('.slider-item');
    console.log(lists);
    document.querySelector('.slider-main').appendChild(lists[0])
}
document.querySelector('.slider-prev').onclick = function(){
    let lists = document.querySelectorAll('.slider-item');
    console.log(lists);
    document.querySelector('.slider-main').prepend(lists[lists.length - 1])
}


var button = document.querySelectorAll('.header_navbar-item');
var subMenu = document.querySelector('.header_navbar-submenu');
var menuBtn = document.querySelector('.header_action-menu i');
var navbar = document.querySelector('.header_navbar');
var closeBtn = document.querySelector('.header_navbar-close');




button[2].onclick = function(){
    subMenu.style.visibility = 'visible';
}
menuBtn.onclick = function(){
    navbar.classList.add('active');

}
closeBtn.onclick = function(){
    navbar.classList.remove('active');
}


