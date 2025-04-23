//numbers to string

let score=33;

let scoreInString= String(score);

// console.log(scoreInString); //output: 33
// console.log(typeof (scoreInString)) //Type is String

//String to number

let number="33";

let numberInNumber=Number(number);//convert String into number
// console.log(numberInNumber); //output is 33
// console.log(number);//output is 33
// console.log(typeof (number)) //type is String
// console.log(typeof (numberInNumber)); //type is number

let maxNumber="33abdi";

let converMaxNumber=Number(maxNumber)
// console.log(converMaxNumber);//out put Nan :not a number

//boolean to number

let isLogedIng=true;

let isLogedIngNumber=Number(isLogedIng);//convert boolean into number
// console.log(isLogedIng);//output true
// console.log(typeof(isLogedIng)); //boolean
// console.log(isLogedIngNumber);//output 1
// console.log(typeof(isLogedIngNumber)); //type 1

//number to boolean

let booleanNumber=1;

let isfollow=Boolean(booleanNumber);

// console.log(booleanNumber);//output 1
// console.log(typeof(booleanNumber));//type number

// console.log(isfollow); //output true
// console.log(typeof(isfollow))//type boolean

//important

let check="";

let covertCheck=Boolean(check);

// console.log(check);//output empty
// console.log(typeof(check)); //type string

// console.log(covertCheck);//output false
// console.log(typeof(covertCheck));//boolean

console.table([scoreInString,typeof(scoreInString), numberInNumber,number,typeof (number),typeof(numberInNumber),isLogedIng,typeof(isLogedIng),isLogedIngNumber,typeof(isLogedIngNumber)])
console.log(booleanNumber,typeof(booleanNumber),isfollow,typeof(isfollow),check,typeof(check),covertCheck,typeof(covertCheck))