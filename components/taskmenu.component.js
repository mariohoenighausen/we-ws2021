const taskMenuTemplate = document.createElement("template");
taskMenuTemplate.innerHTML = `
<style>
    nav > ul {
        list-style:none;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr ;
    }
    nav > ul > li > a{
        text-decoration:none;
        color:black;
    }
    nav > ul > li > a:hover{
        text-shadow: 5px 5px #8f7979;
        transform: scale(2,2);
        border-bottom: 0.03em solid black;
        border-left: 0.03em solid black;
        cursor:pointer;
    }
    /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    nav > ul > li > a{
        font-size: 6em; 
    }
  }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    nav > ul > li > a{
        font-size: 6.2em; 
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    nav > ul > li > a{
        font-size: 7.1em; 
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    nav > ul > li > a{
      font-size: 9.4em; 
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  nav > ul > li > a{
    font-size: 11.5em; 
  }
}
.fade-in{
    animation: fadeIn linear 5s;
}
@keyframes fadeIn{
    0% {opacity: 0;}
    100% {opacity:1;}
}
nav{
    animation: fadeIn linear 3s;
}
</style>`;
class TaskMenu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.populateMenu();
    shadowRoot.appendChild(taskMenuTemplate.content.cloneNode(true));
    this.shadowRoot.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", this._addEvents.bind(this, a));
    });
  }
  _addEvents(a, event) {
    this.testMethod(a.id);
    this.setAttribute("visibility", false);
    this.hidden = true;
    const btn = document.createElement("button");
    btn.id = "close-btn";
    btn.addEventListener("click", this.closeTaskView.bind(this));
    btn.innerText = "Back to the menu";
    document.getElementsByTagName("header")[0].appendChild(btn);
  }
  populateMenu() {
    const div = document.createElement("div");
    div.id = "header-content";
    const nav = document.createElement("nav");
    nav.id = "tasks-nav";
    const ul = document.createElement("ul");
    const data = JSON.parse(this.attributes.menuData.value);
    data.links.forEach((element) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.innerText = element.title;
      a.id = element.link;
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    div.appendChild(nav);
    taskMenuTemplate.innerHTML += div.innerHTML;
  }
  testMethod(id) {
    const taskViewer = document.getElementsByTagName("task-viewer")[0];
    taskViewer.setAttribute("task", id);
    taskViewer.style.display = 'grid';
  }
  closeTaskView(event) {
    this.setAttribute("visibility", true);
    this.hidden = false;
    document.getElementsByTagName("task-viewer")[0].style.display = 'none';
    document.getElementById("close-btn").remove();
  }
}
customElements.define("task-menu", TaskMenu);
