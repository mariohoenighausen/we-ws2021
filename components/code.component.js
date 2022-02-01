const codeDisplayTemplate = document.createElement("template");
codeDisplayTemplate.innerHTML = ``;
class CodeDisplay extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
    await this.getCode();
  }
  async getCode() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    const headers = { "Content-Type": "text/html; charset=UTF-8" };
    try {
      const codeResponse = await fetch(
        `https://www2.inf.h-brs.de/~mhoeni2s/${this.attributes.code.value}`,headers
      );
      const codeAsJson = await codeResponse.text();
      codeDisplayTemplate.innerHTML =`<style>
      .scrollable{
        overflow-x:scroll;
        width:500px;
      }
      </style>`;
      shadowRoot.appendChild(codeDisplayTemplate.content);
      codeDisplayTemplate.innerHTML =`
      <div class="scrollable">
        <pre>
          <code>
            ${ codeAsJson}
          </code>
        </pre>
      </div>
        `;
      shadowRoot.appendChild(codeDisplayTemplate.content);
    } catch (error) {
      console.log(error);
    }
  }
}
customElements.define("code-display", CodeDisplay);
