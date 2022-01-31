const footerBarTemplate = document.createElement('template');
footerBarTemplate.innerHTML = `
<style>
    nav > ul {
        list-style:none;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items:center;

    }
    .legal-notice{
        display:grid;
        justify-items:center;
    }
    a{
        text-decoration:none;
        color:black;
    }
    a:hover{
        text-decoration:underline;
    }
</style>
<nav>
<ul>
<li><a href="https://www2.inf.h-brs.de/~mhoeni2s/pages/about.html">About</a></li>
<li><a href="https://www2.inf.h-brs.de/~mhoeni2s/pages/contact.html">Contact</a></li>
<li><a href="https://www2.inf.h-brs.de/~mhoeni2s/pages/legal.html">Legal</a></li>
</ul>
</nav>
<div class="legal-notice">
    <copyright-component></copyright-component>
</div>
`;
class FooterBar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(footerBarTemplate.content);
    }
}
customElements.define('footer-bar', FooterBar);
