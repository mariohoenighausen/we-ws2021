const copyrightTemplate = document.createElement('template');
copyrightTemplate.innerHTML = `
`;
class Copyright extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(copyrightTemplate.content);
        copyrightTemplate.innerHTML += `<style>
        .copyright-link{
            color:black;
            text-decoration:none;
            background: #fffdfd;
            text-shadow: #b9a8a8 2px 2px 0px;
        }
        .copyright-link:hover{
            text-shadow: #e0e0e0 0px 0px 1px;
        }
        </style>
        <a class="copyright-link" href="https://www2.inf.h-brs.de/~mhoeni2s/pages/legal.html">Copyright &copy ${new Date().getFullYear()} Mario Hönighausen</a>`;
        shadowRoot.appendChild(copyrightTemplate.content);
    }
}
customElements.define('copyright-component', Copyright);
