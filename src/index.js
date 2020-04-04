function hello(name) {
    var greeting = "hello";
    console.log("hello -> 'hello'", "hello");
    console.log("hello -> greeting", greeting);
    return greeting + ' ' + name;
}

console.log(hello("Booyakah")); // Hello Booyakah?
console.log(" 11");

const square = a => a*a;

//[1, 5, 3].map(a => a*a);

console.log(square(6));
