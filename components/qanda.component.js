const qAndATemplate = document.createElement('template');
qAndATemplate.innerHTML = ``;
class QAndA extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'open'});
        qAndATemplate.innerHTML= `
        <h3>${this.attributes.q.value}</h3> <span>${this.attributes.a.value}</span>`
        shadowRoot.appendChild(qAndATemplate.content);
    }
}
customElements.define('q-and-a', QAndA);