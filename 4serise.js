// serise -> 1,4,12,32,80....

let i,n,a=1,x;
n=Number(prompt("Enter a number :"));
for(i=1;i<=n;i++)
{
    x += i*a+" ";
    a = a*2;
}
console.log(x);