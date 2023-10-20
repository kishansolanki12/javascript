function toUpperCase(x) {
    return x.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const userinput = prompt('Enter a string:');
const result = toUpperCase(userinput);

console.log("toUpperCase string: ", result);
