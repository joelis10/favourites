let openBtn = document.getElementById('open-btn')
let modal = document.getElementById('modal-container')
let closeBtn = document.getElementById('close-btn')
let background = document.querySelector('.background-image')

const images = [{
    image: 'url(bgImages/woods1.jpg)'
}, {
    image: 'url(bgImages/woods2.jpg)'
}, {
    image: 'url(bgImages/woods3.jpg)'
}, {
    image: 'url(bgImages/woods4.jpg)'
}, {
    image: 'url(bgImages/woods5.jpg)'
}, ];

openBtn.addEventListener('click', function(){

    modal.style.display = "block"

})

closeBtn.addEventListener('click', function(){

    modal.style.display = "none"
    
})

window.addEventListener('click', function(event){

    if(event.target === modal) {
        modal.style.display = "none"
    }
    
    //let randomImage = Math.floor(Math.random() * images.length);
    //background.style.background = images[randomImage].image + 'no-repeat center center/ cover';

})