const hamburger = document.querySelector('#hamburger');
const nav =  document.querySelector('#nav-links');
const closeBtn = document.querySelector('#closeBtn');
const mail = document.querySelector('#mail');
const mailBtn = document.querySelector('#mailBtn');
const mailError = document.querySelector('#mailError');

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

function ValidateEmail(){
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    if (mail.value.match(mailFormat)){
       mailError.innerHTML = '';
        return (true)
   } else{
       mailError.innerHTML = 'Looks like this is not an Email';
        return (false)
   }
   
}

mailBtn.addEventListener('click', () => {
   ValidateEmail();
})

hamburger.addEventListener('click', ()  => {
    navList();
})

closeBtn.addEventListener('click', () => {
    navList();
})