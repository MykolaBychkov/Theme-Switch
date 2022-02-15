const themeBtn = document.querySelector('.theme-btn')
const header = document.querySelector('.header')
const point = document.querySelector('.point')

themeBtn.addEventListener('click', function (){
    document.body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode')
    themeBtn.classList.toggle('dark-mode')
    point.classList.toggle('dark-mode')
})