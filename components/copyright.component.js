const copyrightTemplate = document.createElement('template');
copyrightTemplate.innerHTML = `
<style>
a{
    color:black;
    text-decoration:none;
}
a:hover{
    text-decoration:underline;
}
</style>`;
class Copyright extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});
        copyrightTemplate.innerHTML += `
        <a href="https://www2.inf.h-brs.de/~mhoeni2s/pages/legal.html">Copyright &copy ${new Date().getFullYear()} Mario Hönighausen</a>`;
        shadowRoot.appendChild(copyrightTemplate.content);
    }
}
customElements.define('copyright-component', Copyright);
