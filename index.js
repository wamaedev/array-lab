// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
  return cats;
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(name){
  cats.pop(name);
  return cats;
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
  cats.shift();
  return cats;
}
destructivelyRemoveFirstCat();

function appendCat(name){
  let appendedCats = [...cats, name];
  return appendedCats;
}
appendCat("George");

function prependCat(name){
  let appendedCats = [name,...cats]
  return appendedCats
}
prependCat("Scott");

function removeLastCat(){
  let newCats = cats.slice(0, -1);
  return newCats;
}
removeLastCat()

function removeFirstCat(){
  let newCats = cats.slice(1);
  return newCats;
}
removeFirstCat();