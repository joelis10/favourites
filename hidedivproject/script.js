document.querySelectorAll('.toggleBold').forEach(item => item.addEventListener("click", boldingTitle))
document.querySelectorAll('.doBg').forEach(item => item.addEventListener("click", bgClick))
document.querySelectorAll('.doTitle').forEach(item => item.addEventListener("click", titleClick))
document.querySelectorAll('.hideContents').forEach(item => item.addEventListener("click", toggleText))

function bgClick(event) {
  var userInput = prompt("Enter a new colour:\nExamples: #eee - rgb(255, 255, 255) - lightblue")
  event.target.closest('.themeable').style.backgroundColor = userInput
}

function boldingTitle(event) {
	event.target.closest('.themeable').classList.toggle('bolded');
}

function titleClick(event) {
  userInput = prompt("Enter a new title:")
	event.target.closest('.themeable').querySelector('.title').innerHTML = userInput;
}

function toggleText(event) {
	event.target.closest('.themeable').classList.toggle('textHide');
}