const cross = document.querySelector('.cross');
const search_container = document.querySelector('.search-container');
const search_icon = document.querySelector('.search');
const nav = document.querySelector('.navigation')
search_icon.style.cursor = 'pointer';
const NavigationS = nav.offsetTop;
// const su = search_container.className = "search-up";

function scrolli() {

    if (window.scrollY >= NavigationS) {
        nav.classList.add("NavigationS")
        console.log('work')
    } else {
        nav.classList.remove('NavigationS');
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