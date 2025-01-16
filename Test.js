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
// let a=[1,2,3,4,5]
// let b=a.toString()
// console.log(b);
// console.log(typeof b);

// 2.Join =>for sparate array elements
// let fruits=["apple","banana","mango"]
// let f=fruits.join("$");
// console.log(f);

// 3.pop=>for remove last element of array
// let c=[41,54,86,21,63]
// c.pop()
// console.log(c);

// 4.push=>for add in last element of array
// let o=[41,54,86,21,63]
// o.push(55)
// console.log(o);

// 5. unshift=> for add element at first of array
// let n=["happy","sad","cool","fantastic"]
// n.unshift("superb");
// console.log(n);

// 6. shift=> for remove element at first of array
// let w=["happy","sad","cool","fantastic"]
// w.shift()
// console.log(w);

// 7. delete operator=> for delete element form array
// let h=[1,2,3,4,5]
// delete h[1]
// console.log(h);

// 8. concat=> for merge arrays in single array
// let a=[1,2,3,4,5]
// let b=[6,7,8,9,10]
// let c=[11,12,13,14,15]

// let d=a.concat(b,c)
// console.log(d);

// 9. for sort an array alphabetically 
// let h = [22, 85, 441, 2, 3]
// h.sort();
// console.log(h);
// //second way for sort orignally
// let compare = (a, b) => {
//     return a - b;
// }
// h.sort(compare)
// console.log(h);

// 10. reverse=> for print elements in reverse
// let a=[1,2,3,4,5]
// let b=a.reverse();
// console.log(b);

// 11. for delete elements and add new elements and change orignal size also
// let praveen=["hair","nose","teeth","hands","legs"]
// let manish=praveen.splice(1,3,"stomach","shoulder","eyes","knee")
// console.log(praveen);
// console.log(manish);

// 12. slice => for create sub array form orignal array 
// let n=[1,2,3,4,5]
// let m=n.slice(2)
// console.log(m);
// let o=n.slice(1,4)
// console.log(o);

// 13. for each loop 
// let b=[1,2,3,4,5]
// b.forEach((element)=>{
//     console.log(element*2);
// })

// 14. for in loop
// let h=[11,12,13,14,15]
// for(let i in h)
// {
//     console.log(i);
    
// }

// 15. for in loop
// let h=[11,12,13,14,15]
// for(let i of h)
// {
//     console.log(i);
    
// }

// 16. map in array
// let a=[1,2,3,4,5]
// let b=a.map((element,index,array)=>{
//     console.log(element+index);
//     // return element,index
// })
// console.log(b);

// 17.fliter in array
// let i=[21,55,3,65,10,89]
// let b=i.filter((element)=>{
//     return element<20
// })
// console.log(b);

// 18. reduce in array
// let c=[1,2,3,4,5]
// let j=c.reduce((element,index)=>{
//     console.log(element,index);
//     return element+index
// })
// console.log(j);

// Array perctice set
// Q1.
// let a=[12,25,62,80,85,21,99,50]
// let b=a.filter((h)=>{
//     return h%10==0
// })
// console.log(b);

// Q2.
// let p=[24,8,66,27,6]
// let r=p.map((Element)=>{
//     return Element*Element
// })
// console.log(r);

// Q3.
// let t=[1,2,3,4,5]
// let h=t.reduce((element1,element2)=>{
//     return element1*element2
// })
// console.log(h);

// Problem challenge
// let ranNum=(Math.round(Math.random()*100));
// let myNum=55;
// while(ranNum!=myNum)
// {
//     if(ranNum==myNum)
//     {
//         console.log("correct number");
//     }
//     else
//     {
//         console.log("incorrect number");
//         break;
//     }
// }
// console.log(`The random number is ${ranNum}`);


// Prectice of console function============================================

// Question 1
// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// if (age >= 18) {
//   alert("you can drive")
// }
// else {
//   alert("you can not drive")
// }

// Question 2
// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// if (age >= 18) {
//   alert("you can drive")
//   confirm("do you wanna see prompt again")
// }
// else {
//   alert("you can not drive")
//   confirm("do you wanna see prompt again")
// }

// Question 3
// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// if (age >= 18) {
//   alert("you can drive")
//   confirm("do you wanna see prompt again")
// }
//   else if(age<0)
//   {
//     console.error("dont enter negative age")
//     document.write("dont enter negative age")
//   }
// else {
//   alert("you can not drive")
//   confirm("do you wanna see prompt again")
// }

// Question 4
// let a=prompt("enter any number")
// a=Number.parseInt(a)
// if(a>4)
// {
//   location.href="https://google.com";
// }
// else 
// {
//   document.write("you enter number less than 4")
// }

// Question 5
// let color = prompt("enter any color name")
// document.body.style.background = color
// if (color == "black") {
//   document.body.style.color = "white"
// }

//childe Nodes
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// Table Navigation=======================================================================
// let t = (document.body.firstElementChild.firstElementChild)
// console.log(t)
// console.log(t.rows)
// console.log(t.tHead.firstElementChild)
// console.log(t.tFooter)
// console.log(t.tBodies)
// console.log(t.rows[2].rowIndex)





