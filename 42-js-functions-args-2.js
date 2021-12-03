// const functionWithFunctionAsArgument = (argToFunction) => {
//     console.log(`functionWithFunctionAsArgument`);
//     argToFunction();
// }

// const functionToBePassedAsArg = () => {
//     console.log(`functionToBePassedAsArg`);
// }

// functionWithFunctionAsArgument(functionToBePassedAsArg);



const fun1 = (arg) => {
    console.log("fun1");
    arg();
}

// const fun2 = () => {
//     console.log(`fun2`)
// }

// fun1(fun2);


// Directly passing function (Anonymous function) to a function as argument
fun1(() => {
    console.log("funX")   //Anonymous function
})









// fun1(() => {
//     console.log(`funX`);
// });

// fun1(function () {
//     console.log(`old style funX`);
// });