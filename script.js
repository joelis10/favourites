const animation = document.querySelector('.toggleAnim')
animation.addEventListener('click', toggleAnimation)

function toggleAnimation(event) {
console.log('clicked')

    animation.classList.toggle('on')
}