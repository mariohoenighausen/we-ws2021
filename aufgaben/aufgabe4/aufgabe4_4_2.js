supposed = [ 'prüfen', 'studieren', 'schlafen', 'essen' ];
for(const key of Object.entries(topSort(graph))){
    console.assert(topSort(graph)[key] == supposed[key])
}