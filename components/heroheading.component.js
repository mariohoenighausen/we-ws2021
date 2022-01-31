const heroHeadingTemplate = document.createElement('template');
heroHeadingTemplate.innerHTML = `<style>
.hero-heading{
    font-size: 12.5em;
    margin-top: 0;
    text-shadow: 0.03em 0.03em #8f7979;
}
a{
    text-decoration:none;
    color:black;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .hero-heading{
        font-size: 4.7em; 
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .hero-heading{
        font-size: 7.5em; 
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .hero-heading{
        font-size: 14.3em; 
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    
}
.fade-in{
    animation: fadeIn linear 5s;
}
@keyframes fadeIn{
    0% {opacity: 0;}
    100% {opacity:1;}
}
.hero-heading{
    animation: fadeIn linear 3s;
}
</style>
<div class="hero-heading">
<a href="/">WE 21/22 Mario Hönighausen</a>
</div>
`;
class HeroHeading extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(heroHeadingTemplate.content);
    }
}
customElements.define('hero-heading', HeroHeading);