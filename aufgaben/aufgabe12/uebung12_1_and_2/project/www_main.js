// needs to be set up with the www_main.php file
// every editor will be editing the same navigator_contents.json file which means there's only a single source of truth 
// add main-topic like html/CSS,javaScript Vue ...
// add subtopics to main-topic like functional programming
// add text to sub-topic functional programming utilizes the mathematical concept of lambda calculus.
// add source links to the subtopic

// As a user I want to be able to toggle betwen edit mode and viewing mode to ensure that no unintended editing is happening.

// As a user I want to be able to edit the content of a sub-topic by clicking on the content and start typing to enable immediate editing.

// As a user I want to be able to edit a sub-topics resource section by clicking into the resource content to enable immediate editing.

var elements = [];
var editMode = false;
window.onload = async function () {
    elements = await getElements();
    await populateHeaderNavbar();
};
async function getElements() {
    const header = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    try {
        const response = await fetch('http://localhost:8080/navigator_contents.json', header);
        const result = await response.json();
        return await result;
    }
    catch (err) {
        console.log(err);
    }
}
function populateHeaderNavbar() {
    const headerUl = document.getElementById("header-ul");
    Object.keys(elements).forEach(category => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerHTML = category;
        a.href = "#"
        a.onclick = () => populateLeftAside(category);
        li.appendChild(a);
        headerUl.appendChild(li);
    });
}
function populateLeftAside(category) {
    const leftAsideUl = document.getElementById("left-aside-ul");
    leftAsideUl.textContent = "";
    Object.keys(elements[category]).forEach(subcategory => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerHTML = subcategory;
        a.href = "#"
        a.onclick = () => {
            //a.style.textDecoration = "underline dotted";
            populateMain(category, subcategory);
            populateRightAside(category, subcategory);
        };
        li.appendChild(a);
        leftAsideUl.appendChild(li);
    })
    if(editMode){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.id = "addSubCategory";
        a.innerText = "+ Subcategory";
        a.onclick = addSubcategory;
        a.href="#";
        li.appendChild(a);
        leftAsideUl.appendChild(li);
    }
}
function addSubcategory(){
    const leftAsideUl = document.getElementById("left-aside-ul");
    const editBtn = leftAsideUl.lastChild;
    
       const li = document.createElement("li");
       const a = document.createElement("a");
       const newSubcategory = prompt("State your new sub category");
       if (newSubcategory.length === 0){
       }
       else{
        leftAsideUl.removeChild(leftAsideUl.lastChild);
        a.id = newSubcategory
        a.innerText = newSubcategory;
        a.href = "#";
        li.appendChild(a);
        leftAsideUl.appendChild(li);
       }
       leftAsideUl.appendChild(editBtn);  
}
function populateMain(category, subcategory) {
    const article = document.getElementById("main-article");
    article.innerText = "";
    article.innerText = elements[category][subcategory]["content"];
}
function populateRightAside(category, subcategory) {
    const article = document.getElementById("right-aside-ul");
    article.innerText = "";
    const references = elements[category][subcategory]["references"];
    references.forEach(x => {
        const a = document.createElement("a");
        a.href = x;
        a.innerText = x;
        a.target = "_blank";
        const li = document.createElement("li");
        li.appendChild(a);
        article.appendChild(li);
    });
}
function toggleEditMode(){
   if(editMode){
       editMode = false;
       document.getElementById("addHeaderTopicBtn").remove();
   }
   else{
       editMode = true;
       const headerUl = document.getElementById("header-ul");
       const li = document.createElement("li");
       const a = document.createElement("a");
       a.id = "addHeaderTopicBtn";
       a.onclick = addNewHeaderTopic;
       a.innerText = "+ topic";
       li.appendChild(a);
       headerUl.appendChild(li);
   }
   console.log(editMode);
}
function showEditModal(){
    let modal = document.getElementById('edit-modal');
    modal.style.display = 'grid';
    modal.style.justifyItems = 'center';
    modal.style.alignItems = 'center';

}
function addNewHeaderTopic(){
    const headerUl = document.getElementById("header-ul");
    const editBtn = headerUl.lastChild;
    
       const li = document.createElement("li");
       const a = document.createElement("a");
       const newHeaderTopic = prompt("State your new header topic");
       if (newHeaderTopic.length === 0){
       }
       else{
        headerUl.removeChild(headerUl.lastChild);
        a.id = newHeaderTopic
        a.innerText = newHeaderTopic;
        a.href = "#";
        li.appendChild(a);
        headerUl.appendChild(li);
       }
       headerUl.appendChild(editBtn);
       

}