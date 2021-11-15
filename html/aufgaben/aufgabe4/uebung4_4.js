// source = zu letzt aufgerufen am 1.11.2021, 21:50, https://adelachao.medium.com/graph-topological-sort-kahns-algorithm-93380b00e7d7
class Graph {
    constructor() {
        this.adjazenzListe = {};
    }
    addKnoten(knoten) {
        if (!this.adjazenzListe[knoten]) {
            this.adjazenzListe[knoten] = [];
        }
    }
    addKante(knoten1, knoten2) {
        this.adjazenzListe[knoten1].push(knoten2);
    }
}
function createGraph(graph,list) {
    const s = new Set()
    for (const idx of list) {
        s.add(idx[0]);
        s.add(idx[1])
    }
    for (const idx of s){
        graph.addKnoten(idx);
    }
    for (const idx of list){
        graph.addKante(idx[0],idx[1]);
    }
}
function topSortHelper(k, n, besuchteKnoten, topNums) {
    besuchteKnoten[k] = true;
    const nachbarn = graph.adjazenzListe[k];
    for (const nachbar of nachbarn) {
        if (!besuchteKnoten[nachbar]) {
            n = topSortHelper(nachbar, n, besuchteKnoten, topNums);
        }
    }
    topNums[k] = n;
    return n - 1;
}

function topSort(graph) {
    const knoten = Object.keys(graph.adjazenzListe);
    const besuchteKnoten = {};
    const topNums = {};
    var n = knoten.length - 1;
    for (const k of knoten) {
        if (!besuchteKnoten[k]) {
            n = topSortHelper(k, n, besuchteKnoten, topNums)
        }
    }
    return topNums;
}

const graph = new Graph();
const taskList = [ ["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"] ];
createGraph(graph,taskList);
console.log(topSort(graph));

const keys = Object.keys(topSort(graph));
supposed = [ 'prüfen', 'studieren', 'schlafen', 'essen' ];
for(const key of Object.entries(topSort(graph))){
    console.assert(topSort(graph)[key] == supposed[key])
}
Object.entries(topSort(graph)).forEach(item => console.assert(item == ""))