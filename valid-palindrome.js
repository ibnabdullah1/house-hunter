// Solve the problem in javascript: - 10

// Valid Palindrome

// Write a JavaScript function called isPalindrome that takes a string as input and returns true if the string is a palindrome otherwise return false. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring punctuation, case, and spacing.

// Sample:

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true
console.log(isPalindrome("No lemon, no melon")); // Output: true
