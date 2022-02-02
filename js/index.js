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
}
let jsonContent;
window.addEventListener('load', async () => {
    jsonContent  = await runTaksTest();

})