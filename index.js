// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){

    return cats.push(name);
}

function destructivelyPrependCat(name){

    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){

    return cats.pop();
}

function destructivelyRemoveFirstCat(){

    return cats.shift();
}

function appendCat(name){
    let updatedCats = [];
    return updatedCats = [...cats, name];
}

function prependCat(name){
    let updatedCats = [];
    return updatedCats = [name, ...cats];
}

function removeLastCat(){
    const updatedCats = [...cats.slice(0, cats.length - 1)];
    return updatedCats;
}