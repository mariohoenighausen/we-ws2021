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

var relFormInCnt = 0;
const relationsList = [];
const graph = new Graph();
function addRelation() {
    const form = document.getElementById("relationsForm");
    var self = this;
    const submit = document.getElementById("relationsForm-submit");
    for (idx = 0; idx < 2; idx++) {
        const newID = 'relationsForm-input-' + relFormInCnt++;
        const input = document.createElement("input");
        input.id = newID;
        input.type = "text";
        //input.style.gridArea = newID;
        form.appendChild(input);
    }
    
}
function getInputsByID() {
    var temp = [];
    var jdx = 0;
    for (idx = 0; idx < relFormInCnt; idx++) {
        temp.push(document.getElementById(`relationsForm-input-${idx}`).value);
        if (idx % 2 != 0) {
            relationsList.push(temp);
            temp = [];
        }
    }
    getTopSort();
}



function createGraph(graph, list) {
    const s = new Set()
    for (const idx of list) {
        s.add(idx[0]);
        s.add(idx[1])
    }
    for (const idx of s) {
        graph.addKnoten(idx);
    }
    for (const idx of list) {
        graph.addKante(idx[0], idx[1]);
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

function getTopSort() {
    createGraph(graph, relationsList);
    const res = topSort(graph);
    console.log(res);
    const span = document.createElement("span");
    const keys = Object.keys(res)
    keys.reverse().forEach((s) => span.append(s + " "))
    document.getElementsByTagName("main")[0].appendChild(span)
    relationsList.forEach(()=>relationsList.pop())
}
