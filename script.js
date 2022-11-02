// when page loads, it checks localStorage for accessiblity options

window.onload = function () {
  const checkAnim = localStorage.getItem("animation");
  const checkShadow = localStorage.getItem("shadow");
  const checkSimpleText = localStorage.getItem("simpleText");
  const checkIfDyslexic = localStorage.getItem("dyslexic");

  if (checkAnim == "off") {
    document.querySelectorAll(".project").forEach((item) => item.classList.add("noAnim"));
    document.querySelector(".Anim").classList.add("toggled");
  } else {
    document.querySelectorAll(".project").forEach((item) => item.classList.remove("noAnim"));
    document.querySelector(".Anim").classList.remove("toggled");
    localStorage.setItem("animation", "on")
  }

  if (checkShadow == "off") {
    document.querySelectorAll(".project").forEach((item) => item.classList.add("noShadow"));
    document.querySelector(".Shadow").classList.add("toggled");
  } else {
    document.querySelectorAll(".project").forEach((item) => item.classList.remove("noShadow"));
    document.querySelector(".Shadow").classList.remove("toggled");
    localStorage.setItem("shadow", "on")
  }

  if (checkSimpleText == "true") {
    document.querySelector(".title").classList.add("simple");
    document.querySelector(".title").classList.remove("dyslexic");
    document.querySelector(".simpleText").classList.remove("toggled");
  } else {
    document.querySelector(".title").classList.remove("simple");
    document.querySelector(".simpleText").classList.add("toggled");
  }

  if (checkIfDyslexic == "true") {
    document.querySelector(".title").classList.add("dyslexic");
    document.querySelector(".title").classList.remove("simpleText");
    document.querySelectorAll(".project").forEach((item) => item.classList.add("dyslexic"));
    document.querySelector(".dyslexiaText").classList.remove("toggled");
  } else if (checkSimpleText == "false") {
    document.querySelector(".title").classList.remove("simple");
    document.querySelectorAll(".project").forEach((item) => item.classList.remove("dyslexic"));
    document.querySelector(".dyslexiaText").classList.add("toggled");
  }

};

// animation and shadow event listeners

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

//modal event listeners

document.querySelector(".open-modal").addEventListener("click", function (event) {
    document.querySelector(".access-modal").classList.toggle("show");
  });

document.querySelector(".close").addEventListener("click", function (event) {
  document.querySelector(".access-modal").classList.toggle("show");
});

// simpleText and dyslexiaText event listeners

document.querySelector(".simpleText").addEventListener("click", function (event) {
  event.target.classList.toggle("toggled");
  document.querySelector(".dyslexiaText").classList.add("toggled")
  localStorage.setItem("dyslexic", "false")

  document.querySelector(".title").classList.toggle("simple");

  if (event.target.classList.contains("toggled")) {
    localStorage.setItem("simpleText", "false");
  } else {
    localStorage.setItem("simpleText", "true");
  }
});

document.querySelector(".dyslexiaText").addEventListener("click", function (event) {
    event.target.classList.toggle("toggled");
    document.querySelector(".simpleText").classList.add("toggled")
    localStorage.setItem("simpleText", "false")

    document.querySelector(".title").classList.toggle("dyslexic");
    document.querySelectorAll(".project").forEach((item) => item.classList.toggle("dyslexic"));
    document.querySelector("#disqus_thread").classList.toggle("dyslexic")

    if (event.target.classList.contains("toggled")) {
      localStorage.setItem("dyslexic", "false");
    } else {
      localStorage.setItem("dyslexic", "true");
    }
});

// Disqus Comments

(function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://joelswebprojects.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

//show comments button

document.querySelector(".show-comments").addEventListener("click", function(event) {
  document.querySelector("#disqus_thread").classList.toggle("show")
  event.target.classList.toggle("toggled")
})
