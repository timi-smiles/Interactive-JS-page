let searchBtn=document.querySelector("#search-btn")
let searchBar=document.querySelector(".search-bar-container")
let formBtn=document.querySelector("#login-btn")
let loginForm=document.querySelector(".login-form-container")
let formClose=document.querySelector("#form-close")
let videoBtn=document.querySelectorAll('.vid-btn')


// Class list is used for a class to be added 

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

formBtn.addEventListener('click', david)
function david(){
    loginForm.classList.add('active')
}

formClose.addEventListener('click', faith)
function faith(){
    loginForm.classList.remove('active')
}

videoBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
})