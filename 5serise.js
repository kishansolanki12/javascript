// serise -> 1,1,2,3,5......n  fibonaki 

let i, n, a = 1, b = 1, c, x = "1 1"; 
n = Number(prompt("Enter a number:"));

for (i = 3; i <= n; i++) {
    c = a + b;
    x += " " + c;
    a = b;
    b = c;
}
console.log(x); 

