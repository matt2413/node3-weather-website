// let personObj = {
//   firstName: "matt",
//   lastName: "lui"
// };

// let personString = JSON.stringify(personObj);
// console.log("typeof: ", typeof personString);
// console.log(personString);

// //convert JSON string back into and object

// let newObj = JSON.parse(personString);
// console.log("typeof newObj: ", typeof newObj);
// console.log(newObj.firstName, newObj.lastName);

const fs = require('fs');

//declare an object
let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

//convert the obj to a JSON string
let originalNoteString = JSON.stringify(originalNote);

//write the JSON string to a file
fs.writeFileSync('..\\notes.json', originalNoteString);
console.log('Saved to notes.json....');

//read contents from file
let noteString = fs.readFileSync('..\\notes.json');
let note = JSON.parse(noteString);

//print object contents to console
console.log('title: ', note.title);
console.log('body: ', note.body);
