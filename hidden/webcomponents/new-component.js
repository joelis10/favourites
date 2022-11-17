const template = document.createElement("template");
template.innerHTML = `
<style>
  :host { display: flex; gap: 10px;align-items: center; }
</style>
  <img part="img" />
  <div class="container">
    <h3 part="name"><span part="name">Name</span></h3>
    <div class="info">
      <p id="email">Email</p>
      <p id="phone">Phone</p> 
    </div>
    <button part="button" id="toggle-info">Hide Info</button>
  </div>
`;

class newComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true))


    this.showInfo = true;

    if (this.getAttribute("name") == null) {
      this.setAttribute("name", "Name");
    } else {
      this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    }

    if (this.getAttribute("avatar") == null) {
      this.shadowRoot.querySelector("img").src =
        "https://img.icons8.com/officel/512/circled-user-male-skin-type-6.png";
    } else {
      this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    }

    if (this.getAttribute("email") == null) {
      this.setAttribute("email", "Email");
    } else {
      this.shadowRoot.querySelector("#email").innerText =
        this.getAttribute("email");
    }

    if (this.getAttribute("phone") == null) {
      this.setAttribute("phone", "Phone");
    } else {
      this.shadowRoot.querySelector("#phone").innerText =
        this.getAttribute("phone");
    }
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector(".info");
    const img = this.shadowRoot.querySelector("img");
    const toggleBtn = this.shadowRoot.querySelector("#toggle-info");
    const container = this.shadowRoot.querySelector(".container");

    if (this.showInfo) {
      info.style.display = "block";
      toggleBtn.innerText = "Hide Info";
      this.style.height = "10rem";
      img.style.width = "10rem";
      container.style.marginLeft = "0px";
    } else {
      info.style.display = "none";
      toggleBtn.innerText = "Show Info";
      this.style.height = "100px";
      img.style.width = "100px";
      container.style.marginLeft = "-50px";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define("new-component", newComponent);
