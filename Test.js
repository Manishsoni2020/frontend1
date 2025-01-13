// 1. Write a JavaScript function that calculates the sum of all numbers from 1 to n (inclusive), where n is provided as an argument to the function.
// // 15 (1 + 2 + 3 + 4 + 5)

// firstWay`>>>>>>>>>>>>>>>>>`
// const a = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(a(5));

// Second Way`>>>>>>>>>>>>>>>>>`
// function sumAll(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sumAll(5));


// 2. Write a JavaScript function that counts how many even numbers are there from 1 to n (inclusive), where n is provided as an argument to the function.
// // 5 (2, 4, 6, 8, 10)

// first Way`>>>>>>>>>>>>>>>>>`
// const a=(n)=>{
//     let count=0;
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         if(i%2==0)
//         {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(a(5));

// Second Way`>>>>>>>>>>>>>>>>>`
// function evenNumber(n)
// {
//     let count=0;
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         if(i%2==0)
//         {
//             count ++;
//         }
//     }
//     return count;

// }
// console.log(evenNumber(5));


// 3. Write a JavaScript function that accepts an array of numbers and returns a new array where each element is multiplied by 2 using a for loop.
// // [1, 2, 3]; // [2, 4, 6]
// Second Way`>>>>>>>>>>>>>>>>>`
// const a=(arr)=>{
//     let arr2 = [];
//         for (let i = 0; i < arr.length; i++) {
//             arr2.push(arr[i] * 2);
//         }
//         return arr2;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(a(arr));

// Second Way`>>>>>>>>>>>>>>>>>`
// function newArray(arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(arr[i] * 2);
//     }
//     return arr2;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(newArray(arr));





// 4. Write a JavaScript function that takes a string as an argument and returns the string reversed, using a for loop.
// ("hello"); // "olleh"

// First Way`>>>>>>>>>>>>>>>>>`
// const b=(a)=>{
//     let b="";
//    for(let i=a.length-1;i>=0;i--)
//    {
//     b+=a[i];
//    }
//    return b
// }
// let a="hello";
// console.log(b(a));

// Second Way`>>>>>>>>>>>>>>>>>`
// function revstring(a)
// {
//     let b="";
//    for(let i=a.length-1;i>=0;i--)
//    {
//     b+=a[i];
//    }
//    return b

// }
// let a="hello";
// console.log(revstring(a));


// 5. Write a JavaScript function that prints a simple number pattern. The function should accept a number n and print a pattern where each row contains numbers from 1 to the current row number. Use a for loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// First Way`>>>>>>>>>>>>>>>>>`
// const a=(n)=>{
//     for (let i = 1; i <= n; i++) {
//             let row="";
//             for (let j = 1; j <= i; j++) {
//                 row += j+" ";
//             }
//         console.log(row);
//         }
// }
// a(4)

// Second Way`>>>>>>>>>>>>>>>>>`
// function pattern(n){
// for (let i = 1; i <= n; i++) {
//     let row="";
//     for (let j = 1; j <= i; j++) {
//         row += j+" ";
//     }
// console.log(row);
// }
// }

// pattern(4)

// operators and conditionals question prectice
// 1.
/*let age = 12
if (age > 10 && age < 20) {
    console.log("valid");
}
else {
    console.log("not valid");
}*/

// 2.
// let age=12;
// switch (age) {
//     case 12:
//         console.log("your age is 12");
//         break;
//         case 13:
//             console.log("your age is 13");
            
//     default:
//         console.log("not vaild");
        
//         break;
// }

// 3.
// let num=30;
// if(num%2==0 && num%3==0)
// {
//     console.log("divisible");
// }
// else 
// {
//     console.log("not divisible");
    
// }

// 4.
// let num=12;
// if(num%2==0 || num%3==0)
// {
//     console.log("divisible");
// }
// else 
// {
//     console.log("not divisible");
    
// }

// // 5.
// let age=22
// let a=age>18?"you can dirive":"you can not dirve"
// console.log(a);

// Loops and function question prectice
// 1.
// let marks={
//     manish : 50,
//     ashish : 20,
//     shiv : 39
// }
// for(let i=0;i<Object.keys(marks).length;i++)
// {
//     console.log("the marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
    
// }

// 2. using for in loop
// for(let key in marks)
// {
//     console.log("the marks of "+key+" are "+marks[key]);
// }

// 3.
// let a=5;
// let i=5;
// while(i!=a)
// {
//     console.log("try again");
// }
// console.log("good");


// String prectice set
// 1.

// let a="harr\""
// console.log(a.length);

// 2.
// let a="I am a java developer"
// let b="java";
// let start="I";
// let end=`developer`;
// console.log(`there ${b} ${a.includes(b)?"is":"is not"} present`);
// console.log(`there ${start} ${a.startsWith(start)?"is":"is not"} present in starting`);
// console.log(`there ${end} ${a.endsWith(end)?"is":"is not"} present in ending`);

// // 3.
// let a=`MANiSH`;
// let b=a.toLowerCase();
// console.log(b);

// 4.
// let str2="please give rs 1000"
// let amount=Number.parseInt(str2.slice(15));
// console.log(amount);
// console.log(typeof amount);

// 5.
// let str="jaishreeRam"

// let ram=str.splice//not possible bcz string is immutebale 
// console.log(ram);

// Array in javaScript with method
// 1.tostring =>convert array in string
let a=[1,2,3,4,5]
let b=a.toString()
console.log(b);
console.log(typeof b);

// 2.Join =>for sparate array elements
let fruits=["apple","banana","mango"]
let f=fruits.join("$");
console.log(f);

// 3.pop=>for remove last element of array
let c=[41,54,86,21,63]
c.pop()
console.log(c);

// 4.push=>for add in last element of array
let o=[41,54,86,21,63]
o.push(55)
console.log(o);

// 5. unshift=> for add element at first of array
let n=["happy","sad","cool","fantastic"]
n.unshift("superb");
console.log(n);

// 6. shift=> for remove element at first of array
let w=["happy","sad","cool","fantastic"]
w.shift()
console.log(w);

// 7. delete=> for delete element form array
let h=[1,2,3,4,5]
delete h[1]
console.log(h);




