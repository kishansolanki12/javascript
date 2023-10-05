// serise -> 1,4,3,16,5.....n

let i,n,x;
n=Number(prompt("Enter N value :"));
for(i=1;i<=n;i++)
if(i%2==0)
{
   x += i*i+" ";
}
else{
    x += i+" ";
}
console.log(x);