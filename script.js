document.querySelector(".Anim").addEventListener("click", function (event) {
  event.target.classList.toggle("toggled");
  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.toggle("noAnim"));
});

document.querySelector(".Shadow").addEventListener("click", function (event) {
  event.target.classList.toggle("toggled");
  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.toggle("noShadow"));
});  

document.querySelector('.simpleText').addEventListener('click', function(event) {
  event.target.classList.toggle('toggled')
  document.querySelector('.title').classList.toggle('simple')
}) 

/*
document.querySelector('.toggleAll.toggled').addEventListener('click', function(event) {
  event.target.parentElement.querySelectorAll('.toggle').forEach(item => item.classList.add('toggled'))
  event.target.classList.toggle('toggled') 

  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.add("noAnim"));
  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.add("noShadow"));
  document.querySelector('.title').classList.add('simple')

})

document.querySelector('.toggleAll').addEventListener('click', function(event) {
  document.querySelectorAll('.toggle').forEach(item => item.classList.remove('toggled'))
  event.target.classList.toggle('toggled') 

  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.remove("noAnim"));
  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.remove("noShadow"));
  document.querySelector('.title').classList.remove('simple') 

})
*/

document
  .querySelector(".open-modal")
  .addEventListener("click", function (event) {
    document.querySelector(".access-modal").classList.toggle("show");
  });

document.querySelector(".close").addEventListener("click", function (event) {
  document.querySelector(".access-modal").classList.toggle("show");
});
