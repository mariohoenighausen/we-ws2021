const taskTitleTemplate = document.createElement('template');
taskTitleTemplate.innerHTML = `
<style>
.topic-heading {
    font-size: 2.2em;
}
</style>
`;
class TaskTitle extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'open'});
        const title = document.createElement('h2');
        title.className = 'topic-heading';
        title.innerHTML = this.attributes.title.value;
        const description = document.createElement('span');
        description.innerHTML = this.attributes.description.value;
        taskTitleTemplate.content.appendChild(title);
        taskTitleTemplate.content.appendChild(description);
        shadowRoot.appendChild(taskTitleTemplate.content);
    }
}
customElements.define('task-title-component', TaskTitle);
