
// functions in JS 

// old way , new way 

// old way 

// function fun() {
//     console.log("fun output");
// }

// fun();

// new way - arrow function (Fat function) - modern JS 

const fun2 = () => {
    console.log("func2 output");
}

fun2();

// arguments to functions 

const addNums = (i, j) => {
    console.log(i + j);
}
addNums(10, 20); // 30 
addNums(10); // NaN 
addNums(10, 20, 90); // 30
addNums(); // NaN
