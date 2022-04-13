const cross = document.querySelector('.cross');
const cross1 = document.querySelector('.cross1');
const cross2 = document.querySelector('.cross2');
const search_container = document.querySelector('.search-container');
const search_icon = document.querySelector('.search');
search_icon.style.cursor = 'pointer';
cross1.style.transition = 'all .3s ease';
cross2.style.transition = 'all .3s ease';
search_icon.addEventListener('click', () => {

    search_container.style.bottom = '0%';
    search_container.style.background = 'black';

    console.log('hello');
});
cross.addEventListener('click', () => {

    search_container.style.bottom = '100%';
    search_container.style.background = 'rgba(9, 9, 9, 0.1)';

});

function rotate() {
    cross1.style.rotate = '180deg';
    cross2.style.rotate = '180deg';
}