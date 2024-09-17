let firstMessage = "Hi my name is Martin";
console.log(firstMessage);

// Modified name exercise 2
let name = "Emilian";
let message = `Hi my name is ${name}`;
console.log(message);

// Modified message and added age exercise 2
let firstName = "Emilian";
let age = 29;
let secondMessage = `Hi my name is ${firstName} and i am ${age} years old`;
console.log(secondMessage);

// Array exercise 3
let players = ['Martin', 'Thomas','Peter','Mathias', 'Niki'];
console.log(players)
let thirtPlayer = players.slice(2,3);
console.log(thirtPlayer);

let messageThirdEx = `The most valuable player of the match is ${thirtPlayer}`
console.log(messageThirdEx);

// Intermediate Exercise ex1

let myArr = ['Tesla','Audi', 'Renault','Volvo','Mazda','Fiat','Ferrari'];
console.log(myArr.sort());

// Intermediate Exercise ex2
let myArr1 = ['apple','banana','kiwi','mango','pear'];
console.log(myArr1);

myArr1.push('orange');
console.log(myArr1);

 myArr1.splice(0,1);
console.log(myArr1);

myArr1.splice(0,0,'apple');
myArr1.splice(5,1);
console.log(myArr1);

myArr1.splice(0,1,'strawberry');
console.log(myArr1)

// Intermediate Exercise ex2 part2
let myArr2 =['monkey','horse','dog','elephant','giraffe'];
console.log(myArr2);

myArr2.splice(0,1);
console.log(myArr2)

myArr2.splice(0,0,'cat');
console.log(myArr2);

myArr2.splice(4,1);
console.log(myArr2);

myArr2.splice(4,0,'tiger');
console.log(myArr2);

myArr2.reverse();
console.log(myArr2);

// Intermediate Exercise ex3

let text = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let fruits = text.split("/");
console.log(fruits);

let output =[

[ mangoArr = fruits.slice(0,1)],

[ lemonArr = fruits.slice(1,2)],

[ cherrieArr = fruits.slice(2,3)],

[ kiwiArr = fruits.slice(3,4)],

[ grapesArr = fruits.slice(4,5)],

[ pearArr = fruits.slice(5,6)],

[ peachArr = fruits.slice(6,7)],

[ orangeArr = fruits.slice(7,8)],

];

// document.write(text.replaceAll("/","<br>"))
// let result= text.split("/").join("<br>")

// document.write(result)

document.write(output[0]);
document.write("</br> </br>");
document.write(output[1]);
document.write("</br> </br>");
document.write(output[2]);
document.write("</br> </br>");
document.write(output[3]);
document.write("</br> </br>");
document.write(output[4]);
document.write("</br> </br>");
document.write(output[5]);
document.write("</br> </br>");
document.write(output[6]);
document.write("</br> </br>");
document.write(output[7]);
document.write("</br> </br>");

// Advance Exercise
document.write("The result of the Advance Exercise  is: " )

let a = 7;
let b = 14;
let c = 21;
let d = 36;
let e = 42;

let sum = a+b+c+d+e;
console.log(sum);

let f = '1';
let g = 15;
let h = 8;
let i = "1";

let multiply = f*g*h*i;
console.log(multiply)
let result = sum/multiply; 
document.write(result)

// Advance Exercise 2
let people = ["Greg", "Mary", "Devon","James"];
console.log(people);

people.splice(0,1);
console.log(people);

people.splice(0,0,'Matt');
console.log(people);

people.splice(3,1);
console.log(people);

people.splice(3,0,'Emilian');
console.log(people);


console.log(people.slice(2));
console.log(people.indexOf('Mary'));
console.log(people.indexOf('FOO'));

people.splice(3,1);
people.push("James");
people.splice(0,2,"Greg","Mary");
console.log(people);

people.splice(2,1,"Elizabeth", "Anna");
console.log(people);

// Advance Exercise 3

let allNumbers = [ 
    [1, 2, 1, 24], 
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6,17],
    [3, 5, 26, 3]
         ];

let  numbers = [allNumbers[1][1], allNumbers[4][2],allNumbers[5][3], allNumbers[2][3], allNumbers[2][1]];
console.log(numbers);

// Chalange

let paragraph = `Properties,$a$set$of$immutable$values,$are$passed$to$a$component's
$renderer$as$properties$in$its
$HTML$tag.$A$component$cannot$directly$modify$any$properties$passe
d$to$it,$but$can$be$passed$
callback$functions$that$do$modify$values.$This$mechanism's$promise$i
s$expressed$as$properties $flow$down;$actions$flow$up`
    
let allText = paragraph.replace(/\$/g, " ");
console.log(allText);
document.write(allText);








