let Data = new Set(["hello","skill","Qode","learning"]);

Data.add("world");
// console.log(Data);
// console.log(Data.size);
// Data.delete("world");
// console.log(Data);
// console.log(Data.size)
// console.log(Data.entries());
// console.log(Data.has('qode'));
// console.log(Data.keys());
// console.log(Data.values());


let t = "";
Data.forEach(function(values){
    t += values + " ";
})
console.log(t);








