/* 
Write a Notes class that manages the collection of notes in the 
items property. A note is an object with text and priority properties. 
Add a static property Priority to the class, which will store the object 
with priorities.

{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}

Add methods addNote(note), removeNote(text) and updatePriority(text, newPriority).
*/

class Notes{
  static Priority = {
    LOW: "low",
    NORMAL: 'normal',
    HIGH: 'high'
  };

  constructor(arr){
    this.arr = arr;
  }

  addNote(note){
    this.arr.push(note);
  }

  removeNote(text) {
    const inArr = this.arr.find(item => item.text === text)
     if(inArr){
         const idx = this.arr.findIndex(({
             text: itemText
         }) => text === itemText)
         this.arr.splice(idx,1)
     }else{
         console.log('Do not exist');
     }
 }

  updateNote(text, newPriority){
    const inArr = this.arr.find(item => item.text === text);
    if (inArr){
      inArr.priority = newPriority;
    }
    else{
      console.log('doesnt exist');
    }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
console.log(myNotes);

myNotes.addNote({
  text: 'My second note',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes);

myNotes.removeNote('My first note');
console.log(myNotes);

myNotes.updateNote('My second note', Notes.Priority.HIGH);
console.log(myNotes);