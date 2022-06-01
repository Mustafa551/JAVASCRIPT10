// chapter:01

//  Task:01
// alert("Error! please enter a valid password")

//  Task:02
// alert("Welcome to JS Land... \nHappy Coding")

//  Task:03
// alert("Welcome to js Land..")

//  Task:04
// alert("Happy Coding! \nPrevent this page from creating additional dialogs")


// chapter:02
//  Task:01
// var any = "Dramay Baaz"
// alert(any)

//  Task:02
// var voil = "i am trying to learn from the Book A smaller way to learn Javascript"
// alert(voil)

//  Task:03
// document.write("yah! I can write HTML content through Javascript")

// chapter:03

// task:01
// var age = 15
// alert(" I am "  + age +  " years old ")

// task:02
// var time = "14 times"
// alert(" You have visited the site " + time )

// task:03
// var birthyear = 2004
// document.write(" my birth year is " + birthyear + "<br> Data type of my ddeclared variable is " + typeof(birthyear))

// task:04
// var visitorname = "Mustafa"
// var productTitile = "Dslr"
// var productqty = 1
// var storename = "Dramay"
// alert(visitorname + " " + " ordered " + productqty + " " + productTitile + " on " + storename + " " + "store")

// chapter:04

// task:01
// var my, name, storename

// task:02
// legal variables

// var myName = Mustafa
// var my_Name = Mustafa
// var _my_Name = Mustafa
// var myname = Mustafa
// var myName1 = Mustafa

// illegal variables

// var my name = Mustafa
// var @myname = Mustafa
// var 1myname = Mustafa
// var my-name = Mustafa
// var my&name = Mustafa

// task:03
// document.write("<h2>Rules for naming JS variables</h2>");
// document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
// document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
// document.write("c) Variable names are case sensitive.<br>");
// document.write("d) Variable names should not be JS keywords.");

// chapter:05

// task:01
// var num1 = 55;
// var num2 = 155;
// var addnumbers = num1 + num2;
// document.write("sum of " + num1 + " and " +num2 + " is " +addnumbers )

// task:02
// var num1 = 55;
// var num2 = 155;
// var substraction = num1 - num2;
// var multiply = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;

// document.write("substraction of " + num1 + " and " + num2 + " is " + substraction + "<br>" )
// document.write("multiply " + num1 + " and " + num2 + " is " + multiply + "<br>")
// document.write("division of " + num1 + " and " + num2 + " is " + division + "<br>" )
// document.write("modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>" )

// task:03
// var number1;
//     document.write("Value after variable declaration is:" + number1 + "<br>");


//     number1 = 5;
//     document.write("Value after variable declaration is:" + number1 + "<br>");


//     number1++
//     document.write("Initial value: " + number1 + "<br>");


//     number1 = number1 + 7;
//     document.write("Value after addition is:" + number1 + "<br>");

//     number1--;
//     document.write("Value after decrement is:" + number1 + "<br>");

//     number1 = number1 % 3;
//     document.write("The remainder is : " + number1 + "<br>");

// task:04
// var ticketprice = 600;
// var numberoftickets = 5;
// var totalcost = ticketprice * numberoftickets;
// document.write("Total cost to buy " + numberoftickets + " tickets to a movie is " + totalcost + "PKR")

// task:05
// var table = 4;
// document.write("<h1>Table of 4 </h1>")
// document.write("4 x 1 = " + table * 1 + "<br>" + "4 x 2 = " + table * 2 + "<br>" + "4 x 3 = " + table * 3 + "<br>" + "4 x 4 = " + table * 4 + "<br>" + "4 x 5 = " + table * 5 + "<br>" + "4 x 6 = " + table * 6 + "<br>" + "4 x 7 = " + table * 7 + "<br>" + "4 x 8 = " + table * 8 + "<br>" + "4 x 9 = " + table * 9 + "<br>" + "4 x 10 = " + table * 10 + "<br>")

// task:06
// var celsius = 25;
// var fahrenheit = 70;

// C = (fahrenheit - 32) * 5 / 9;
// F = (celsius * 9 / 5) + 32;

// document.write(celsius + "<sup>o</sup>C is " + F + "<sup>o</sup>F" + "<br>")
// document.write(fahrenheit + "<sup>o</sup>F is " + C + "<sup>o</sup>C")


// task:07

// var item1 = 40000;
// var item2 = 25000;
// var item1Qty = 5;
// var item2Qty = 2;
// var shippingCharges = 800;


// var priceViaQtyItem1 = item1 * item1Qty;
// var priceViaQtyItem2 = item2 * item2Qty;

// var priceCal = priceViaQtyItem1 + priceViaQtyItem2;

// var totalCost = priceViaQtyItem1 + priceViaQtyItem2 + shippingCharges;

// document.write("<h2>Your Order</h2>");

// document.write("PRODUCT ----------------------------- SUBTOTAL");
// document.write("<br>");
// document.write("IPHONE 13 (item1)  × " + item1Qty + " ----------------- " + priceViaQtyItem1 + "PKR");
// document.write("<br>");
// document.write("RGB RAM 8Gb (item2)  × " + item2Qty + " ----------------- " + priceViaQtyItem2 + "PKR");
// document.write("<br>");
// document.write("Subtotal " + " ---------------------------------- " + priceCal + "PKR");
// document.write("<br>");
// document.write("Total cost of your order is :  " + " --------- " + totalCost + "PKR");

// task:08
// var totalmarks = 850;
// var obtainedmarks = 700;
// var percent = obtainedmarks / totalmarks * 100;

// document.write("<h1>Marks sheet</h1>")

// document.write("Totals marks: " + totalmarks + "<br>")
// document.write("obtainedmarks: " + obtainedmarks + "<br>")
// document.write("percentage: " + percent)

// task:09
// var oneUSD = 200.45;
//     var oneRiyal = 53.43;


//     var PKR2USD = oneUSD * 10;
//     var PKR2Riyal = oneRiyal * 10;
//     var totalCost = PKR2USD + PKR2Riyal;
//     document.write("<h1>Currency In PKR</h1>");
//     document.write("Total Currency in PKR : " + totalCost);


// task:10
// var SingleExpression = 5 * 10 / 2;
//     document.write("Single Expression calculation is : " + SingleExpression)

// task:11
// var currentYear = 2022;
//     var birthYear = 2004;

//     var myAge = currentYear - birthYear;

//     document.write("<h1>Age Calculator</h1>")
//     document.write("Current Year : " + currentYear + "<br>Birth Year is " + birthYear + "<br> My age is  : " + myAge);

// task:12
// var radius = 20;
// var circu = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write("<h1> The Geometrizer</h1>")
// document.write("Radius of a circle: " + radius)
// document.write("<br>")
// document.write("The circumference is: " + circu)
// document.write("<br>")
// document.write("The area is: " + area)

// task:13
// var favsnak = "lays";
// var age = 17;
// var maxage = 60;
// var amount = 6;
// var mini = maxage - age;
// var limit = mini * amount;

// document.write("<h1>The lifetime supply calculator</h1>")
// document.write("Favourite snack: " + favsnak)
// document.write("<br>")
// document.write("currrent age: " + age)
// document.write("<br>")
// document.write("estimated maximum age: " + maxage)
// document.write("<br>")
// document.write("amount of snack per day " + amount)
// document.write("<br>")
// document.write("yopu will need " + limit + " lays to last you until the ripe old age of " + maxage)


// chapter:06/09

// task:01
// var a = 10;
// document.write("Result:")
// document.write("<br>")
// document.write("The value of a is: " + a)
// document.write("<br>")
// document.write("--------------------------------------")
// document.write("<br><br>")


// ++a;
// document.write("The value of ++a is: " + a)
// document.write("<br>")
// document.write("Now the value of a: " + a)
// document.write("<br><br>")


// document.write("The value of a++ is: " + a )
// document.write("<br>")
// a++;
// document.write("Now the value of a is: " + a)
// document.write("<br><br>")


// --a;
// document.write("The value of --a is: " + a)
// document.write("<br>")
// document.write("Now the value of a is: " + a)
// document.write("<br><br>")


// document.write("The value of a-- is: " + a)
// document.write("<br>")
// a--;
// document.write("now the value of a is: " + a)

// task:02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//   1  -  0  +  1  +  1
//   1 + 1 + 1
//   3

// document.write("Explaination");
// document.write("<br>");
// document.write("<br>");
// document.write("--a is the pre decrement of a, current value of a is 2 after decrement --a =  1  <br>");
// document.write("--b is the pre decrement of b, current value of b is 0 after decrement --b =  0  <br>");
// document.write("++b is the pre increment of b, current value of b is 1 after increment ++b =  1  <br>");
// document.write("++b is the post decrement of b, it will decrease the value after call the varibale current value of b is 1 after decrement  b-- =  1");


// document.write("<br>");
// document.write("Current value of a is : 1");
// document.write("<br>");
// document.write("Current value of b is : 1");


// document.write("<br>");
// document.write("Result : " + result);

// task:03
// var name = prompt("Enter your name : ")
// document.write("Welcome " + name)

// task:04
// var table = prompt("Enter a table : ")
// document.write("table x 1 = " + table * 1 + "<br>" + "table x 2 = " + table * 2 + "<br>" + "table x 3 = " + table * 3 + "<br>" + "table x 4 = " + table * 4 + "<br>" + "table x 5 = " + table * 5 + "<br>" + "table x 6 = " + table * 6 + "<br>" + "table x 7 = " + table * 7 + "<br>" + "table x 8 = " + table * 8 + "<br>" + "table x 9 = " + table * 9 + "<br>" + "table x 10 = " + table * 10 + "<br>")

// task:05
// var subname1 = prompt("Enter a your 1 subject name:")
// var submarks1 = +prompt('Enter obtained marks of this subjects')

// var subname2 = prompt("Enter a your 2 subject name:")
// var submarks2 = +prompt("Enter obtained marks of this marks:")

// var subname3 = prompt("Enter a your 3 subject name:")
// var submarks3 = +prompt("Enter obtained marks of this marks:")

// var eachmarks = 100

// var totalmarks = 300



// var percent1 = submarks1 / eachmarks * 100;
// var percent2 = submarks2 / eachmarks * 100;
// var percent3 = submarks3 / eachmarks * 100;
// var totalobtained = submarks1 + submarks2 + submarks3 ;
// var totalpercent = totalobtained / totalmarks  * 100;

// document.write("<h3> subjects"  + " " +  "Totalmarks" + " " + "obtainedmarks" + " " + "Percentage </h3>")

// document.write(subname1 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + eachmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + submarks1 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ percent1 + "%"  )

// document.write("<br><br>")

// document.write(subname2 + `\xa0\xa0\xa0\xa0\xa0` + eachmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + submarks2 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ percent2 + "%")

// document.write("<br><br>")

// document.write(subname3 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + eachmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + submarks3 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ percent3 + "%")

// document.write("<br><br>")
// document.write("-------------------------------------------------------------------------------------")
// document.write("<br>")

// document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + totalmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + totalobtained + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + totalpercent + "%")


// Chapter:09-11

// task:01
// var city = prompt("Enter a city - only Karachi")

// if(city === "karachi" || city === "Karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("input is invalid")
// }

// task:02
// var gender = prompt("Enter your Gender")

// if(gender === "Male" || gender === "male"){
//     alert("Good morning sir")
// }
// else if(gender === "Female" || gender === "female"){
//     alert("oood morning mam")
// }else{
//     alert("invalid gender")
// }

// task:03
// var trafficlight = prompt("Enter a colors which traffic follows - Red, Yellow, Green")

// if(trafficlight === "Red" || trafficlight === "red"){
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
//     document.write("<br><br>")
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + trafficlight + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "Must stop")
// }
// else if(trafficlight === "yellow" || trafficlight === "yellow"){
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
//     document.write("<br><br>")
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + trafficlight + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "Ready to move")
// }
// else if(trafficlight === "green" || trafficlight === "Green"){
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
//     document.write("<br><br>")
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + trafficlight + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "Move")
// }
// else{
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
//     document.write("<br><br>")
//     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "invalid color" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "no message found")
// }

// task:04
// var fuel = +prompt("Enter a remaining fuel in your car")

// if(fuel < 0.25){
//     alert("please refill the fuel in your car")
// }
// else{
//     alert("No need to refiil fuel in your car")
// }

// task:05
// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// }


// var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }
// else if(c === 13){
//     alert("condition 2 is true")
// }
// else if(++c < 14){
//     alert("condition 3 is true")
// }
// else if (c === 14) {
//     alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// task:06
// var sub1 = +prompt("Enter a 1st subject obtain mark")
// var sub1t = +prompt("Enter a 1st subject total marks")

// var sub2 = +prompt("Enter a 2nd subject obtain mark")
// var sub2t = +prompt("Enter a 2nd subject total marks")

// var sub3 = +prompt("Enter a 3rd subject obtain mark")
// var sub3t = +prompt("Enter a 3rd subject total marks")

// var totalobtain = sub1 + sub2 + sub3;
// var tmarks = sub1t + sub2t + sub3t;

// var percentage = totalobtain / tmarks * 100;

// if(percentage >= 80){
//     document.write("<h1>Marks Sheet</h1>")
//     document.write(`<h3>Total marks : ${tmarks}</h3>`)
//     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
//     document.write(`<h3>Percentage : ${percentage}%</h3>`)
//     document.write(`<h3>Grade : A-one</h3>`)
//     document.write(`<h3>Remarks : Excellent</h3>`)
// }
// else if(percentage >= 70){
//     document.write("<h1>Marks Sheet</h1>")
//     document.write(`<h3>Total marks : ${tmarks}</h3>`)
//     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
//     document.write(`<h3>Percentage : ${percentage}%</h3>`)
//     document.write(`<h3>Grade : A</h3>`)
//     document.write(`<h3>Remarks : Good</h3>`)
// }
// else if(percentage >= 60){
//     document.write("<h1>Marks Sheet</h1>")
//     document.write(`<h3>Total marks : ${tmarks}</h3>`)
//     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
//     document.write(`<h3>Percentage : ${percentage}%</h3>`)
//     document.write(`<h3>Grade : B</h3>`)
//     document.write(`<h3>Remarks : you need to improve</h3>`)
// }
// else{
//     document.write("<h1>Marks Sheet</h1>")
//     document.write(`<h3>Total marks : ${tmarks}</h3>`)
//     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
//     document.write(`<h3>Percentage : ${percentage}%</h3>`)
//     document.write(`<h3>Grade : Fail</h3>`)
//     document.write(`<h3>Remarks : Sorry</h3>`)
// }


// task:07

// var user = +prompt("Enter a number");
// var guessno = 4;

// if(user === guessno){
//     alert("Bingo! correct answer")
// }
// else if(user === ++guessno){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("sorry! wrong answer")
// }

// task:08
// var number = +prompt("Enter a number : ");
//     if (number % 3 == 0) {
//         alert('divisible by 3')
//     }
//     else {
//         alert("not divisible by 3")
//     }


// task:09
// var number = +prompt("Enter a number : ");
// if (number % 2 == 0) {
//     alert('Even Number')
// }
// else {
//     alert("Odd Number")
// }


// task:10
// var temp = +prompt("Enter a tempersture")
// if(temp >= 40){
//     alert("it is too hot outside ")
// }
// else if(temp >= 30){
//     alert("The wheather today is normal")
// }
// else if(temp >= 20){
//     alert("Today's weather is cool ")
// }
// else{
//     alert("OMG! Today's wheather is so cool")
// }

// task:11
// var num1 = +prompt("Enter a First Number")
// var num2 = +prompt("Enter a Second Number")
// var operate = prompt("Enter a operation (+, -, *, /, %)")

// if(operate === "+"){
//     var result = num1 + num2;
//     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// }
// else if(operate === "-"){
//     var result = num1 - num2;
//     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// }
// else if(operate === "*"){
//     var result = num1 * num2;
//     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// }
// else if(operate === "/"){
//     var result = num1 / num2;
//     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// }
// if(operate === "%"){
//     var result = num1 % num2;
//     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// }


// chapter:12=13

// task:01

// var characterUser = prompt("Enter a character (A-Z , a-z ,0-9)") 

// var indexOfChar=characterUser.charCodeAt(0);

// // A-Z (65 to 90)
//     // a-z (97-122)
//     // 0-9 (48-57)

// if(indexOfChar>=65 && indexOfChar<=90)
// {
//     alert(characterUser +  " " + " upper case")
// }
// else if (indexOfChar>=97 && indexOfChar<=122){
//     alert(characterUser +  " " + "  lower case")
// }
// else if (indexOfChar>=48 && indexOfChar<=57){
//     alert(characterUser +  " " + " Number")
// }
// else{
//     alert("Invalid input !")
// }

// task:02

// var num1 = +prompt("Enter a first number")
// var num2 = +prompt("Entr a second number")

// if(num1 > num2){
//     alert(num1 + " is greater than " + num2)
// }
// else if(num1 < num2){
//     alert(num1 + " is less than " + num2)
// }
// else if(num1 === num2){
//     alert(num1 + " is equal to " + num2)
// }

// task:03

// var input = +prompt("Enter a number")

// if(input > 0){
//     alert("Number is positive")
// }
// else if(input < 0){
//     alert("number is negative")
// }
// else if(input === 0){
//     alert("Zero")
// }
// else{
//     alert("input is invalid!")
// }

// task:04

// var cha = prompt("Enter a character (a-z, A-z)");

// if ((cha === "a") || (cha === "A") || (cha === "e") || (cha === "E") || (cha === "i") || (cha === "I") || (cha === "O") || (cha === "o") || (cha === "u") || (cha === "U")) {
//     alert(true)
// }
// else {
//     alert(false)
// }

// task:05

// var realpass = "ifstatement"
// var inputpass = +prompt("Enter a password")

// if(inputpass === realpass){
//     alert("password is correct!")
// }
// else if(inputpass == ""){
//     alert("Enter your password")
// }
// else{
//     alert("password is incorrect!")
// }

// task:06

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting)
// }
// else {
//     greeting = "Good evening";
//     alert(greeting)
// }

// task:07

// var input = +prompt("Enter a time in 24 hours clock format like: 1900 = 7pm.")

// if(input >= 0000 && input < 1200){
//     alert("Good Morning!")
// }
// else if(input >= 1200 && input < 1700){
//     alert("Good Afternoon!")
// }
// else if(input >= 1700 && input < 2100){
//     alert("Good evening!")
// }
// else if(input >= 2100 && input <= 2359){
//     alert("Good night!")
// }
// else{
//     alert("Invalid input!")
// }

// chapter:14-16

// task:01
// var arr = [];
// alert("var arr = [ ];")


// task:02
// arry = new Array();
// alert("arry = new Array();")


// task:03
// var stringarray = ["karachi", "lahore", "islamabad", "pindi"];


// task:04
// var numarray = [10, 20, 40, 50];


// task:05
// var boolarray = [true, false, true, false];


// task:06
// var mixarray = [1, false, "java", true, "karachi", 2]; 


// task:07
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];

// document.write("<h1>Qualification</h1>")
// document.write(`<h2>1) ${qualification[0]}</h2>`)
// document.write(`<h2>2) ${qualification[1]}</h2>`)
// document.write(`<h2>3) ${qualification[2]}</h2>`)
// document.write(`<h2>4) ${qualification[3]}</h2>`)
// document.write(`<h2>5) ${qualification[4]}</h2>`)
// document.write(`<h2>6) ${qualification[5]}</h2>`)
// document.write(`<h2>7) ${qualification[6]}</h2>`)
// document.write(`<h2>8) ${qualification[7]}</h2>`)


// task:08
// var namarray = ["Ali", "Ahmed", "Mustafa"]
// var scoarray = [320, 230, 480];
// var score1 = scoarray[0] / 500 * 100;
// var score2 = scoarray[1] / 500 * 100;
// var score3 = scoarray[2] / 500 * 100;

// document.write(`score of ${namarray[0]} is ${scoarray[0]}. percentage: ${score1} <br>`)
// document.write(`score of ${namarray[1]} is ${scoarray[1]}. percentage: ${score2} <br>`)
// document.write(`score of ${namarray[2]} is ${scoarray[2]}. percentage: ${score3}`)


// task:09
// var colors = ["black", "blue", "yellow"]
// document.write(colors)

// task:9a
// var colorinput = prompt("Enter a color name which do you want to add at the start")
// var colors = ["Red", "Green", "Blue"]
// var addcolor = colors.unshift(colorinput)
// document.write(colors)

// task:9b
// var colorinput = prompt("Enter a color name which do you want to add at the last")
// var colors = ["Red", "Green", "Blue"]
// var addcolor = colors.push(colorinput)
// document.write(colors)

// task:9c
// var colorInput1 = prompt("Enter a color 1 name which do you want to add at the start.");
// var colorInput2 = prompt("Enter a color 2 name which do you want to add at the start.");

// var colors = ["red", "green", "blue"];
// var Addedcolor = colors.unshift(colorInput1, colorInput2);
// document.write(colors)

// task:9d

// var colors = ["red", "green", "blue"];
// var Addedcolor = colors.shift(colorInput);
// document.write(colors);

// task:9e
// var colors = ["red", "green", "blue"];
// var Addedcolor = colors.pop(colorInput);
// document.write(colors);

// task:9f
// var colors = ["red", "green", "blue"];
// var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
// var indexNumber = +prompt("which color do you want to add on that index? ");
// colors.splice(indexNumber, 0, colorInput);
// document.write(colors);

// task:9g
// var colors = ["red", "green", "blue"];
// var deleteIndex = +prompt("At which index do you want to delete color?")
// var colorDelete = +prompt("which color do you want to delete on that index?")
// colors.splice(deleteIndex, colorDelete);
// document.write(colors );


// // task:10
// var score = [20, 10, 70, 50, 60]
// document.write("Scores of students " + score + "<br>")
// var sort = score.sort()
// document.write("Ordered scores of students : " + score)


// task:11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
// document.write("Cities list: <br>" + cities + "<br>" )
// var sity = cities.slice(2,4)
// document.write("Selected cities list: <br> " + sity)


// task:12
// var arr = ["This", "is", "my",  "cat"];
//     document.write("<h1>Array: </h1>");
//     document.write(`<h1>${arr}</h1><br>`);

//     var joined = arr.join(" ");

//     document.write("<h1>String: </h1>");
//     document.write(`<h1>${joined}</h1><br>`);


// task:13

// var acc = ["Keyboard","mouse","printer","monitor"];
// document.write("<h2>Devices: </h2>");
// document.write(`<h2>${acc}</h2><br>`);

// var firstDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

// var secDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

// var thirdDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

// var fourthDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);


// task:14
// var acc = ["Keyboard","mouse","printer","monitor"];
//     document.write("<h2>Devices: </h2>");
//     document.write(`<h2>${acc}</h2><br>`);

//     var firstDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

//     var secDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

//     var thirdDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

//     var fourthDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

