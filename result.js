let gujrati,english,stat,eco,mark,total,per,grad;
gujrati = Number(prompt("Enter your gujrati mark :"));
console.log(gujrati);
english = Number(prompt("Enter your english mark :"));
console.log(english);
stat = Number(prompt("Enter your stat mark :"));
console.log(stat);
eco = Number(prompt("Enter your eco mark :"));
console.log(eco);
total = gujrati+english+stat+eco;
console.log("your total is :",total);
per = total/4;
console.log("your percentahe is :",per);
if(per<35)
{
    console.log("your result is fail.");
}
else if(35<=per && per<=45){
    console.log("your result is grade : D");
}
else if(45<per && per<=60){
    console.log("your result is grade : C");
}
else if(60<per && per<=75){
    console.log("your result is grade : B");
}
else if(per>75){
    console.log("your result is grade : A");
}