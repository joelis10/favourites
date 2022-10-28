window.onload = function () {
  const checkAnim = localStorage.getItem("animation");
  const checkShadow = localStorage.getItem("shadow");
  const checkSimpleText = localStorage.getItem("simpleText");

  if (checkAnim == "off") {
    document
      .querySelectorAll(".project")
      .forEach((item) => item.classList.add("noAnim"));
  } else {
    document
      .querySelectorAll(".project")
      .forEach((item) => item.classList.remove("noAnim"));
  }

  if (checkShadow == "off") {
    document
      .querySelectorAll(".project")
      .forEach((item) => item.classList.add("noShadow"));
  } else {
    document
      .querySelectorAll(".project")
      .forEach((item) => item.classList.remove("noShadow"));
  }

  if (checkSimpleText == "true") {
    document.querySelector(".title").classList.add("simple");
  } else if(checkSimpleText == "false") {
    document.querySelector(".title").classList.remove("simple");
  }
};

document.querySelector(".Anim").addEventListener("click", function (event) {
  event.target.classList.toggle("toggled");
  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.toggle("noAnim"));

  if (event.target.classList.contains("toggled")) {
    localStorage.setItem("animation", "off");
  } else {
    localStorage.setItem("animation", "on");
  }
});

document.querySelector(".Shadow").addEventListener("click", function (event) {
  event.target.classList.toggle("toggled");
  document
    .querySelectorAll(".project")
    .forEach((item) => item.classList.toggle("noShadow"));

  if (event.target.classList.contains("toggled")) {
    localStorage.setItem("shadow", "off");
  } else {
    localStorage.setItem("shadow", "on");
  }
});

document
  .querySelector(".simpleText")
  .addEventListener("click", function (event) {
    event.target.classList.toggle("toggled");
    document.querySelector(".title").classList.toggle("simple");

    if (event.target.classList.contains("toggled")) {
      localStorage.setItem("simpleText", "false");
    } else {
      localStorage.setItem("simpleText", "true");
    }
  });

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
