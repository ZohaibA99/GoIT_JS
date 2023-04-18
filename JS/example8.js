//Make the code refactoring using forEach method and arrow functions.

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
//   }

const printContactsInfo = ({names, phones}) => {
  const nameList = names.split(",");
  const phonesList = phones.split(',');
  nameList.forEach((el, idx) => {console.log(`${el} - ${phonesList[idx]}`)});
}

  
  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });