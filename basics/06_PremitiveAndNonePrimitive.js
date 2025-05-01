// Premitive data types: call  by value

/*
 1: String
 2:number
 3: null
 4: undifined
 5: Symbol
 6: BigInt
 7:Boolean
*/

// Examples:

const score=100; //number

let isLoging=true; //boolean

let MyName="Abdullah" //string

let BigNumber=1229121821;//big Int

let IsNull= null;

let IsUndefined;//value not assigned

// 2: Example of Premitive data type

let isPremitive= 10;

function changeValue(x) {
  x = 20;
}

changeValue(isPremitive);//function gets so change in the x is does not effect a
console.log(isPremitive); //output is 10

//Non Premitive data types: call by refrence

/*
A reference (address) to the original data is passed.

Changes made affect the original data.

Example: Passing non-primitive data types (like object, array).

 */

let isArray={id:1,name:"Abdullah"};

function changeArray(o){
  o.name="Muhammad Abudllah"
}

changeArray(isArray);
console.log(isArray.name);  // Output: Muhammad Abdullah
console.log(isArray);

//Example of Object

let isPerson={
  name: "Abdullah khan",
  age:20
};

function RecieveObject(obj){
  obj.name="Abdullah malik";
  obj.age=21;
}

RecieveObject(isPerson); //modify the object
console.log(isPerson); //resulut is Abdullah malik age: 21

let isStudent = {
  name: "Abdullah",
  status: "Yes Student",
  city: "",
  education: "Bs cs"
}

function checkStudent(obj){
  obj.name ="Salman khan"
  obj.city="Swat"
}

checkStudent(isStudent);
console.log(isStudent);