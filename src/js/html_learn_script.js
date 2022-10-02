// This is javascript code for html tutorial page

let vertical_scroll_menu = document.querySelector('.vertical-scroll-menu');
let main_block = document.querySelector('.main-block');

document.querySelector('.bar-btn').addEventListener('click', function(){
    if(vertical_scroll_menu.style.display === 'block'){
        vertical_scroll_menu.style.display = 'none';
    }
    else {
        vertical_scroll_menu.style.display = 'block';
    }
});

window.addEventListener('scroll', function(){
    if(window.innerWidth < 1000) {
        if(vertical_scroll_menu.style.display === 'block'){
            vertical_scroll_menu.style.display = 'none';
        }
    }
});

window.addEventListener('resize', function(){
    if(window.innerWidth > 1000) {
        vertical_scroll_menu.style.display = 'block';
    }
    else {
        vertical_scroll_menu.style.display = 'none';
    }
});