// console.log("start")
// setTimeout(() => console.log("middle"), 0)
// for(let x=0;x<=9e9;x++){}
// console.log("ended");

// console.log("1");
// const getConsole = () => {
//     console.log("2");
//     setTimeout(() => {
//         console.log("3");
//     }, 2000);
//     setTimeout(() => {
//         console.log("3a");
//     }, 1000);
// };
// getConsole();
// for (let i = 0 ; i <=5e9 ; i++) {}
// console.log("4");

//import "functionName" from "path"
// import { add } from "./utils.js";
// const output=add(1,2);
// console.log("~ add(1,2):",output);
const { addition, multiplication } = require("./utils..js");
const output = addition(1, 2);
console.log("~ addition(1,2):", output);
const output2 = multiplication(3, 4);
console.log("~ multiplication(3,4):", output2);