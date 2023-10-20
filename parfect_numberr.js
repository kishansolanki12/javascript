function perfect()
{
    let a = 1, k = 0, num;
    num = Number(prompt("Enter a value :"));
    
    for(a=1;a<num;a++)
    {
        if(num%a == 0)
        {
            k = k+a;
        }
    }
    if(k == num)
    {
        console.log(num," is perfect number :")
    }
    else 
    {
        console.log(num," is not perfect number :")   
    }
}
