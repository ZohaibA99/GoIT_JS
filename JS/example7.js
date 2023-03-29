// Write a script to sort an array of strings alphabetically by the 
// first letter of an element.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

for(let i = 0; i < langs.length; i++){
    let wasChanged = false;

    for(let j = 0; j < langs.length - i; j++){
        const left = langs[j];
        const right = langs[j + 1];

		if (left[0] < right[0]) {
			wasChanged = true;
			langs[j] = right;
			langs[j + 1] = left;
		}
    }

    if(!wasChanged) break;
}

console.log(langs.toString());