let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

for (let i = 0; i < strings.length; i++) {
    if(strings[i].includes(',') || strings[i].includes(';')){
        console.log(true)
    }
}


//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

for (let i = 0; i < strings.length; i++) {
    if(strings[i].includes(',')){
        let temp = strings[i].split(",");
        console.log(temp.reverse().join(","));
        
    }
}

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
for (let i = 0; i < strings.length; i++) {
    if(strings[i].includes(';')){
        let temp = strings[i].split(";");
        console.log(temp.sort().join(","));
        
    }
}

console.log("=============");
//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
for (let i = 0; i < strings.length; i++) {
    if(strings[i].includes(' ') && !(strings[i].includes(","))){
        let temp = strings[i].split(" ");
        console.log(temp.sort().reverse().join(" "));
        
    }
}

console.log("=========")
//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

for (let i = 0; i < strings.length; i++) {
    if(strings[i].includes(',')){
        let temp = strings[i].split(",").map(item => item.trim());
        console.log(temp.reverse().join(","));
        
    }
}