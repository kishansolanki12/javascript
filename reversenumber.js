function reverseNumber(num) {
  if (!isNaN(num)) {
    const reversed = parseFloat(num.toString().split('').reverse().join(''));
    return reversed;
  } else {
    return "Invalid input. Please enter a valid number.";
  }
}

const userinput = prompt("Enter a number to reverse:");

const reversedNumber = reverseNumber(userinput);

console.log(`Reversed number: ${reversedNumber}`);
