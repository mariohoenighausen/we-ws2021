const floatingBtnTemplate =  document.createElement('template');
floatingBtnTemplate.innerHTML = `<style>
.floating-btn{
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#0C9;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
}
</style>
<button class="floating-btn" onclick="self.close()">Close</button>
`;

class FloatingBtn extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.appendChild(floatingBtnTemplate.content);
    }
}
customElements.define('floating-btn',FloatingBtn);
window.addEventListener('load', function () {
    if (window.location !== window.parent.location) {
        document.getElementsByTagName('floating-btn')[0].remove();
    }
    else {

    }
})