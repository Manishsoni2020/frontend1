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


