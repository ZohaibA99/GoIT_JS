// Make the code refactor of the task number 5 code using switch.

const daysUntilDeadline = 1;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('The day after tomorrow');
// } else {
//   console.log('Date in the future');
// }

switch(daysUntilDeadline){
  case 0:{
    console.log('Today');
    break;
  }
  case 1:{
    console.log("Tomorrow");
    break;
  }
  case 2:{
    console.log("The day after tomorrow");
    break;
  }
  default:{
    console.log('Date in the future'); 
  }
}