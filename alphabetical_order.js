function latter(x) {

    return x.split('').sort().join('');
}

const x = prompt("Enter a string:");
const sorted = latter(x);

console.log('result', sorted);
