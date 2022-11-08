class AComponent extends HTMLElement {
  connectedCallback() {
    console.log("connected");
    this.innerHTML = "<h1>Hi</h1>";
  }
}

customElements.define("a-component", AComponent);