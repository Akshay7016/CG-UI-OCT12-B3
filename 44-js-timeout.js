
//Asynchronous programming

console.log("fun1");

setTimeout(() => {
    console.log("fun2");
}, 1000);

console.log("fun3");

setTimeout(() => {
    console.log("fun4");
}, 1000);

console.log("fun5");





/* Output:

    fun1
    fun3
    fun5
    fun2
    fun4  */