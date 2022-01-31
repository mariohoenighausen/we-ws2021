const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
<style>
iframe{
    width:100%;
    height:1000px;
    frameborder = 0;
}

.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
<style>
`;
class Modal extends HTMLElement{
    constructor(){
        super();
        this.modalDiv = document.createElement('div');
        this.modalDiv.className ="modal";
        this.modalDiv.id = "test";
        this.modalContentDiv = document.createElement('div');
        this.modalContentDiv.className = 'modal-content'
        this.closingSpan = document.createElement('span');
        this.closingSpan.innerHTML = '&times;'
        this.closingSpan.className = 'close';
        //this.iframe = document.createElement('iframe');
        this.modalOpenBtn = document.createElement('button');
        this.modalOpenBtn.innerText = 'Open in modal';
        
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'open'});
        this.closingSpan.addEventListener('click', this._closeModal.bind(this, this.modalDiv.id))
        this.modalContentDiv.appendChild(this.closingSpan);
        this.codeDisplay;
        this.renderDisplay;
        this.noContentSpan = document.createElement('span');
        if(this.attributes.code.value.length > 0){
            this.codeDisplay = document.createElement('code-display');
            this.codeDisplay.setAttribute("code", this.attributes.code.value);
            this.modalContentDiv.appendChild(this.codeDisplay);
        }
        else if(this.attributes.render.value.length > 0){
            this.renderDisplay = document.createElement('iframe');
            this.renderDisplay.setAttribute('src', this.attributes.render.value);
            this.modalContentDiv.appendChild(this.renderDisplay);
        }
        else{
            this.noContentSpan.innerText = 'There is no content to show!';
            this.modalContentDiv.appendChild(this.noContentSpan);
        }
        this.modalDiv.appendChild(this.modalContentDiv);
        this.modalOpenBtn.addEventListener('click', this._openModal.bind(this));
        modalTemplate.content.appendChild(this.modalOpenBtn);
        modalTemplate.content.appendChild(this.modalDiv);
        shadowRoot.appendChild(modalTemplate.content);
    }
    //TODO: add an input for the html-address used in the iframe.
    _closeModal(id, event){
        //document.getElementById(id).style.display = "none";
        this.modalDiv.style.display = "none";
    }
    _openModal(event){
        this.modalDiv.style.display = "block";
    }
    
}
customElements.define('modal-component', Modal);
