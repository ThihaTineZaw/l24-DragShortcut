const btns = document.querySelector('.btns');
const box = document.querySelector('.header-box');

box.addEventListener('click',function(){
    btns.classList.add('show')
})

box.addEventListener('dblclick',function(){
    btns.classList.remove('show')
})