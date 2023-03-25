/* Write a script that checks if the value of the link variable ends by symbol /. 
If not, append this character to the end of the link value, 
but only if link contains the substring "my-site". Use construction if...else.
 */


let link = 'https://somesite.com/about';
// Write code below this line
if(!link.endsWith("/") && link.includes('my-site')){
    link += '/'
}
// Write code above this line
console.log(link);