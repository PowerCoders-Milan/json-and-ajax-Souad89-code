/*Take the object, add one key-value pair to it and transform it in a JSON.

Now take the JSON, transform it back into an object with a new name, call and console log each one of the values.*/

let object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
  };

object.subTitle = "my note";
console.log(object);
let myJSON = JSON.stringify(object);
console.log(myJSON);

const myObject = JSON.parse(myJSON);
console.log(myObject);