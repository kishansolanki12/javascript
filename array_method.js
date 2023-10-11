// let numbers = [1,2,3,"test", 'hello', true, false];
// console.log(numbers);
// console.log(typeof(numbers));

// let a = new Array(1,21,3,4);
// console.log(a);

// let b = [];
// b[0] = "hello";
// b[1] = false;
// console.log(b[1]);

// numbers[50] = 'Qode';
// numbers[99] = 'skill';

// length property
// console.log(numbers);
// console.log(numbers);
// console.log(numbers.length);

// Array Methods -> push, pop, shift, unshift

// let numbers = [4,9,16,12,8,25,10];
// numbers.push(50,60,70);
// numbers.push(100);

// numbers.pop();
// numbers.pop();

// numbers.unshift(100);
// numbers.unshift(200);

// numbers.shift();
// numbers.shift();

// console.log(numbers);
// console.log('Array length is: ',numbers.length);

// let test = ["hello", "world", "Skill", "qode"];

// console.log(numbers.concat(test));  // merge array

// console.log(test.sort())        // string
// console.log(numbers.sort((a,b)=> a-b))        // number
// console.log(numbers.sort((a,b)=> a-b).reverse())        

// console.log(test.reverse());


// max, min

// function maxNumber(array){
//     return Math.max.apply(null, array);
// }
// function minNumber(array){
//     return Math.min.apply(null, array);
// }

// console.log(maxNumber(numbers));
// console.log(minNumber(numbers));



let numbers = [4,9,16,12,8,25,10];

// result = numbers.slice(2, 5)
// result = numbers.slice(2, 5)
// console.log(result);

//numbers.splice(1,2)
// console.log(numbers);

let txt = ""
// result = numbers.entries()

// for(let i of result){
//     txt = txt + "[" + i+ "]";
// }

// console.log(txt);
// console.log(numbers.entries())


// numbers.forEach((ele)=>{
//     txt += 2*ele + " ";
// })


// result = numbers.map((ele)=> {
//     return ele*3;
// })


// result = numbers.filter((ele)=> {
//     return ele<10;
// })

// result = numbers.some((ele)=> {
//     return ele<3;
// })

// result = numbers.every((ele)=> {
//     return ele>3;
// })

// result = numbers.find((ele)=> {
//     return ele>20;
// })

// result = numbers.findIndex((ele)=> {
//     return ele>20;
// })
// result = numbers.includes(4)
// result = numbers.reduceRight((total, ele)=> {
//     return total + ele;
// },0)
// console.log(result);
result = numbers.join()
console.log(result);
// result = numbers.copyWithin(2,3)
// console.log(result);



// forEach, map, include, push , pop, sort, reverse, join, 