let basic,gross,hra,da;
basic = Number(prompt("Enter Your Basic Salary :"));
console.log("Your basic salary is :",basic);
if(basic < 5000)
{
    hra = basic * 0.08;
    da = basic *0.2;
}
else if(basic>=5000 && basic<= 10000)
{
    hra = basic * 0.12;
    da = basic *0.3;
}
else if(basic>10000 && basic<= 15000)
{
    hra = basic * 0.15;
    da = basic *0.4;
}
else if(basic > 15000)
{
    hra = basic * 0.2;
    da = basic *0.5;
}
gross = basic + hra + da;
console.log("Your HRA is :",hra);
console.log("Your DA is :",da);
console.log("Your Gross salary is :",gross);



