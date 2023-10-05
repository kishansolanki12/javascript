// serise ->  1,2,4,8,16.....n

let i,n,x;
n=Number(prompt("Enter n value :"));
for(i=1;i<=n;i*=2)
{
    x += i+" ";
}
console.log(x);