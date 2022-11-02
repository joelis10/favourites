window.onload = function () {
  let containerHTML = localStorage.getItem("currentContainer");
  let containerHeight = localStorage.getItem("containerHeight");
  let containerColor = localStorage.getItem("containerColor")
  let borderColor = localStorage.getItem("borderColor")
  let bodyColor = localStorage.getItem("bodyColor")
  let titleColorStore = localStorage.getItem("titleColor")
  let shadow = localStorage.getItem("shadow")
  let dyslexic = localStorage.getItem("dyslexic")

  let container = document.querySelector(".container");
  let title = document.querySelector(".title")
  let addShadow = document.querySelector(".addShadow")

  if (containerHTML != null) {
    container.innerHTML = containerHTML;
    container.style.height = containerHeight;
  }

  if(containerColor != null) {
    container.style.backgroundColor = containerColor
  }

  if(borderColor != null) {
    container.style.borderColor = borderColor
  }

  if(bodyColor != null) {
    document.querySelector("body").style.backgroundColor = bodyColor
  }

  if(titleColorStore != null) {
    title.style.color = titleColorStore
  }

  if(shadow == "on") {
    addShadow.classList.add("buttonOn")
    container.classList.add("shadow");
  } else {
    addShadow.classList.remove("buttonOn")
    container.classList.remove("shadow");
    localStorage.setItem("shadow", "off")
  }

  if(dyslexic == "true") {
    document.querySelector(".body").classList.add("dyslexic")
  } else {
    document.querySelector(".body").classList.remove("dyslexic")
  }

  document.querySelectorAll(".newType").forEach(
    //listen for click on new franchise/sport
    (item) => item.addEventListener("click", addNew)
  );
  document.querySelectorAll(".bgChange").forEach(
    //listen for click on background change button
    (item) => item.addEventListener("click", changeContainer)
  );
  document.querySelectorAll(".borderChange").forEach(
    //listen for click on border change button
    (item) => item.addEventListener("click", changeBorder)
  );
  document.querySelectorAll(".bodyChange").forEach(
    //listen for click on body colour change button
    (item) => item.addEventListener("click", changeBody)
  );
  document.querySelectorAll(".buttonChange").forEach(
    //listen for click on button background change button
    (item) => item.addEventListener("click", changeButton)
  );
  document.querySelectorAll(".buttonBorder").forEach(
    //listen for click on button border change button
    (item) => item.addEventListener("click", changeButtonBorder)
  );
  document.querySelectorAll(".titleColor").forEach(
    //listen for click on title colour change button
    (item) => item.addEventListener("click", titleColor)
  );
  document.querySelectorAll(".addShadow").forEach(
    //listen for click on toggle shadow button
    (item) => item.addEventListener("click", toggleShadow)
  );
  document
    .querySelectorAll(".remove")
    .forEach((item) => item.addEventListener("click", removeSelected));

  document.querySelector("body").addEventListener("click", changeTitle);
};

function addNew(event) {
  var container = event.target.closest(".container");
  var ul = container.querySelector("ul");
  var li = document.createElement("li");
  var remove = document.createElement("button");
  var wiki = document.createElement("button");
  var height = container.offsetHeight;
  var newHeight = height + 35;

  userInput = prompt(
    "Enter a new franchise or sport:\nMake sure to use correct spelling in order to link to the Wikipedia page."
  );

  container.style.height = newHeight + "px";
  ul.appendChild(li);
  li.innerText = userInput;

  li.append(wiki);
  wiki.setAttribute("class", "wikipedia");
  wiki.innerText = "Wiki";
  wiki.setAttribute(
    "onClick",
    "window.open('https://en.wikipedia.org/wiki/" + userInput + "');"
  );

  li.append(remove);
  li.setAttribute("class", "franchise");
  remove.setAttribute("class", "remove");
  remove.innerHTML = "&times;";

  document
    .querySelectorAll(".remove")
    .forEach((item) => item.addEventListener("click", removeSelected));

  localStorage.setItem("currentContainer", container.innerHTML);
  localStorage.setItem("containerHeight", container.style.height);
}

function changeContainer(event) {
  userInput = prompt(
    "Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)"
  );
  const container = document.querySelector(".container");
  container.style.backgroundColor = userInput;

  localStorage.setItem("containerColor", container.style.backgroundColor)
  
}

function changeBorder(event) {
  userInput = prompt(
    "Enter a new border colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)"
  );
  const container = document.querySelector(".container");
  container.style.border = "2px solid " + userInput;

  localStorage.setItem("borderColor", container.style.borderColor)
}

function changeBody(event) {
  userInput = prompt(
    "Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)"
  );

  event.target.parentElement.closest(".body").style.background = userInput;

  localStorage.setItem("bodyColor", event.target.parentElement.closest(".body").style.background)
}

function changeButton(event) {
  userInput = prompt(
    "Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)"
  );
  document.querySelectorAll(".franchise").forEach(item => item.style.backgroundColor = userInput);
}

function changeButtonBorder(event) {
  userInput = prompt(
    "Enter a new border colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)"
  );
  const li = document.querySelectorAll(".franchise");

  for (var i = 0; i < li.length; i++) {
    li[i].style.border = "1px solid " + userInput;
  }
}

function titleColor(event) {
  userInput = prompt(
    "Enter a new colour:\nExamples: #eee - lightblue - rgb(255, 255, 255)"
  );
  let title = document.querySelector(".title")

  title.style.color = userInput;

  localStorage.setItem("titleColorStore", title.style.color)
}

function toggleShadow(event) {
  const container = document.querySelector(".container");
  container.classList.toggle("shadow");

  event.target.classList.toggle("buttonOn");
  
  if(event.target.classList.contains("buttonOn")) {
    localStorage.setItem("shadow", "on")
  } else {
    localStorage.setItem("shadow", "off")
  }
}

function removeSelected(event) {
  event.target.parentElement.closest("li").style.display = "none";

  var container = event.target.closest(".container");
  var height = container.offsetHeight;
  var newHeight = height - 35;
  container.style.height = newHeight + "px";

  localStorage.setItem("currentContainer", container.innerHTML);
  localStorage.setItem("containerHeight", container.style.height);
}

function changeTitle() {
  container = document.querySelector(".container");
  localStorage.setItem("currentContainer", container.innerHTML);
}
