function isTrick(array){
  return checkProp(array,"color")&& checkProp(array,"number")&&checkProp(array,"shade")&&checkProp(array,"shape");
}
function checkProp(array,prop){
  return check(array,prop,"same")|| check(array,prop,"different");
}
function check(array,prop,value){
  var mySet=new Set();
  for(let i=0;i<array.length;i++){
    mySet.add(array[i][prop]);
  }
  return value=="same"? mySet.size===1:mySet.size===3;
 }

console.log(isTrick([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]));
console.log(isTrick([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]));
console.log(isTrick([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]));
// Validate a Card 'Trick'
// In a particular card game, three cards form a 'trick' if each of the cards are identical or completely different for each of the four properties. All three cards must:

// Have the same color or different colors.
// Have the same number or different numbers.
// Have the same shades or different shades.
// Have the same shape or different shapes.
// The four properties are:

// Colors: red, purple, green
// Numbers: 1, 2, 3
// Shades: empty, lined, full
// Shapes: squiggle, oval, diamond
// Here, a group of three cards is represented by an array. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid 'trick'.

// Here is an example of a 'trick':

// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]

// // "Same" properties: color
// // "Different" properties: numbers, shading and shapes
// The following is not a 'trick':

// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "purple", number: 3, shade: "full", shape: "oval" }
// ]

// // Colors are not all identical, but not all different.
// More Examples
// isTrick([
//   { color: "green", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "green", number: 2, shade: "empty", shape: "diamond" },
//   { color: "green", number: 3, shade: "empty", shape: "oval" }
// ]) ➞ true

// isTrick([
//   { color: "purple", number: 1, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 1, shade: "full", shape: "oval" }
// ]) ➞ true

// isTrick([
//   { color: "purple", number: 3, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]) ➞ false