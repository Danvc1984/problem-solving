// Given a string check if it's a palindrome

function invert(str) {
  let inv_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inv_str += str[i];
  }
  return inv_str;
}

function isPalindrome(str) {
  invert_str = invert(str.toLowerCase());
  if (invert_str.split(" ").join("") === str.toLowerCase().split(" ").join(""))
    return "it's a palindrome!";
  return "it's not palindrome";
}
console.log(isPalindrome("Anita lava la tina"));
console.log(isPalindrome("A Man a Plan a Canal Panama"));
console.log(isPalindrome("this aint a palindrome"));
