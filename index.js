// //print with variable

// var _myName="manish";
// console.log(_myName);

// var _1my__Name="manish";
// console.log(_1my__Name);

// // var 1myName="manish";
// // console.log(1myName);

// var $myName="manish";
// console.log($myName);


// // Datatypes in javascript

// var myName="suresh";
// console.log(myName);
// //type of operatior
// console.log(typeof(myName));

// var myage="22";
// console.log(myage);
// //type of operatior
// console.log(typeof(myage));

// var iammanish=true;
// console.log(iammanish);
// //type of operatior
// console.log(typeof(iammanish));

// --------------------------------
// // Q 1.what will be output of 3**3
// console.log(3**3);

// // Q 2.what will be the output,when we add a number and a string?
// console.log(5+" manish");

// Q 3.write a program to swap to numbers?
// var a=5;
// var b=10;
// //swap logic
// var c=b;
// b=a;
// a=c;
// console.log("the value of a is "+a);
// console.log("the value of b is "+b);


// Q 4. write a program to swap to numbers without using third variable?
// var a=5;
// var b=10;
// //swap login without using third variable
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("the value of a is "+a);
// console.log("the value of b is "+b);

// ---------------------------------------------

// CONTROL STATEMENT
// 1.If...else

// var year=2020;
// if(year % 4 ==0)
// {
//     if(year % 100==0)
//     {
//         if(year%400==0)
//         {
//             console.log("The year "+year+" is leap year");
//         }
//         else 
//         {
//             console.log("The year "+year+" is not leap year");
//         }
//     }
//     else 
//     {
//         console.log("The year "+year+" is leap year");
        
//     }
// }
// else 
// {
//     console.log("The year "+year+" is not leap year");
    
// }

// 2.Tarnory operator
// var age=155;
// console.log((age>=18 && age<100)?"you can vote":"you can't vote");

// 3. Switch statement
// var area="rect";
// var pi=3.14,l=5,b=10,r=9;
// switch(area)
// {
//     case "circle":
//         console.log("the are of circle is "+pi*r*r);
//         break;

//     case "tringle":
//     console.log("the area of tringle is "+(l*b)/2);
//     break;

//     case "rectangle":
//     console.log("the area of reactangle is "+(l*b));
//     break;

//     default:
//         console.log("enter vaild output");
// }

// 4. while loop
// var a=0;
// while(a<=10)
// {
//     console.log(a);
//     a++;
// }

// var num=100;
// while(num >=0)
// {
//     console.log(num);
//     num--;
// }

// 5. do while loop
// var a=20;
// do{
//     console.log(a);
//     a++;
// }
// while(a<=10)

// var num=1;
// do
// {
//     console.log(num);
//     num++;
    
// }
// while (num<=10)

// 6. for loop
// for(var num=10;num<=50;num++)
// {
//     console.log(num);
// }


// for(var n=1;n<=20;n++)
// {
//     var t=8;
//     console.log(t+" X "+n+" = "+(t*n));
// }
// 7. for in loop
// using simple loop
// var myfrnd=["rakesh","manish","vishal","rohit"]
// for(let i=0;i<myfrnd.length;i++)
// {
//     console.log(myfrnd[i]);
// }

// using for in loop
// var myfrnd=["rakesh","manish","vishal","rohit"]
// for(let Elements in myfrnd)
// {
//     console.log(Elements);
// }

// 8.for of loop
// var myfrnd=["rakesh","manish","vishal","rohit"]
// for(let Elements of myfrnd)
// {
//     console.log(Elements);
    
// }

// 9.for each loop
// var myfrnd=["rakesh","manish","vishal","rohit"]
// myfrnd.forEach(function(element,index,array){
//     console.log(element+" "+index+" "+array);
// });

// --- Array--
// 1.indexof()
// var myfriendName=["suresh","rakesh","vishal","kirti","saloni"]
// var a=myfriendName.indexOf("vishal",1);
// console.log(a);

// 2.lastindexof()
// var myfriendName=["suresh","rakesh","vishal","kirti","saloni"]

// console.log(myfriendName.lastIndexOf("kirti",4));

//3. includs
// var myfriendName=["suresh","rakesh","vishal","kirti","saloni"]
// console.log(myfriendName.includes("kirti"));

// 4.find
// Array.find
// const price=[200,300,350,400,450,500,600];
// const rs=price.find(hy);
// function hy(item) {
//     return item <= 400;
// }
// console.log(rs);

// 5.findindex
// const price=[200,300,350,400,450,500,600];
// const rs=price.findIndex(hy)
// function hy(item) {
//     return item >= 400;
// }
// console.log(rs);

// 6. filter

// const price=[200,300,350,400,450,500,600];
// const newpricetag = price.filter(function(Elements)
// {
//     return Elements >400;
// })
// console.log(newpricetag);

// const price=[200,300,350,400,450,500,600];
// const newpricetag = price.filter(function(Elements)
// {
//     return Elements >1400;
// })
// console.log(newpricetag);

// 7.sort
// var months=["january","march","fabruary","april"];
// console.log(months.sort());

// const price=[1000,300,350,400,450,500,600];
// console.log(price.sort());

// ---------------------------------------
// --Array crud operations--
// 1.push()
// const animals=["pig","dog","parrot"];
// console.log(animals);
// // const count=animals.push("cow");
// console.log(animals);
// // console.log(count);
// animals.push("cow","cat","rat")
// console.log(animals);


// 2.unshift

// const animals=["pig","dog","parrot"];
// // animals.unshift("crow");
// // console.log(animals);
// animals.unshift("cow","cat","rat")
// console.log(animals);

// 2nd example
// const a=[1,2,3,4,5];
// a.unshift(5,6);
// console.log(a);

// 3.pop()
// const family=["father","mother","brother","sister"]
// console.log(family);
// family.pop();
// console.log(family);

// 4.shift
// const family=["father","mother","brother","sister"]
// console.log(family);
// family.shift();
// console.log(family);

// prectice question
// const months=["jan","march","april","june","july"];

// Q.1 add dec at the end of an array?
// const months=["jan","march","april","june","july"];
// // months.push("dec");
// // console.log(months);

// // second way
// const b=months.splice(6,0,"dec");
// console.log(months);

// // Q.2 what is the return value of splice method?
// console.log(b);

// Q.3 update march to March?
// const indexofmonth=months.indexOf("march");
// if(indexofmonth >0)
// {
//     const updatemonth=months.splice(indexofmonth,1,"March");
//     console.log(months);
// }
// else 
// {
//     console.log("no data found");
// }

// Q 4. Delete june from an array?
// const months=["jan","march","april","june","july"];
// const index=months.indexOf("june");
// if(index != -1)
// {
//     const updatemonth=months.splice(index,1)
//     console.log(months);
//     console.log(updatemonth);
    
// }
// else
// {
//     console.log("enter right data");
// }

// const months=["jan","march","april","june","july"];
// const index=months.indexOf("june");
// if(index != -1)
// {
//     const updatemonth=months.splice(index,Infinity)
//     console.log(months);
//     console.log(updatemonth);
// }
// else
// {
//     console.log("enter right data");
// }
// --------------
//  --map method--
// first way
// const array1=[1,32,8,21,3];
// let newarray=array1.map((curvalue,index,array)=>{
//     return curvalue>9
// })
// console.log(array1);
// console.log(newarray);

// // second way--
// let againnewarray=array1.map((data,index,arrey)=>{
//     return `index no ${data} and element is ${index} the array is ${arrey}`
// })
// console.log(againnewarray);

// Q.1 find the square root of each element in array?
// let arr=[25,36,49,64,81]
// let newarr=arr.map((element)=>{
//     return Math.sqrt(element)
// })
// console.log(newarr);

// Q.2 Multiply each element by 2 and return only those element
    // which are greater than 10 ?

// let arr=[2,3,4,6,8];
// let againarr=arr.map((ele)=>{
//     return ele*2;
// }).filter((ele)=>{
//     return ele>10
// })
// console.log(againarr);

// -- Reduce method--
// add elements of array

// let arr=[5,6,3]
// let sum=arr.reduce((accumulator,curelement)=>{
//     return accumulator=accumulator+curelement;
// })
// console.log(sum);

// multiply elements of array and another number which in not 
// present in array
// let arr=[10,12,45,3]
// let multi=arr.reduce((accumulator,ele)=>{
// return accumulator *= ele;
// },8)
// console.log(multi);

// how to fatten an array 
// converting 2d and 3d array into one dimensional array

// const arr=[
//     ["zone_1","zone_2"],
//     ["zone_3","zone_4"],
//     ["zone_5","zone_6"],
//     ["zone_7","zone_8"],
//     ["zone_9","zone_10"]
// ]
// let flatarr=arr.reduce((acum,elem)=>{
//     return acum.concat(elem)
// })
// console.log(flatarr);

// ------------------------------String------------------------------
// 1.length
// let myName="manish soni";
// console.log(myName.length);

// // 2.Escape
// let msg="my name is \"manish soni\" and i am not feeling well"
// console.log(msg);

// // second way for print double couts
// let msg1="my name is 'manish soni' and i am not feeling well"
// console.log(msg1);

// 3.indexOf
// const biodata="I am maddy technicals"
// console.log(biodata.indexOf("maddy"));

// 4.lastindexof
// const biodata="I am maddy technicals"
// console.log(biodata.lastIndexOf("a",5));

// 5.search()
// const biodata="I am maddy technicals"
// let sdata=biodata.search("maddy")
// console.log(sdata);

// 6. slice
// var str="manish, rakesh, suresh, mahesh";
// let rs=str.slice(4);
// console.log(rs);

// var str="manish, rakesh, suresh, mahesh";
// let rs=str.slice(-4,-3);
// console.log(rs);

// Q.1 display only 280 char of a string like the 
// one 
// let se="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quas, nam illo distinctio commodi nisi sit fugiat. Tempore fugit alias quasi possimus sunt, dicta quos repellendus. Est id facilis animi numquam quidem unde similique minus a hic corporis, maiores, tempore eum quam adipisci rerum. Omnis ratione, labore laborum sed atque commodi asperiores dolorem sequi iste aperiam porro corrupti beatae dignissimos fugit quaerat alias, odit officia. Possimus, dolore porro. Necessitatibus saepe in earum blanditiis alias fugit, itaque sed, aperiam soluta nobis sunt consequatur expedita modi eius, voluptatum voluptatem sit molestias incidunt! Iste soluta, perferendis qui harum, distinctio mollitia aperiam eveniet, pariatur iure omnis maxime? Temporibus eos nulla corporis, voluptate odit quisquam similique aperiam unde fugit sapiente consectetur voluptas accusantium dignissimos dolores. Iure porro nulla aliquam dignissimos voluptatem, pariatur doloribus ratione aperiam numquam illum eaque praesentium qui, magnam ex. Quos ipsam voluptatibus vitae suscipit, sint consequatur ea eaque pariatur non perferendis molestias fugit, corporis magnam aperiam laboriosam ab repudiandae neque deserunt dicta. Possimus porro fugiat nesciunt illum consequatur deserunt officia voluptates quaerat dolores. Facere ipsam accusamus voluptates quod culpa similique sint nobis sit nemo, repellendus iure? Asperiores saepe hic eum eveniet ipsam minima recusandae iste aperiam perspiciatis veniam, adipisci dolor! Consequuntur, tempora minus sed ex fugit exercitationem nihil quos accusantium ratione nobis aspernatur mollitia perspiciatis eligendi, vero placeat ea alias. Optio voluptatibus deleniti neque iure odit at asperiores itaque totam odio illum exercitationem, aliquid enim quam veniam blanditiis aspernatur quasi dignissimos temporibus impedit modi expedita delectus ut? Id aut eum et at magni tempora ipsa. Beatae laborum assumenda repudiandae quis placeat iure eos. Tempore unde ratione, obcaecati, quaerat optio magnam deleniti magni fugiat repellendus placeat earum ut, odio excepturi natus iste sequi. Obcaecati recusandae asperiores molestias mollitia beatae ex culpa, accusamus autem quibusdam ratione quisquam aspernatur, harum vel ipsa, totam explicabo doloribus?"

// let newsen=se.slice(0,280);
// console.log(newsen);
// console.log(newsen.length);

// 7.substring()
// var str="apple, banana, kiwi"
// let res=str.substring(8,-2);
// console.log(res);

// 8.substr()
// var str="apple, banana, kiwi";
// let rs=str.substr(-4);
// console.log(rs);

// 9.replace
// var str="apple, banana, kiwi";
// let rs=str.replace("apple","Apple");
// console.log(rs);

// 10. Charat
// let str="hello world"
// console.log(str.charAt(6));

// 11. charcodeAt
// let str="Hello world";
// console.log(str.charCodeAt(0));

// // Q. return the unicode of the last char in a string
// let st="I am a developer"
// let laststr=st.length-1;
// console.log(st.charCodeAt(laststr));

// Other usefull method 
// let Mname="maddy technicals"
// console.log(Mname.toUpperCase(Mname));
// console.log(Mname.toLowerCase(Mname));

// // concate method
// let mname="manish"
// let lname="soni"
// console.log(mname.concat(lname));

// Trim method  
// let str="         Hey Java..!            "
// console.log(str.trim(str));

// Split method
// var text ="a,b,c, d,e"
// console.log(text.split(","));
// console.log(text.split(" "));
// console.log(text.split("|"));


// Date methods
// let currdate=new Date();
// console.log(currdate);
// console.log(new Date());
// console.log(currdate.toLocaleString());
// console.log(currdate.toString());
// Date.now method
// console.log(Date.now());

// Time methods
// const curTime=new Date();
// // how to get indivisual time 
// console.log(curTime.getTime());
// // console.log(curTime.getDate());
// // console.log(curTime.getMonth());
// console.log(curTime.getHours());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// how to set indivisual time
// console.log(curTime.setTime(5));
// console.log(curTime.setHours(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// ------------------------ Math object ------------------ 
// console.log(Math.PI);

// // round method
// let num=32.14;
// console.log(Math.round(num));

// // pow method
// console.log(Math.pow(2,3));

// // squeroot method
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(66));

// // abs method
// console.log(Math.abs(-55.21));
// console.log(Math.abs(-123));

// ceil method
// console.log(Math.ceil(4.4));
// console.log((Math.ceil(99.51)));

// floor method
// console.log(Math.floor(4.4));
// console.log((Math.floor(99.51)));

// min method
// console.log(Math.min(0,15,125,-3,7455));

// // max method
// console.log(Math.max(0,15,125,-3,7455));

// random method
// console.log(Math.round(Math.random()*10)) ;














