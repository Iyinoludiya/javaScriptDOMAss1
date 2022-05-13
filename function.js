//1. A for loop that returns an array of even numbers from 1 to 100
let evenNumArray = []

for (let i = 1; i < 100; i ++) {
    if (i%2 == 0) 
       console.log(i)
    }

//2. A function that returns even numbers between two numbers A and B

let a = 5
let b = 50

function evenNum(a, b) {
    for (let j = a; j < b; j++) {
        if (j%2===0){
            console.log(j)
        }
    }
}
evenNum(a,b)

//3. When would you use a conditional statement? (d) when you want to loop through a group of statements.

//4. Result in the console for running for(let i=1; i&lt;5; i++) = 1, 2, 3, 4.
for (let i=1; i < 5; i++) {
    console.log(i)
}

//5. A function firstFunction( ) that returns the sum of two integers.
let numOne =  5
let numTwo = 10
let sum = numOne + numTwo

function firstFunction() {
    console.log(sum)
}

firstFunction()

//6. A function printSum( ) that prints the sum of two numbers
let num1 = 12
let num2 = 13
let numSum = num1 + num2

function printSum() {
    console.log(numSum)
}

printSum()

//7. A function that returns the names of 10 of my course mates in an array
let mate1 = "Abidemi Aderinto"
let mate2 = "Omolola Akande"
let mate3 = "Udo Ijibike"
let mate4 = "Damilola Idris"
let mate5 = "Sam Yinks"
let mate6 = "Adaobi Ezelioha"
let mate7 = "Olayinka Bakare"
let mate8 = "Victoria Abodunrin"
let mate9 = "Victor Olorunsola"
let mate10 = "Unyime Usen"
let courseMatesNames = [mate1, mate2, mate3, mate4, mate5, mate6, mate7, mate8, mate9, mate10];

function courseMates() {
    console.log(courseMatesNames)
}
courseMates()

//8a. Add an element to the end of this array [1,2,4]
let newArray = [1,2,4]
newArray.push(6)
console.log(newArray)

//8b. Remove the last element in this array [1,2,3,8]
let array1 = [1,2,3,8]
array1.pop()
console.log(array1)

//8c. Remove the first element in this array [23.77,80,45]
let array2 = [23,77,80,45]
array2.shift()
console.log(array2)

//8d. Add an element to the beginning of the array [[20,30,80],[10,50,55]]
let array3 = [[20,30,80],[10,50,55]]
array3.unshift(5)
console.log(array3)