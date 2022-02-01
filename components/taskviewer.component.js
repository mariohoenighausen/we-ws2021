const taskViewerTemplate = document.createElement('template');
taskViewerTemplate.innerHTML = `
<style>
.code-link{
    text-decoration: none;
    color:black;
}
.code-link:hover{
    text-decoration: underline;
}
.render-vs-code > iframe{
    -webkit-box-shadow: 7px 4px 11px -4px #000000; 
    box-shadow: 7px 4px 11px -4px #000000;
    padding:5px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .render-vs-code{
        display:grid;
        grid-template-columns: 1fr;
    }
    .render-vs-code > iframe{
        width:100%;
        height:250x;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .render-vs-code{
        display:grid;
        grid-template-columns: 1fr;
    }
    .render-vs-code > iframe{
        width:100%;
        height:250px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .render-vs-code{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .render-vs-code > iframe{
        width:100%;
        height:500px;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .render-vs-code{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .render-vs-code > iframe{
        width:100%;
        height:750px;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .render-vs-code{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .render-vs-code > iframe{
        width:100%;
        height:750px   
    }
}
.fade-in{
    animation: fadeIn linear 5s;
}
@keyframes fadeIn{
    0% {opacity: 0;}
    100% {opacity:1;}
}
#tasks-container{
    animation: fadeIn linear 3s;
}
</style>`
class TaskViewer extends HTMLElement{
    constructor(){
        super();
        this.shRoot = this.attachShadow({mode: 'open'});
        const tasksContainer = document.createElement('div');
        tasksContainer.id = "tasks-container";
        taskViewerTemplate.content.appendChild(tasksContainer);
        this.shRoot.appendChild(taskViewerTemplate.content);
    }
    connectedCallback(){
    }
    static get observedAttributes() { return ['task']; }

    attributeChangedCallback(name, oldValue, newValue) {
        const tasksContainer = this.shRoot.querySelector("div#tasks-container");
        tasksContainer.innerHTML ='';
        tasksContainer.innerHTML += `${this.attributes.task.value}`;
        const taskId = this.attributes.task.value;
        const formattedTaskId = taskId.slice(1, taskId.length);
        const tasks = jsonContent[formattedTaskId].tasks
        tasks.forEach(task => {
            const taskTitle = document.createElement('task-title-component');
            taskTitle.setAttribute('title', task.title);
            taskTitle.setAttribute('description', task.description.text);
            tasksContainer.appendChild(taskTitle);
            task.qAndAs.forEach(item =>{
                const qAndA = document.createElement('q-and-a');
                if (item.submitted.a != undefined){
                    qAndA.setAttribute('q' ,item.q);
                }
                if (item.submitted.a != undefined){
                    qAndA.setAttribute('a', item.submitted.a);
                }
                
                tasksContainer.appendChild(qAndA);
                if(item.submitted.code.length > 0){
                    const renderVsCodeDiv = document.createElement('div');
                   
                    const codeLink = document.createElement('a');
                        codeLink.href = item.submitted.code;
                        codeLink.className = 'code-link';
                        codeLink.innerText = "View full page 🔗";
                        codeLink.target = 'blank_';
                        tasksContainer.appendChild(document.createElement('br'));
                        tasksContainer.appendChild(codeLink);
                        tasksContainer.appendChild(document.createElement('br'));
                    if (!item.submitted.nocodevis){
                        const codeDisplay = document.createElement('code-display');
                        codeDisplay.setAttribute('code', item.submitted.code);
                        tasksContainer.appendChild(codeDisplay);
                    }
                    if(!item.submitted.nocoderender){
                        let render = document.createElement('iframe');
                        render.setAttribute('src', item.submitted.code);
                        renderVsCodeDiv.appendChild(render);
                    }
                    renderVsCodeDiv.className = "render-vs-code";
                    tasksContainer.appendChild(renderVsCodeDiv);
                }
            });

        });
    }
}
customElements.define('task-viewer', TaskViewer);
