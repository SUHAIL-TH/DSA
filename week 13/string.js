// let name="suhail"

// let reverse=name.split('').reverse().join("")

// // console.log(reverse)


// let name="ajmallannut"
// let lenth=name.length
// console.log("length of the string")
// console.log(lenth)

// console.log("concert to uppercase")


// //  console.log(name.toUpperCase())

//////////////////////////////////////////////////////////////veowel extract form a string

//     const vowels = ['A', 'E', 'I', 'O', 'U']
//     const splitedText ="SUHAIL THATTAPARAMBIL"
//      result=""
//     for(let i  = 0; i< splitedText.length; i++){
//         var name=false
//         for(let j = 0; j < vowels.length ; j++){
            
//             if(splitedText[i] == vowels[j]){
               

//                 name=true
                
//                 break
//             }
            
//         }
//         if(!name){
//             result+=splitedText[i]
//         }
//     }

//  console.log(result)

// function binarysearch(array,target){
//     let left=0
//     let right=this.array.length-1
//     while(left<=right){
//         let middleindex=Math.floor((left+right)/2)
//         if(array[middleindex]===target){
//             return middleindex 
//         }
//         if(target<array[middleindex]){
//             right=middleindex-1
//         }
//     }
// };

// console.log(binarysearch([1,2,3,4,5,6,7,8]))



// const str = 'SUHAILasiua';
// const sortedStr = str.split('').sort().join('');
// console.log(sortedStr); // Output: 'JSTaaScript

// +91 91763 31128+91 44 2829 2240  CASPERON
/////////////////////////////////////////////////////////write head

 
// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((request, response) => {
//   // Set custom response headers
//   response.setHeader('Content-Type', 'text/html');
// //   response.setHeader('Custom-Header', 'Hello from Node.js');

//   // Send the response body
//   response.end('Hello, Node.js!');
// });

// // Listen on a specific port (e.g., 3000)
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// const persons = [
//     { name: "suhail th",
//     lastname:"ajmal", age: 78 },
//     { name: "akhil kannan",lastname:"aravind" ,
//     age: 38 },
//   ];

//   let result=persons.map((value)=>{
//     return [value.name ,value.lastname]
//   })
//   console.log(result.flat());
//////////////////////////////////////////////////////////////////////////////////
//   let result=persons.flatMap((value)=>value.name.split(" "))
// console.log(result);
  
//   // Split names into separate arrays for first names and last names
//   const firstNames = persons.map((person) => {
//     const parts = person.name.split(" ");
//     // console.log(parts)
//     return parts
//   });
  


// // console.log(firstNames)
// let result=[].concat(...firstNames)
// console.log(result);

// const name=persons.map((value)=>{
//     let part=value.name.split(" ")
//     return part
// })

// let result=[].concat(...name)
// console.log(result);

// const persons=[{name:"suhial",id:1,},{id:2,name:"kannapppan"},{id:3,name:"aurjun"}]

// function personsid(persons,id){
//     let indexof=persons.findIndex((val)=>val.id===id)
    
//     persons.splice(indexof,1)
// }
// personsid(persons,1)
// console.log(persons)

/////////////////////////////////////////////////////js operation and code
// let b=suhaill(10,20)
// function suhaill(num1,num2){
//     console.log("my  name is jumana");
//     let a =num1+num2;
//     return a
// }

const { rejects } = require("assert");
const { error } = require("console");
const { resolve4 } = require("dns");
const { resolve } = require("path");


// console.log(b);
// // let a=10;
// // b=20;
// // if(a>b){
// //     console.log("true")
// // }else{
// //     console.log(false)
// // }

// let n = 56
// switch (n) {
//     case 1:
//         console.log("h")
//         break;
//     case 2:
//         console.log("2")
//         break
//     case 3:
//         console.log("3")
//         break;
//     default:
//         console.log("default")
//         break
// }

// var i=1;
// // while (i<5) {
// //     console.log(i)
// //     i++
    
// // }

// do {
//     console.log(i)
//     i++
// } while (i<5);

// function greeting(){
//     console.log("hii suhail")
// }
// greeting()

// let a
// let b

// function add(a,b){
//     return a+b;

// }
// console.log(add(10,20))

// let a=[10,20,30,40,50]

// a.push(10)
// a.unshift(8)
// a.shift()
// a.pop()
// a.splice(0,2,77)
// console.log(a.slice(1,3))
// console.log(a.length)
// console.log(a)

// console.log(a.sort())
// console.log(Math.max(a))



// let a=-67
// console.log(Math.abs(a))
// console.log(Math.pow(2,3))
// a=23.3
// getElementBy
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.random(10));

// let hello=(()=>{
//     console.log("hiii")
// })

// hello()
// let a;

// a=280
// b=89
// // const b=56;
// b=45
// console.log(b);

// console.log(a);

// let c=a>b?"true":"false"
// console.log(c)
// let name="suhail"

// console.log(name.length)

// let a="69"
// console.log(a);
// console.log(parseInt(a))
// console.log(a.toString())

// const originalArray = [1, 2, 3, 4, 5];  
// // console.log(originalArray.slice(1, 4)); // Output: [2, 3, 4]
// console.log(originalArray.splice(1,2,7))

// const originalArray = [1, 2, [3, 4]];

// let a=[...originalArray]
// let a=originalArray

// a[0]=78
// console.log(originalArray);
// console.log(a);
// console.log(originalArray);
// const shallowCopy = originalArray.slice();

// originalArray[0] = 100;


// console.log(originalArray); // Output: [10, 2, [30, 4]]
// console.log(shallowCopy); // Output: [1, 2, [30, 4]]


//////////////////////////////////////////////////////////////////slice and splice

//  const originalArray = [1, 2,4,5,6];
// originalArray.splice(1,2,5,55,5)
// // let d=originalArray.slice(1,3)
// console.log(b);

// console.log(originalArray);
// console.log(d);


//////////////////////////////////////////////////////for in

// const person={
//     name:"ajmal",
//     place:"kannur", 
//     age:78
// }

// for(let x in person){
//     console.log(person[x])
// }


/////////////////////////////////////////////////for each

// const person=[{name:"ajmal"},
// {name:"kannapapn"},
// {name:"araru"}]
///////////////////////////////////////////////////
// person.forEach((values,index,array)=>{    ///foreach return the same array
//     console.log(values.name)
//     console.log(index);
//     console.log(array)
// })
///////////////////////////////////////////////////map
////map return a new array

// let news=person.map((values)=>{
//     return  (values.name)
// })
// console.log(news);

//////////////////////////////////filter

// let news=person.filter((values)=>{
//     return (values.name==="ajmal")
// })
// console.log(news);

////////////////////////////////////////////reduce
// let a=[10,20,40,50,50]

// let sum=a.reduce((total,values)=>
// {
//     return (total+values)
// },0)
// console.log(sum);

//////////////////////sort methode
// let num=[2,5,15,5,7]
// console.log(num.sort())
// const newarray=num.sort((a,b)=>{return(a-b)})
// console.log(newarray);

/////////////////////////////////calllback fucntion

// function greet(name,callback)   {
//     const names="my name is suhail th i am from kannur"
//     callback(names)
// }

// function greetings(name){
//     console.log(name)
// }

// greet('ajmal',greetings)

//////////////////////////////////////////////////optional chaning
// const personw = {
//     name: 'John',
//     address: {
//       city: 'New York',
//       street: '123 Main St',
//       zipCode: '12345'
//     }
//   };
  
//   if(personw?.address?.zipCode){
//     console.log(personw.address.zipCode);
//   }

////////////////////////////////////immediate invoking function expression
// (function() {
//     console.log("This is an IIFE using function declaration");
//   })();

////////////////////////////////////////////////////Set timeout

// setTimeout(()=>{
//     console.log("hii")
// },3000)

// setInterval(()=>{
//     console.log("ajmal")
// },1000)
/////////////////////////////////////////////////////////////////////
// const promise=new Promise((resolve,reject)=>{
//     resolve("error")
// })

// promise.then((response)=>{
//     console.log(response+"my name is suhail");
// }).catch((e)=>{
//     console.log(e);
// })

/////////////////////////////////////////////////////promise allsettled
// const promise1=new Promise((resolve,reject)=>{
//     resolve("success")


// })
// const promise2=new Promise((resolve,reject)=>{
//     reject("its is rejected")
// })

// const promiseallsettled=Promise.allSettled([promise1,promise2])


// promiseallsettled.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

////////////////////////////////////////////////////promise

// const promise=new Promise((resolve,reject)=>{
//     let random=10
//     b=67
//     if(random>b){
//         resolve("true")
//     }else{
//         reject("false")
//     }
// })

// promise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })

//////////////////////////////////////////////////promise race
//  let promise=new Promise((resolve,reject)=>{
//     reject(["ajmal","suhail"])
//  })
//  let promise1=new Promise((resolve,reject)=>{
//     resolve(["aki","aja"])
//  })

//  let promiseall=Promise.race([promise,promise1])

//  promiseall
//  .then((res) => {
//    console.log(res);
  
//  })

//  .catch((error) => {
//    console.error(error);
//  });

//////////////////////////////////////////////////////promise any
// let promise1 = new Promise((resolve, reject) => {
//     reject(["ajal", "index"]);
//   });
  
//   let promise2 = new Promise((resolve, reject) => {
//     resolve(["aj", "hj"]);
//   });
  
//   let promiseAll = Promise.any([promise1, promise2]);
  
//   promiseAll
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
////////////////////////////////////////////////////////////promise all
// let promise1 = new Promise((resolve, reject) => {
//     resolve(["ajal", "index"]);
//   });
  
//   let promise2 = new Promise((resolve, reject) => {
//     reject(["aj", "hj"]);
//   });
  
//   let promiseAll = Promise.all([promise1, promise2]);
  
//   promiseAll
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
////////////////////////////////////////////////////////////////////async await
// let promisea=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("jiii")

// },5000)
// })

// let asyncprom=(async ()=>{
//     let resoponse= promisea
//     console.log(resoponse)
// })
// asyncprom()

/////////////////////
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I love You !!");}, 3000);
//     });
// TML = await myPromise;
// console.log(TML);
//   }
  
//   myDisplay();


/////////////////////////////////////////async and await 
// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result =  promise; // wait until the promise resolves (*)
  
// console.log(result); // "done!"
//   }
  
//   f();

///////////////////////////////////////////////////call


// let person={
//     name:"suhail",
//     latname:"Th",
//     fullname:function(){
//         console.log(this.name+" "+this.latname)
//     }

// }
// person.fullname()

// let persons={
//     name:"sil",
//     latname:"Th",

// }

// person.fullname.call(persons)

/////////////////////////////////////////curring
// let multiply=function(x){
//  return function (y){
//     console.log(x*y)
//  }
// }


// let multiply1=multiply(6)
// multiply1(6)
/////////////////////////call

// let person={
//     name:"ajmal",
//     last:"suhail",
//     fullname:function(place){
//         console.log(this.name+" "+this.last+" "+place)
//     }
// }

// let person2={
//     name:"ajm",
//     last:"suha",
// }

// let namess=person.fullname.bind(person2,"akhil")
// namess() 

/////////////////////////////////////async await 

// function sum(a){
//     return (b)=>{
//         return(c)=>{
//             return a+b+c
//         }
//     }
// }

// console.log(sum(10)(30)(89))
// const invalidJSONString = 'invalid JSON string';

// try {
//     const obj = JSON.parse(invalidJSONString);
//     console.log(obj);
// } catch (error) {
//     console.error("Parsing error:", error.message);
// }

////////////////////////////////////////////////////redable and writable stream
// const fs=require('fs')

// const readstream=fs.createReadStream('./docs/chunck.txt',{encoding:"utf-8",highWaterMark:64})
// const writestream=fs.WriteStream('./docs/chuncksss.txt')
// readstream.pipe(writestream)
// readstream.on('data',(chunck)=>{
//     console.log("--------->new clone")
//     console.log(chunck)
// })

/////////////////////////////////////////////////events emitter in js
// const EventEmitter=require('events')
// const emitter=new EventEmitter()
// emitter.on('data',(data)=>{
//     console.log(data)
// })
// emitter.emit("datas","hello how are you suhail?")