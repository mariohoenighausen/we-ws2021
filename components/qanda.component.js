const qAndATemplate = document.createElement('template');
qAndATemplate.innerHTML = `
<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    h2{
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    h2{
        font-size:2em
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
 
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
`;
class QAndA extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const h2 = document.createElement('h2');
        h2.innerText = this.attributes.q.value;
        h2.className = 'sub-topic-heading';
        const span = document.createElement('span');
        span.innerText = this.attributes.a.value;
        qAndATemplate.content.appendChild(h2);
        qAndATemplate.content.appendChild(span);
        shadowRoot.appendChild(qAndATemplate.content);
    }
}
customElements.define('q-and-a', QAndA);