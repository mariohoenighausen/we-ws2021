const codeDisplayTemplate = document.createElement("template");
codeDisplayTemplate.innerHTML = ``;
class CodeDisplay extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(codeDisplayTemplate.content);
    await this.getCode();
    shadowRoot.appendChild(codeDisplayTemplate.content);
  }
  async getCode() {
    const headers = { "Content-Type": "text/html; charset=UTF-8" };
    try {
      const codeResponse = await fetch(
        `https://www2.inf.h-brs.de/~mhoeni2s/${this.attributes.code.value}`,headers
      );
      const codeAsJson = await codeResponse.text();
      const code = document.createElement("code");
      const pre = document.createElement("pre");
      code.innerText = codeAsJson;
      pre.appendChild(code);
      codeDisplayTemplate.content.appendChild(code);
    } catch (error) {
      console.log(error);
    }
  }
}
customElements.define("code-display", CodeDisplay);
