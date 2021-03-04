const hamburger = document.querySelector('#hamburger');
const nav =  document.querySelector('#nav-links');
const closeBtn = document.querySelector('#closeBtn');

function navList(){
    if(nav.classList.contains('hidden') && closeBtn.classList.contains('hidden')){
        nav.classList.remove('hidden');
        nav.classList.add('flex');
        hamburger.classList.add('hidden');
        closeBtn.classList.remove('hidden');
        closeBtn.classList.add('flex');

    }else{
        nav.classList.remove('flex');
        nav.classList.add('hidden');
        closeBtn.classList.remove('flex');
        closeBtn.classList.add('hidden');
        hamburger.classList.remove('hidden');

    }
}

hamburger.addEventListener('click', ()  => {
    navList();
})

closeBtn.addEventListener('click', () => {
    navList();
})