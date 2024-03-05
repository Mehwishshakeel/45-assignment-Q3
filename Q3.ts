//Question 3:
let personName: string = "Mehwish Shakeel";
//print name in lowercase
console.log(personName.toLowerCase());
//print name in uppercase
console.log(personName.toUpperCase());
//print name titlecase
console.log(personName.replace(/\b\w/g,c=>c.toUpperCase()))