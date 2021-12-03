// Callback is a function passed to as an argument to another function

const fun1 = (arg) => {
    console.log(`fun1`)
    arg(); //  callback  
}

// fun2 is a callback function.  
const fun2 = () => {
    console.log(`fun2`)
}

fun1(fun2);