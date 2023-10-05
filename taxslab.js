let inc,tax;
inc = Number(prompt("Enter your income :"));
console.log("Your income is :",inc);
 if(inc<=2500)
{
    tax = 0;
    console.log("tax is :",tax);
}
else if(inc>2500 && inc<=5000){
    tax = (inc - 2500)*0.1;
    console.log("tax is :",tax);
}
else if(inc>5000 && inc<=10000){
    tax = (250 +((inc - 5000)*0.2));
    console.log("tax is :",tax);
}
else if(inc>10000){
    tax = 250 + 1000 +(inc - 10000)*0.3;
    console.log("tax is :",tax);
}