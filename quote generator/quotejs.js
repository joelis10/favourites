const btn = document.querySelector('#new-quote')
const quote = document.querySelector('.quote')
const person = document.querySelector('.person')

const quotes = [{
    quote: 'Wisely, and slow. They stumble that run fast.',
    person: 'William Shakespeare'
}, {
    quote: 'If you judge people, you have no time to love them.',
    person: 'Mother Teresa'
}, {
    quote: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    person: 'Mark Twain'
}, {
    quote: 'All that we are is the result of what we have thought.',
    person: 'Buddha'
}, {
    quote: 'The most courageous act is still to think for yourself. Aloud.',
    person: 'Coco Chanel'
}, {
    quote: 'Stay hungry, stay foolish.',
    person: 'Steve Jobs'
}, {
    quote: 'I have no special talent. I am only passionately curious.',
    person: 'Albert Einstein'
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

});