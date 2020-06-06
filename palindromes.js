function palindromes(string) {
    string=string.toLowerCase(); 
    string=string.replace(/[^a-zA-Z]/g,""); //remove anything that is not alphabetical
    var newString = ''; // create a new string - this will hold the reversed string

    for (let i = string.length-1; i>=0; i--) { //decrement - start at last element of string
        newString +=string[i]; // append the char @ index to the newString
    }

if (string===newString) { // check to see if they are equal
    return`PALINDROME`; // if yes then you will return palindrome
} else {
    return `NOPE`; // if not then - 'nope
}
}