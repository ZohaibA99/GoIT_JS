//Make code refactoring of the task number 4 code using ternary operator.

let link = 'https://my-site.com/about';


// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }

link.includes('my-site') && !link.endsWith('/') ? link += '/' : null;


console.log(link);