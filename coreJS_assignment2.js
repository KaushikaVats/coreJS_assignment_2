///1.
let square = x=> x*x
console.log(square(4))
//2.
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
minValue = Math.min(...ages);
maxValue = Math.max(...ages);
console.log(minValue);
console.log(maxValue);
 let sum = 0;
 for(let i = 0;i<ages.length;i++){
    sum = sum+ages[i]

 }
 let avg = sum/ages.length
console.log(avg)
let range = maxValue-minValue
console.log(range)
a = Math.abs(minValue-average)
b = Math.abs(maxValue-average)
if(a>b){
    console.log("a")
}else{
    console.log("b")
}

//3.
const myMap = new Map();
myMap.set("name","John")
myMap.set("age", 21)
myMap.set("email","john@gmail.com")
myMap.set("location","Bangalore")
console.log(myMap)
myMap.forEach(x => console.log(x))
//4.
const person1 = {
   name : "John",
   age :21,
   introduce: function(){
    return  "Hello my name is " + this.name + "I am " + " " + this.age + " years old";
   }
}
const person2 = {
    name : "Maya",
    age :23
 }
 
 console.log(person1.introduce.call(person2))

///5.
const set2 = new Set([1, 1, 1, 2, 3, 4, 5, 6, 78, 9, 9, 0, 9]);

const set3 = new Set([...set2].map(n => n * n));  // Convert to array, map, create new Set

console.log(set3);
////6.
 function displayInfo(name,role){
  console.log(`Hi my name is ${name} and i am ${role}`)
 }
displayInfo.call(null,"MAYA","SDE")
displayInfo.apply(null,["MAYA","SDE"])


obj1 = {
  name:"MAYA"
}

function greet(){
  console.log(`GOOD MORNING ${this.name}`)
}
let greeting = greet.bind(obj1)
greeting()
/////7.
let calculator = {
  add: function(a,b){
      return a+b;
  },
  subtract: function(a,b){
    return a-b;
},
multiply: function (a,b){
  return a*b;
},
calculate: function(operation,c,d){
     return this[operation](c,d)
},

}

let resultAdd = calculator.calculate.call(calculator, 'add', 5, 3);
console.log('Addition Result:', resultAdd);

let multipliedResult = calculator.calculate.apply(calculator,['multiply',5,6])
console.log(multipliedResult);

discountObject = {
  discountPercentage:10,
  applyDiscount: function (price){
       return price - (price*(this.discountPercentage/100))
  }
}
