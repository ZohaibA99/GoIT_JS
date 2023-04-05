/* 
Write a script that, for the user object, successively:

adds a mood field with value 'happy'
replaces the value hobby to 'skydiving'
replaces premium to false
prints the contents of the user object in key:value format using Object.keys() and for...of
*/

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user['premium'] = false;

const arr = Object.keys(user);
console.log(arr);

for (const key of arr){
  console.log(`${key} - ${user[key]}`);
}