const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
  cats.unshift(name);
}
function destructivelyRemoveLastCat( ){
  cats.pop();
}
function destructivelyRemoveFirstCat( ){
  cats.shift( );
}
function appendCat(name){
   const arr =[...cats, name];
   return arr;
}
function prependCat(name){
  const arr =[name, ...cats];
   return arr;
}
function removeLastCat( ){
  const arr = cats.slice(0,2);  
  return arr; 
}
function removeFirstCat( ){
  const arr = cats.slice(1);
  return arr;
}
