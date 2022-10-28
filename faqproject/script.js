document
  .querySelectorAll(".container")
  .forEach((item) => item.addEventListener("click", function (event) {
    this.classList.toggle('active')
  }));
