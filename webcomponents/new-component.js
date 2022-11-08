const template = document.createElement("template");
template.innerHTML = `
<style>
  .user-card {
    font-family: sans-serif;
    background: lightgrey;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: darkorchid 5px solid;
    border-radius: 10px;
    transition: .5s;
  }

  .user-card img {
    width: 100%;
    transition: .5s;
    border-radius: 10px 0 0 10px;
  }

  .user-card button {
    cursor: pointer;
    background: darkorchid;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: bold;
  }

  h3 {
    color: darkblue;
  }

  .container {
    transition: .5s;
  }

</style>
<div class="user-card">
  <img />
  <div class="container">
    <h3></h3>
    <div class="info">
      <p id="email"></p>
      <p id="phone"></p> 
    </div>
    <button id="toggle-info">Hide Info</button>
  </div>
</div>
`;

class newComponent extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar")
    this.shadowRoot.querySelector("#email").innerText = this.getAttribute("email")
    this.shadowRoot.querySelector("#phone").innerText = this.getAttribute("phone")
  }

  toggleInfo() {
    this.showInfo = !this.showInfo
    const info = this.shadowRoot.querySelector(".info")
    const toggleBtn = this.shadowRoot.querySelector("#toggle-info")
    const userCard = this.shadowRoot.querySelector(".user-card")
    const img = this.shadowRoot.querySelector("img")
    const container = this.shadowRoot.querySelector(".container")

    if(this.showInfo) {
        info.style.display = "block"
        toggleBtn.innerText = "Hide Info"
        userCard.style.height = "163.33px"
        img.style.width = "100%"
        container.style.marginLeft = "0px"
    } else {
        info.style.display = "none"
        toggleBtn.innerText = "Show Info"
        userCard.style.height = "100px"
        img.style.width = "100px"
        container.style.marginLeft = "-50px"
    }
  }

  connectedCallback() {
   this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo())
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener() 
  }
}

window.customElements.define("new-component", newComponent);
