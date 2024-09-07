function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  
////callback help 

//   setTimeoutPromisified(1000).then(function () {
//     console.log("hi");  //2nd 
//     setTimeoutPromisified(3000).then(function () {
//       console.log("hello");//3rd
//       setTimeoutPromisified(5000).then(function () {
//         console.log("hello there"); //4th
//       });
//     });
//   });
  
// console.log("out of call back"); //1st


////promise chaining 
// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });


//// PROMOSIFIED VERSION 
//// function setTimeoutPromosified(ms){
//// return newPromise ((resolve) => setTimeout(resolve, ms)) }
 ////  setTimeoutPromisified(duration).then(function(){ return setTimeoutPromisified(duration)})





// // Async/ Await that help you to write async code in a way that work sync 
// // built on the top of promises to avoid chaining  .catch() .then()


// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();

///// syntatic sugar 
async function solve(){
   await setTimeoutPromisified(4000);  //3
    console.log("4 sec completed");
    await setTimeoutPromisified(3000) //4
    console.log("3 sec completed "); 
    await setTimeoutPromisified(10000) //5
    console.log("10 s completed");    
}

console.log(" out of function "); //1

solve();

console.log(" away from function") //2
