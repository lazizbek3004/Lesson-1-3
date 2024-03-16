// so lets get started
let button = document.querySelector('.cat')
let more = document.querySelector('.more')
let neto = document.querySelector('.open')
let final = document.querySelector('.box')
let finalist = document.querySelector('.this')

button.addEventListener('click', ()=>{
    if(more.textContent === 'More'){
        more.textContent = 'Less'
        button.style.width = '150px'
        neto.classList.add('open1')
        button.classList.add('roses')
        final.style.display = 'flex';
        finalist.style.display = 'flex'
    }else{
        more.textContent = 'More'
        button.style.width = '130px'
        neto.classList.remove('open1')
        button.classList.remove('roses')
        final.style.display = 'none'
        finalist.style.display = 'none'
    }
})
















