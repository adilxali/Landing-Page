const cross = document.querySelector('.cross');
const search_container = document.querySelector('.search-container');
const search_icon = document.querySelector('.search');
const nav = document.querySelector('.navigation')
search_icon.style.cursor = 'pointer';

cross.addEventListener('mouseover', () => {
    cross.style.transform = 'rotate(18deg)';


    console.log('Adil ')
})

window.onscroll = function() { scrolli() };

function scrolli() {

    if (scrollY > 350) {
        nav.className = 'navigationS';
        console.log('work')
    } else {
        nav.className = 'navigation';
    }



}


search_icon.addEventListener('click', () => {


    search_container.classList = 'search-down';


    console.log('hello');
});
cross.addEventListener('click', () => {
    search_container.className = "search-up";

    // search_container.className = 'search-container';


});