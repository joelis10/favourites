const btn = document.querySelector('#new-quote')
const quote = document.querySelector('.quote')
const person = document.querySelector('.person')
const background = document.querySelector('.background-image')

const quotes = [{
    quote: 'Wisely, and slow. They stumble that run fast.',
    person: '- William Shakespeare'
}, {
    quote: 'If you judge people, you have no time to love them.',
    person: '- Mother Teresa'
}, {
    quote: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    person: '- Mark Twain'
}, {
    quote: 'All that we are is the result of what we have thought.',
    person: '- Buddha'
}, {
    quote: 'The most courageous act is still to think for yourself. Aloud.',
    person: '- Coco Chanel'
}, {
    quote: 'Stay hungry, stay foolish.',
    person: '- Steve Jobs'
}, {
    quote: 'I have no special talent. I am only passionately curious.',
    person: '- Albert Einstein'
}, {
    quote: 'My life is a fart but my ass needs to poop.',
    person: '- Wiki'
}, ];

const images = [{
    image: 'url(bgImages/library1.jpg)'
}, {
    image: 'url(bgImages/library2.jpg)'
}, {
    image: 'url(bgImages/library3.jpg)'
}, {
    image: 'url(bgImages/library4.jpg)'
}, {
    image: 'url(bgImages/library5.jpg)'
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

    //let randomImage = Math.floor(Math.random() * images.length);
    //background.style.background = images[randomImage].image + 'no-repeat center center/ cover';
});