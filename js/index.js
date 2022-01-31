async function runTaksTest() {
    const headers = { "Content-Type": "application/json"};
    try{
        let qAndAsResponse = await fetch('https://www2.inf.h-brs.de/~mhoeni2s/tasks.json', headers);
        let qAndAsJSON = await qAndAsResponse.json();
        return qAndAsJSON
    }
    catch(error){
        console.log(error);
    }
    
    // console.log(qAndAsJSON['html']['tasks'][0]['aAndAs'][0]);
    //let htmlTasks = qAndAsJSON['html']['tasks'][0]['aAndAs'];
    //console.log(Object.entries(qAndAsJSON)[0]);
    
    
    /* Object.entries(qAndAsJSON).forEach((item, idx) => {
        //item[1].tasks.forEach(task => {console.log(task.title)})
        //console.log(item[1].tasks[0].title,idx);
        // create selectgroup per task 
        const select = document.createElement('select');
        const optGroup = document.createElement('optgroup'); 
        item[1].tasks.forEach(task => { 
            optGroup.label = item[0];
            const option = document.createElement('option');
            option.innerText = task.title;
            optGroup.appendChild(option);
        });
        select.appendChild(optGroup);
        document.getElementsByTagName('main')[0].prepend(select);  
    }); */
    
    /* Object.entries(htmlTasks).forEach(item => {
        //console.log(item[1]);
        let qAndA = document.createElement('q-and-a');
        qAndA.setAttribute('q', item[1].q);
        qAndA.setAttribute('a', item[1].submitted.a);
        document.getElementsByTagName('main')[0].appendChild(qAndA);
    }); */
}
let jsonContent;
window.addEventListener('load', async () => {
    jsonContent  = await runTaksTest();

})