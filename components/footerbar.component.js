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
    .legal-notice:hover{
        text-shadow: #e0e0e0 0px 0px 1px;
    }
    nav > ul > li > a{
        font-size:1.5em;
        text-decoration:none;
        color:black;
        text-shadow: #b9a8a8 2px 2px 0px;
        background-image: linear-gradient(black, black);
        background-position: 50% 90%; 
        background-size: 0% 2px;
        background-repeat: no-repeat;
        transition:
            background-size 0.3s,
            background-position 0s 0.3s; 
    }   
    nav > ul > li > a:hover{
            text-shadow: #e0e0e0 0px 0px 1px;
                background-position: 100% 90%; 
                background-size: 100% 2px;
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
