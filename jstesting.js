document.querySelectorAll('.newType').forEach //listen for click on new franchise/sport
    (item => item.addEventListener
        ('click', addNew))
document.querySelectorAll('.bgChange').forEach //listen for click on background change button
    (item => item.addEventListener
        ('click', changeContainer))
document.querySelectorAll('.borderChange').forEach //listen for click on border change button
    (item => item.addEventListener
        ('click', changeBorder))
document.querySelectorAll('.bodyChange').forEach //listen for click on body colour change button
    (item => item.addEventListener
        ('click', changeBody))
document.querySelectorAll('.buttonChange').forEach //listen for click on button background change button
    (item => item.addEventListener
        ('click', changeButton))
document.querySelectorAll('.buttonBorder').forEach //listen for click on button border change button
    (item => item.addEventListener
        ('click', changeButtonBorder))
document.querySelectorAll('.titleColor').forEach //listen for click on title colour change button
    (item => item.addEventListener
        ('click', titleColor))
document.querySelectorAll('.addShadow').forEach //listen for click on toggle shadow button
    (item => item.addEventListener
        ('click', toggleShadow))
document.querySelectorAll('.remove').forEach
    (item => item.addEventListener
        ('click', removeSelected))

function addNew(event) {
    var container = event.target.closest('.container');
    var ul = container.querySelector('ul');
    var li = document.createElement('li');
    var remove = document.createElement('button');
    var wiki = document.createElement('button');
    var height = container.offsetHeight;
    var newHeight = height + 35;
    
    userInput = prompt("Enter a new franchise or sport:\nMake sure to use correct spelling in order to link to the Wikipedia page.");
    

    container.style.height = newHeight + "px";
    ul.append(li);
    li.innerText = userInput;
    
    li.append(wiki)
    wiki.setAttribute('class', 'wikipedia');
    wiki.innerText = "Wiki";
    wiki.setAttribute('onClick', "window.open('https://en.wikipedia.org/wiki/" + userInput + "');")

    li.append(remove)
    li.setAttribute('class', 'franchise');
    remove.setAttribute('class', 'remove');
    remove.innerHTML = '&times;';

    document.querySelectorAll('.remove').forEach(item => item.addEventListener('click', removeSelected))
}

function changeContainer(event) {
    userInput = prompt("Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)")
    const container = document.querySelectorAll('.container');

    for(var i = 0; i < container.length; i++) {
        container[i].style.backgroundColor = userInput;
    };
}

function changeBorder(event) {
    userInput = prompt("Enter a new border colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)")
    const container = document.querySelectorAll('.container');

    for(var i = 0; i < container.length; i++) {
        container[i].style.border = "2px solid " + userInput;
    };
}

function changeBody(event) {
    userInput = prompt("Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)")
    
    event.target.parentElement.closest('.body').style.background = userInput
};

function changeButton(event) {
    userInput = prompt("Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)");
    const li = document.querySelectorAll('.franchise');
    
    for(var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = userInput;
    };
};

function changeButtonBorder(event) {
    userInput = prompt("Enter a new border colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)")
    const li = document.querySelectorAll('.franchise');

    for(var i = 0; i < li.length; i++) {
        li[i].style.border = "1px solid " + userInput;
    };
}

function titleColor(event) {
    userInput = prompt("Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)");
    const container = document.querySelectorAll('.container');

    for(var i = 0; i < container.length; i++) {
        container[i].style.color = userInput;
    };
}

function toggleShadow(event) {
    const container = document.querySelectorAll('.container');

    for(var i = 0; i < container.length; i++) {
        container[i].classList.toggle('shadow');
    };

    event.target.classList.toggle('buttonOn')
}

function removeSelected(event) {
    event.target.parentElement.closest('li').style.display = "none";

    var container = event.target.closest('.container');
    var height = container.offsetHeight;
    var newHeight = height - 35;
    container.style.height = newHeight + "px";
}