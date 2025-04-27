//Day 04 

/*
Comparison of data types
*/

console.log("2" <= 2)//js convert the string value to number and do the operation their for the result is : true

console.log ("2" === 2)//the three equals === is strick and first they check the data types: their for the result is false : ond data is string and one is number

console.log(2 > 2) // false

console.log(null >= 0);//result is true: in js the null is equal to 0 that's the result is true

console.log(null <= 0)//result is true: in js the null is equal to 0 that's the result is true
console.log(null == 0)//result is false : In comparisons like <=, >=, <, >, JavaScript automatically converts null to a number.but not in equal condition

console.log(undefined <= null)//result false : js covert both to a number : undefined= NaN(not a Number ) and null = 0