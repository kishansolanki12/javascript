let unit,charge;
unit = Number(prompt("Enter Your unit :"));
if(unit<=100)
{
    charge = 50 + (unit*0.6);
    console.log("Bill charge is :",charge);
}
else if(unit>100 && unit<=200)
{
    charge = 50 +60 + (unit*0.8);
    console.log("Bill charge is :",charge);
}
else if(unit>200 && unit <=300)
{
    charge =50+60+80+(unit*0.9);
    console.log("Bill charge is :",charge);
}
