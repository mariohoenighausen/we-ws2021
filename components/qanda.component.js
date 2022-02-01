const qAndATemplate = document.createElement('template');
qAndATemplate.innerHTML = `
<style>
.question {
    font-size: 2em;
}

.answer{
    font-size: 1.5em;
}
</style>
`;
class QAndA extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(qAndATemplate.content);
        const h2 = document.createElement('h2');
        h2.innerText = this.attributes.q.value;
        h2.className = 'question';
        const span = document.createElement('span');
        span.innerText = this.attributes.a.value;
        span.className = 'answer'
        qAndATemplate.content.appendChild(h2);
        qAndATemplate.content.appendChild(span);
        shadowRoot.appendChild(qAndATemplate.content);
    }
}
customElements.define('q-and-a', QAndA);