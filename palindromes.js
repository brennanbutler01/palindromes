function palindromes(string) {
    var newString = ''; // create a new string - this will hold the reversed string
  

    for (let i = string.length-1; i>=0; i--) { //decrement - start at last element of string
        newString +=string[i]; // append the char @ index to the newString
    }
newString=newString.replace(/[^a-zA-Z]/g,"");
string=string.replace(/[^a-zA-Z]/g,"");

if (string.toLowerCase()===newString.toLowerCase()) { // check to see if they are equal
    return`PALINDROME`; // if yes then you will return palindrome
} else {
    return `NOPE`; // if not then - 'nope
}
}