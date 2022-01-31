<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./www_main.css">
</head>

<body>
    <?php 
    session_start();
    unset($_SESSION['password']);
    unset($_SESSION['error']);
    ?>
    <header>
        <h1>Welcome to the WWW-navigator</h1>
        <a href="login.php">LogOut</a>
        <nav>
            <ul id="header-ul">

            </ul>
        </nav>
        <button onclick="showEditModal()">Edit</button>
    </header>
    <aside class="left-aside">
        <nav>
            <ul id="left-aside-ul">

            </ul>
        </nav>
    </aside>
    <main>
        <article id="main-article"></article>
    </main>
    <aside class="right-aside">
        <nav>
            <ul id="right-aside-ul">

            </ul>
        </nav>
    </aside>
    <footer>
        <p>© Mario Hönighausen</p>
    </footer>
    <?php 
         $file = '../navigator_contents.json';
         $contents = file_get_contents($file);
         $json = json_decode($contents);
    ?> 
    <script>
       let content = <?php echo json_encode($json); ?>;
        //console.log(JSON.stringify(content, null, 2));
    </script>
    <script>
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
        const response = await content;//fetch('http://localhost:8080/navigator_contents.json', header);
        // const result = await response.json();
        return await response;
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

    </script>
</body>

</html>
