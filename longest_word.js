let x,k;
x = prompt("Enter a string :");
function longest(x)
{   let arr = x.split(" ");
let len = arr[0].length;
    
     for(let i=1;i<arr.length;i++)
    {
        if(arr[i].length>len)
        {
            len = arr[i].length;
            k = arr[i]
            console.log(len);
        }
    }
     console.log("Tha length of word is :",len);
     return k ;
}

const result = longest(x);

console.log("Longest Word is : ",result);
