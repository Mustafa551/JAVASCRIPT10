// // // chapter:01

// // //  Task:01
// // // alert("Error! please enter a valid password")

// // //  Task:02
// // // alert("Welcome to JS Land... \nHappy Coding")

// // //  Task:03
// // // alert("Welcome to js Land..")

// // //  Task:04
// // // alert("Happy Coding! \nPrevent this page from creating additional dialogs")


// // // chapter:02
// // //  Task:01
// // // var any = "Dramay Baaz"
// // // alert(any)

// // //  Task:02
// // // var voil = "i am trying to learn from the Book A smaller way to learn Javascript"
// // // alert(voil)

// // //  Task:03
// // // document.write("yah! I can write HTML content through Javascript")

// // // chapter:03

// // // task:01
// // // var age = 15
// // // alert(" I am "  + age +  " years old ")

// // // task:02
// // // var time = "14 times"
// // // alert(" You have visited the site " + time )

// // // task:03
// // // var birthyear = 2004
// // // document.write(" my birth year is " + birthyear + "<br> Data type of my ddeclared variable is " + typeof(birthyear))

// // // task:04
// // // var visitorname = "Mustafa"
// // // var productTitile = "Dslr"
// // // var productqty = 1
// // // var storename = "Dramay"
// // // alert(visitorname + " " + " ordered " + productqty + " " + productTitile + " on " + storename + " " + "store")

// // // chapter:04

// // // task:01
// // // var my, name, storename

// // // task:02
// // // legal variables

// // // var myName = Mustafa
// // // var my_Name = Mustafa
// // // var _my_Name = Mustafa
// // // var myname = Mustafa
// // // var myName1 = Mustafa

// // // illegal variables

// // // var my name = Mustafa
// // // var @myname = Mustafa
// // // var 1myname = Mustafa
// // // var my-name = Mustafa
// // // var my&name = Mustafa

// // // task:03
// // // document.write("<h2>Rules for naming JS variables</h2>");
// // // document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
// // // document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
// // // document.write("c) Variable names are case sensitive.<br>");
// // // document.write("d) Variable names should not be JS keywords.");

// // // chapter:05

// // // task:01
// // // var num1 = 55;
// // // var num2 = 155;
// // // var addnumbers = num1 + num2;
// // // document.write("sum of " + num1 + " and " +num2 + " is " +addnumbers )

// // // task:02
// // // var num1 = 55;
// // // var num2 = 155;
// // // var substraction = num1 - num2;
// // // var multiply = num1 * num2;
// // // var division = num1 / num2;
// // // var modulus = num1 % num2;

// // // document.write("substraction of " + num1 + " and " + num2 + " is " + substraction + "<br>" )
// // // document.write("multiply " + num1 + " and " + num2 + " is " + multiply + "<br>")
// // // document.write("division of " + num1 + " and " + num2 + " is " + division + "<br>" )
// // // document.write("modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>" )

// // // task:03
// // // var number1;
// // //     document.write("Value after variable declaration is:" + number1 + "<br>");


// // //     number1 = 5;
// // //     document.write("Value after variable declaration is:" + number1 + "<br>");


// // //     number1++
// // //     document.write("Initial value: " + number1 + "<br>");


// // //     number1 = number1 + 7;
// // //     document.write("Value after addition is:" + number1 + "<br>");

// // //     number1--;
// // //     document.write("Value after decrement is:" + number1 + "<br>");

// // //     number1 = number1 % 3;
// // //     document.write("The remainder is : " + number1 + "<br>");

// // // task:04
// // // var ticketprice = 600;
// // // var numberoftickets = 5;
// // // var totalcost = ticketprice * numberoftickets;
// // // document.write("Total cost to buy " + numberoftickets + " tickets to a movie is " + totalcost + "PKR")

// // // task:05
// // // var table = 4;
// // // document.write("<h1>Table of 4 </h1>")
// // // document.write("4 x 1 = " + table * 1 + "<br>" + "4 x 2 = " + table * 2 + "<br>" + "4 x 3 = " + table * 3 + "<br>" + "4 x 4 = " + table * 4 + "<br>" + "4 x 5 = " + table * 5 + "<br>" + "4 x 6 = " + table * 6 + "<br>" + "4 x 7 = " + table * 7 + "<br>" + "4 x 8 = " + table * 8 + "<br>" + "4 x 9 = " + table * 9 + "<br>" + "4 x 10 = " + table * 10 + "<br>")

// // // task:06
// // // var celsius = 25;
// // // var fahrenheit = 70;

// // // C = (fahrenheit - 32) * 5 / 9;
// // // F = (celsius * 9 / 5) + 32;

// // // document.write(celsius + "<sup>o</sup>C is " + F + "<sup>o</sup>F" + "<br>")
// // // document.write(fahrenheit + "<sup>o</sup>F is " + C + "<sup>o</sup>C")


// // // task:07

// // // var item1 = 40000;
// // // var item2 = 25000;
// // // var item1Qty = 5;
// // // var item2Qty = 2;
// // // var shippingCharges = 800;


// // // var priceViaQtyItem1 = item1 * item1Qty;
// // // var priceViaQtyItem2 = item2 * item2Qty;

// // // var priceCal = priceViaQtyItem1 + priceViaQtyItem2;

// // // var totalCost = priceViaQtyItem1 + priceViaQtyItem2 + shippingCharges;

// // // document.write("<h2>Your Order</h2>");

// // // document.write("PRODUCT ----------------------------- SUBTOTAL");
// // // document.write("<br>");
// // // document.write("IPHONE 13 (item1)  × " + item1Qty + " ----------------- " + priceViaQtyItem1 + "PKR");
// // // document.write("<br>");
// // // document.write("RGB RAM 8Gb (item2)  × " + item2Qty + " ----------------- " + priceViaQtyItem2 + "PKR");
// // // document.write("<br>");
// // // document.write("Subtotal " + " ---------------------------------- " + priceCal + "PKR");
// // // document.write("<br>");
// // // document.write("Total cost of your order is :  " + " --------- " + totalCost + "PKR");

// // // task:08
// // // var totalmarks = 850;
// // // var obtainedmarks = 700;
// // // var percent = obtainedmarks / totalmarks * 100;

// // // document.write("<h1>Marks sheet</h1>")

// // // document.write("Totals marks: " + totalmarks + "<br>")
// // // document.write("obtainedmarks: " + obtainedmarks + "<br>")
// // // document.write("percentage: " + percent)

// // // task:09
// // // var oneUSD = 200.45;
// // //     var oneRiyal = 53.43;


// // //     var PKR2USD = oneUSD * 10;
// // //     var PKR2Riyal = oneRiyal * 10;
// // //     var totalCost = PKR2USD + PKR2Riyal;
// // //     document.write("<h1>Currency In PKR</h1>");
// // //     document.write("Total Currency in PKR : " + totalCost);


// // // task:10
// // // var SingleExpression = 5 * 10 / 2;
// // //     document.write("Single Expression calculation is : " + SingleExpression)

// // // task:11
// // // var currentYear = 2022;
// // //     var birthYear = 2004;

// // //     var myAge = currentYear - birthYear;

// // //     document.write("<h1>Age Calculator</h1>")
// // //     document.write("Current Year : " + currentYear + "<br>Birth Year is " + birthYear + "<br> My age is  : " + myAge);

// // // task:12
// // // var radius = 20;
// // // var circu = 2 * 3.142 * radius;
// // // var area = 3.142 * radius * radius;

// // // document.write("<h1> The Geometrizer</h1>")
// // // document.write("Radius of a circle: " + radius)
// // // document.write("<br>")
// // // document.write("The circumference is: " + circu)
// // // document.write("<br>")
// // // document.write("The area is: " + area)

// // // task:13
// // // var favsnak = "lays";
// // // var age = 17;
// // // var maxage = 60;
// // // var amount = 6;
// // // var mini = maxage - age;
// // // var limit = mini * amount;

// // // document.write("<h1>The lifetime supply calculator</h1>")
// // // document.write("Favourite snack: " + favsnak)
// // // document.write("<br>")
// // // document.write("currrent age: " + age)
// // // document.write("<br>")
// // // document.write("estimated maximum age: " + maxage)
// // // document.write("<br>")
// // // document.write("amount of snack per day " + amount)
// // // document.write("<br>")
// // // document.write("yopu will need " + limit + " lays to last you until the ripe old age of " + maxage)


// // // chapter:06/09

// // // task:01
// // // var a = 10;
// // // document.write("Result:")
// // // document.write("<br>")
// // // document.write("The value of a is: " + a)
// // // document.write("<br>")
// // // document.write("--------------------------------------")
// // // document.write("<br><br>")


// // // ++a;
// // // document.write("The value of ++a is: " + a)
// // // document.write("<br>")
// // // document.write("Now the value of a: " + a)
// // // document.write("<br><br>")


// // // document.write("The value of a++ is: " + a )
// // // document.write("<br>")
// // // a++;
// // // document.write("Now the value of a is: " + a)
// // // document.write("<br><br>")


// // // --a;
// // // document.write("The value of --a is: " + a)
// // // document.write("<br>")
// // // document.write("Now the value of a is: " + a)
// // // document.write("<br><br>")


// // // document.write("The value of a-- is: " + a)
// // // document.write("<br>")
// // // a--;
// // // document.write("now the value of a is: " + a)

// // // task:02
// // // var a = 2, b = 1;
// // // var result = --a - --b + ++b + b--;
// // //   1  -  0  +  1  +  1
// // //   1 + 1 + 1
// // //   3

// // // document.write("Explaination");
// // // document.write("<br>");
// // // document.write("<br>");
// // // document.write("--a is the pre decrement of a, current value of a is 2 after decrement --a =  1  <br>");
// // // document.write("--b is the pre decrement of b, current value of b is 0 after decrement --b =  0  <br>");
// // // document.write("++b is the pre increment of b, current value of b is 1 after increment ++b =  1  <br>");
// // // document.write("++b is the post decrement of b, it will decrease the value after call the varibale current value of b is 1 after decrement  b-- =  1");


// // // document.write("<br>");
// // // document.write("Current value of a is : 1");
// // // document.write("<br>");
// // // document.write("Current value of b is : 1");


// // // document.write("<br>");
// // // document.write("Result : " + result);

// // // task:03
// // // var name = prompt("Enter your name : ")
// // // document.write("Welcome " + name)

// // // task:04
// // // var table = prompt("Enter a table : ")
// // // document.write("table x 1 = " + table * 1 + "<br>" + "table x 2 = " + table * 2 + "<br>" + "table x 3 = " + table * 3 + "<br>" + "table x 4 = " + table * 4 + "<br>" + "table x 5 = " + table * 5 + "<br>" + "table x 6 = " + table * 6 + "<br>" + "table x 7 = " + table * 7 + "<br>" + "table x 8 = " + table * 8 + "<br>" + "table x 9 = " + table * 9 + "<br>" + "table x 10 = " + table * 10 + "<br>")

// // // task:05
// // // var subname1 = prompt("Enter a your 1 subject name:")
// // // var submarks1 = +prompt('Enter obtained marks of this subjects')

// // // var subname2 = prompt("Enter a your 2 subject name:")
// // // var submarks2 = +prompt("Enter obtained marks of this marks:")

// // // var subname3 = prompt("Enter a your 3 subject name:")
// // // var submarks3 = +prompt("Enter obtained marks of this marks:")

// // // var eachmarks = 100

// // // var totalmarks = 300



// // // var percent1 = submarks1 / eachmarks * 100;
// // // var percent2 = submarks2 / eachmarks * 100;
// // // var percent3 = submarks3 / eachmarks * 100;
// // // var totalobtained = submarks1 + submarks2 + submarks3 ;
// // // var totalpercent = totalobtained / totalmarks  * 100;

// // // document.write("<h3> subjects"  + " " +  "Totalmarks" + " " + "obtainedmarks" + " " + "Percentage </h3>")

// // // document.write(subname1 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + eachmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + submarks1 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ percent1 + "%"  )

// // // document.write("<br><br>")

// // // document.write(subname2 + `\xa0\xa0\xa0\xa0\xa0` + eachmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + submarks2 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ percent2 + "%")

// // // document.write("<br><br>")

// // // document.write(subname3 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + eachmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + submarks3 + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+ percent3 + "%")

// // // document.write("<br><br>")
// // // document.write("-------------------------------------------------------------------------------------")
// // // document.write("<br>")

// // // document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + totalmarks + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + totalobtained + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + totalpercent + "%")


// // // Chapter:09-11

// // // task:01
// // // var city = prompt("Enter a city - only Karachi")

// // // if(city === "karachi" || city === "Karachi"){
// // //     alert("Welcome to city of lights")
// // // }
// // // else{
// // //     alert("input is invalid")
// // // }

// // // task:02
// // // var gender = prompt("Enter your Gender")

// // // if(gender === "Male" || gender === "male"){
// // //     alert("Good morning sir")
// // // }
// // // else if(gender === "Female" || gender === "female"){
// // //     alert("oood morning mam")
// // // }else{
// // //     alert("invalid gender")
// // // }

// // // task:03
// // // var trafficlight = prompt("Enter a colors which traffic follows - Red, Yellow, Green")

// // // if(trafficlight === "Red" || trafficlight === "red"){
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
// // //     document.write("<br><br>")
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + trafficlight + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "Must stop")
// // // }
// // // else if(trafficlight === "yellow" || trafficlight === "yellow"){
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
// // //     document.write("<br><br>")
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + trafficlight + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "Ready to move")
// // // }
// // // else if(trafficlight === "green" || trafficlight === "Green"){
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
// // //     document.write("<br><br>")
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + trafficlight + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "Move")
// // // }
// // // else{
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>Signal color</b>" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "<b>message</b>")
// // //     document.write("<br><br>")
// // //     document.write(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "invalid color" + `\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + "no message found")
// // // }

// // // task:04
// // // var fuel = +prompt("Enter a remaining fuel in your car")

// // // if(fuel < 0.25){
// // //     alert("please refill the fuel in your car")
// // // }
// // // else{
// // //     alert("No need to refiil fuel in your car")
// // // }

// // // task:05
// // // var a = 4;
// // // if(++a === 5){
// // //     alert("given condition for variable a is true");
// // // }

// // // var b = 82;
// // // if(b++ === 83){
// // //     alert("given condition for variable b is true");
// // // }


// // // var c = 12;
// // // if(c++ === 13){
// // //     alert("condition 1 is true");
// // // }
// // // else if(c === 13){
// // //     alert("condition 2 is true")
// // // }
// // // else if(++c < 14){
// // //     alert("condition 3 is true")
// // // }
// // // else if (c === 14) {
// // //     alert("condition 4 is true");
// // // }


// // // var materialCost = 20000;
// // // var laborCost = 2000;
// // // var totalCost = materialCost + laborCost;
// // // if (totalCost === laborCost + materialCost) {
// // //     alert("The cost equals");
// // // }
// // // if (true) {
// // //     alert("True");
// // // }
// // // if (false) {
// // //     alert("False");
// // // }
// // // if ("car" < "cat") {
// // //     alert("car is smaller than cat");
// // // }

// // // task:06
// // // var sub1 = +prompt("Enter a 1st subject obtain mark")
// // // var sub1t = +prompt("Enter a 1st subject total marks")

// // // var sub2 = +prompt("Enter a 2nd subject obtain mark")
// // // var sub2t = +prompt("Enter a 2nd subject total marks")

// // // var sub3 = +prompt("Enter a 3rd subject obtain mark")
// // // var sub3t = +prompt("Enter a 3rd subject total marks")

// // // var totalobtain = sub1 + sub2 + sub3;
// // // var tmarks = sub1t + sub2t + sub3t;

// // // var percentage = totalobtain / tmarks * 100;

// // // if(percentage >= 80){
// // //     document.write("<h1>Marks Sheet</h1>")
// // //     document.write(`<h3>Total marks : ${tmarks}</h3>`)
// // //     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
// // //     document.write(`<h3>Percentage : ${percentage}%</h3>`)
// // //     document.write(`<h3>Grade : A-one</h3>`)
// // //     document.write(`<h3>Remarks : Excellent</h3>`)
// // // }
// // // else if(percentage >= 70){
// // //     document.write("<h1>Marks Sheet</h1>")
// // //     document.write(`<h3>Total marks : ${tmarks}</h3>`)
// // //     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
// // //     document.write(`<h3>Percentage : ${percentage}%</h3>`)
// // //     document.write(`<h3>Grade : A</h3>`)
// // //     document.write(`<h3>Remarks : Good</h3>`)
// // // }
// // // else if(percentage >= 60){
// // //     document.write("<h1>Marks Sheet</h1>")
// // //     document.write(`<h3>Total marks : ${tmarks}</h3>`)
// // //     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
// // //     document.write(`<h3>Percentage : ${percentage}%</h3>`)
// // //     document.write(`<h3>Grade : B</h3>`)
// // //     document.write(`<h3>Remarks : you need to improve</h3>`)
// // // }
// // // else{
// // //     document.write("<h1>Marks Sheet</h1>")
// // //     document.write(`<h3>Total marks : ${tmarks}</h3>`)
// // //     document.write(`<h3>Marks obtained : ${totalobtain}</h3>`)
// // //     document.write(`<h3>Percentage : ${percentage}%</h3>`)
// // //     document.write(`<h3>Grade : Fail</h3>`)
// // //     document.write(`<h3>Remarks : Sorry</h3>`)
// // // }


// // // task:07

// // // var user = +prompt("Enter a number");
// // // var guessno = 4;

// // // if(user === guessno){
// // //     alert("Bingo! correct answer")
// // // }
// // // else if(user === ++guessno){
// // //     alert("Close enough to the correct answer")
// // // }
// // // else{
// // //     alert("sorry! wrong answer")
// // // }

// // // task:08
// // // var number = +prompt("Enter a number : ");
// // //     if (number % 3 == 0) {
// // //         alert('divisible by 3')
// // //     }
// // //     else {
// // //         alert("not divisible by 3")
// // //     }


// // // task:09
// // // var number = +prompt("Enter a number : ");
// // // if (number % 2 == 0) {
// // //     alert('Even Number')
// // // }
// // // else {
// // //     alert("Odd Number")
// // // }


// // // task:10
// // // var temp = +prompt("Enter a tempersture")
// // // if(temp >= 40){
// // //     alert("it is too hot outside ")
// // // }
// // // else if(temp >= 30){
// // //     alert("The wheather today is normal")
// // // }
// // // else if(temp >= 20){
// // //     alert("Today's weather is cool ")
// // // }
// // // else{
// // //     alert("OMG! Today's wheather is so cool")
// // // }

// // // task:11
// // // var num1 = +prompt("Enter a First Number")
// // // var num2 = +prompt("Enter a Second Number")
// // // var operate = prompt("Enter a operation (+, -, *, /, %)")

// // // if(operate === "+"){
// // //     var result = num1 + num2;
// // //     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// // // }
// // // else if(operate === "-"){
// // //     var result = num1 - num2;
// // //     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// // // }
// // // else if(operate === "*"){
// // //     var result = num1 * num2;
// // //     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// // // }
// // // else if(operate === "/"){
// // //     var result = num1 / num2;
// // //     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// // // }
// // // if(operate === "%"){
// // //     var result = num1 % num2;
// // //     alert(`${num1}  ${operate}  ${num2} = ${result} `)
// // // }


// // // chapter:12=13

// // // task:01

// // // var characterUser = prompt("Enter a character (A-Z , a-z ,0-9)") 

// // // var indexOfChar=characterUser.charCodeAt(0);

// // // // A-Z (65 to 90)
// // //     // a-z (97-122)
// // //     // 0-9 (48-57)

// // // if(indexOfChar>=65 && indexOfChar<=90)
// // // {
// // //     alert(characterUser +  " " + " upper case")
// // // }
// // // else if (indexOfChar>=97 && indexOfChar<=122){
// // //     alert(characterUser +  " " + "  lower case")
// // // }
// // // else if (indexOfChar>=48 && indexOfChar<=57){
// // //     alert(characterUser +  " " + " Number")
// // // }
// // // else{
// // //     alert("Invalid input !")
// // // }

// // // task:02

// // // var num1 = +prompt("Enter a first number")
// // // var num2 = +prompt("Entr a second number")

// // // if(num1 > num2){
// // //     alert(num1 + " is greater than " + num2)
// // // }
// // // else if(num1 < num2){
// // //     alert(num1 + " is less than " + num2)
// // // }
// // // else if(num1 === num2){
// // //     alert(num1 + " is equal to " + num2)
// // // }

// // // task:03

// // // var input = +prompt("Enter a number")

// // // if(input > 0){
// // //     alert("Number is positive")
// // // }
// // // else if(input < 0){
// // //     alert("number is negative")
// // // }
// // // else if(input === 0){
// // //     alert("Zero")
// // // }
// // // else{
// // //     alert("input is invalid!")
// // // }

// // // task:04

// // // var cha = prompt("Enter a character (a-z, A-z)");

// // // if ((cha === "a") || (cha === "A") || (cha === "e") || (cha === "E") || (cha === "i") || (cha === "I") || (cha === "O") || (cha === "o") || (cha === "u") || (cha === "U")) {
// // //     alert(true)
// // // }
// // // else {
// // //     alert(false)
// // // }

// // // task:05

// // // var realpass = "ifstatement"
// // // var inputpass = +prompt("Enter a password")

// // // if(inputpass === realpass){
// // //     alert("password is correct!")
// // // }
// // // else if(inputpass == ""){
// // //     alert("Enter your password")
// // // }
// // // else{
// // //     alert("password is incorrect!")
// // // }

// // // task:06

// // // var greeting;
// // // var hour = 13;
// // // if (hour < 18) {
// // //     greeting = "Good day";
// // //     alert(greeting)
// // // }
// // // else {
// // //     greeting = "Good evening";
// // //     alert(greeting)
// // // }

// // // task:07

// // // var input = +prompt("Enter a time in 24 hours clock format like: 1900 = 7pm.")

// // // if(input >= 0000 && input < 1200){
// // //     alert("Good Morning!")
// // // }
// // // else if(input >= 1200 && input < 1700){
// // //     alert("Good Afternoon!")
// // // }
// // // else if(input >= 1700 && input < 2100){
// // //     alert("Good evening!")
// // // }
// // // else if(input >= 2100 && input <= 2359){
// // //     alert("Good night!")
// // // }
// // // else{
// // //     alert("Invalid input!")
// // // }

// // // chapter:14-16

// // // task:01
// // // var arr = [];
// // // alert("var arr = [ ];")


// // // task:02
// // // arry = new Array();
// // // alert("arry = new Array();")


// // // task:03
// // // var stringarray = ["karachi", "lahore", "islamabad", "pindi"];


// // // task:04
// // // var numarray = [10, 20, 40, 50];


// // // task:05
// // // var boolarray = [true, false, true, false];


// // // task:06
// // // var mixarray = [1, false, "java", true, "karachi", 2]; 


// // // task:07
// // // var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];

// // // document.write("<h1>Qualification</h1>")
// // // document.write(`<h2>1) ${qualification[0]}</h2>`)
// // // document.write(`<h2>2) ${qualification[1]}</h2>`)
// // // document.write(`<h2>3) ${qualification[2]}</h2>`)
// // // document.write(`<h2>4) ${qualification[3]}</h2>`)
// // // document.write(`<h2>5) ${qualification[4]}</h2>`)
// // // document.write(`<h2>6) ${qualification[5]}</h2>`)
// // // document.write(`<h2>7) ${qualification[6]}</h2>`)
// // // document.write(`<h2>8) ${qualification[7]}</h2>`)


// // // task:08
// // // var namarray = ["Ali", "Ahmed", "Mustafa"]
// // // var scoarray = [320, 230, 480];
// // // var score1 = scoarray[0] / 500 * 100;
// // // var score2 = scoarray[1] / 500 * 100;
// // // var score3 = scoarray[2] / 500 * 100;

// // // document.write(`score of ${namarray[0]} is ${scoarray[0]}. percentage: ${score1} <br>`)
// // // document.write(`score of ${namarray[1]} is ${scoarray[1]}. percentage: ${score2} <br>`)
// // // document.write(`score of ${namarray[2]} is ${scoarray[2]}. percentage: ${score3}`)


// // // task:09
// // // var colors = ["black", "blue", "yellow"]
// // // document.write(colors)

// // // task:9a
// // // var colorinput = prompt("Enter a color name which do you want to add at the start")
// // // var colors = ["Red", "Green", "Blue"]
// // // var addcolor = colors.unshift(colorinput)
// // // document.write(colors)

// // // task:9b
// // // var colorinput = prompt("Enter a color name which do you want to add at the last")
// // // var colors = ["Red", "Green", "Blue"]
// // // var addcolor = colors.push(colorinput)
// // // document.write(colors)

// // // task:9c
// // // var colorInput1 = prompt("Enter a color 1 name which do you want to add at the start.");
// // // var colorInput2 = prompt("Enter a color 2 name which do you want to add at the start.");

// // // var colors = ["red", "green", "blue"];
// // // var Addedcolor = colors.unshift(colorInput1, colorInput2);
// // // document.write(colors)

// // // task:9d

// // // var colors = ["red", "green", "blue"];
// // // var Addedcolor = colors.shift(colorInput);
// // // document.write(colors);

// // // task:9e
// // // var colors = ["red", "green", "blue"];
// // // var Addedcolor = colors.pop(colorInput);
// // // document.write(colors);

// // // task:9f
// // // var colors = ["red", "green", "blue"];
// // // var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
// // // var indexNumber = +prompt("which color do you want to add on that index? ");
// // // colors.splice(indexNumber, 0, colorInput);
// // // document.write(colors);

// // // task:9g
// // // var colors = ["red", "green", "blue"];
// // // var deleteIndex = +prompt("At which index do you want to delete color?")
// // // var colorDelete = +prompt("which color do you want to delete on that index?")
// // // colors.splice(deleteIndex, colorDelete);
// // // document.write(colors );


// // // // task:10
// // // var score = [20, 10, 70, 50, 60]
// // // document.write("Scores of students " + score + "<br>")
// // // var sort = score.sort()
// // // document.write("Ordered scores of students : " + score)


// // // task:11
// // // var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
// // // document.write("Cities list: <br>" + cities + "<br>" )
// // // var sity = cities.slice(2,4)
// // // document.write("Selected cities list: <br> " + sity)


// // // task:12
// // // var arr = ["This", "is", "my",  "cat"];
// // //     document.write("<h1>Array: </h1>");
// // //     document.write(`<h1>${arr}</h1><br>`);

// // //     var joined = arr.join(" ");

// // //     document.write("<h1>String: </h1>");
// // //     document.write(`<h1>${joined}</h1><br>`);


// // // task:13

// // // var acc = ["Keyboard","mouse","printer","monitor"];
// // // document.write("<h2>Devices: </h2>");
// // // document.write(`<h2>${acc}</h2><br>`);

// // // var firstDevice = acc.shift();
// // // document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

// // // var secDevice = acc.shift();
// // // document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

// // // var thirdDevice = acc.shift();
// // // document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

// // // var fourthDevice = acc.shift();
// // // document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);


// // // task:14
// // // var acc = ["Keyboard","mouse","printer","monitor"];
// // //     document.write("<h2>Devices: </h2>");
// // //     document.write(`<h2>${acc}</h2><br>`);

// // //     var firstDevice = acc.pop();
// // //     document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

// // //     var secDevice = acc.pop();
// // //     document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

// // //     var thirdDevice = acc.pop();
// // //     document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

// // //     var fourthDevice = acc.pop();
// // //     document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);


// // // chapter:17-20

// // // task:01
// // // var multiarr = [[], [], [], []]


// // // task:02
// // // var multiarr = [[0,1,2,3], [1,0,1,2], [2,1,0,1]]
// // // for(i = 0; i < multiarr.length; i++){
// // //     document.write(multiarr[i].join(" ") + "<br>")
// // // }

// // // task:03
// // // for (i = 1; i <= 10; i++) {
// // //     document.write(i + "<br>")
// // // }

// // // task:04
// // // var user = +prompt("Enter your table")
// // // var len = +prompt("Enter your table length")

// // // for (i = 1; i <= len; i++){
// // //     document.write(user + " X " + i + " = " + user * i + "<br>")
// // // }

// // // / Task no 5
// // // var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// // // for (i = 0; i < fruits.length; i++ ){
// // //     document.write(fruits[i] + "<br>")
// // // }
// // // document.write("<br>")
// // // for (i = 0; i < fruits.length; i++){
// // //     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// // // }

// // // Task no 6a,b,c,d,e
// // // document.write("<h1>Counting</h1>")
// // // for (i = 1; i <= 15; i++){
// // // document.write(i + ",")
// // // }

// // // document.write("<h1>Reverse counting</h1>")
// // // for (i = 10; i >= 0; i--){
// // // document.write(i + ",")
// // // }


// // // document.write("<h1>Even counting</h1>")
// // // for (i = 0; i <= 20; i++){
// // // if(i % 2 === 0){
// // // document.write(i + "  ")
// // // }
// // // }


// // // document.write("<h1>ODD Number</h1>")
// // // for (i = 0; i <= 20; i++) {

// // // if (i % 2 === 1) {
// // // document.write(i + " ")
// // // }
// // // }

// // // document.write("<h1>Series</h1>")
// // // for (i = 1; i <= 20; i++){
// // //     if(i % 2 === 0){
// // //         document.write(i + "K" + " ")
// // //     }
// // // }

// // // task:07
// // // A = ["cake", "apple pie", "cookie", "chips", "patties"];
// // // userInput = prompt("Enter a snack :")
// // // flag = false;
// // // for (i = 0; i <= A.length; i++){
// // //     if(userInput === A[i]){
// // //         flag = true
// // //         document.write(userInput + " is available at index " + i + " in our bakery")
// // //     }
// // // }
// // // if(flag === false){
// // //     document.write(userInput + " is not available")
// // // }

// // // task:08
// // // var A = [24, 53, 78, 91, 12,400,343,687,5,34,67,89]

// // // var compareInt = A[0];

// // //  var bhaiMiljayeTo = "nahi";


// // // for(i=0;i<A.length; i++)
// // // {
// // //     if(compareInt < A[i]){

// // //         bhaiMiljayeTo = "han";
// // //         compareInt = A[i]
// // //     }
// // // }

// // // if(bhaiMiljayeTo === "han"){
// // //     console.log(compareInt)
// // // }
// // // else{
// // //     console.log("bhai ni mili")

// // // }


// // // task:09
// // // var A = [24, 53, 78, 91, 12,400,343,687,5,34,67,89]

// // // var compareInt = A[0];

// // //  var bhaiMiljayeTo = "nahi";


// // // for(i=0;i > A.length; i++)
// // // {
// // //     if(compareInt > A[i]){

// // //         bhaiMiljayeTo = "han";
// // //         compareInt = A[i]
// // //     }
// // // }

// // // if(bhaiMiljayeTo === "han"){
// // //     console.log(compareInt)
// // // }
// // // else{
// // //     console.log("bhai ni mili")

// // // }



// // // // task:10
// // // for(var i=1; i<=100;i++){
// // //     // 1,2,3,4,5,6,7,7....100
// // //     // console.log(i) 
// // //     if(i%5==0){

// // //         console.log(i)
// // //         // 5,10,15,20
// // //     }
// // // }

// // // chapter:21-25

// // // task:01

// // // var firstname = prompt("Enter your firstname");
// // // var lastname = prompt("Enter your lastname");
// // // var fullname = firstname + lastname;
// // // alert("Assalam-o-alikum " + fullname)

// // // task:02

// // // var userphone = prompt("Enter your favourite mobile phone")
// // // var len = userphone.length
// // // document.write("My favourite mobile phone is : " + userphone + "<br>")
// // // document.write("Length of string : " + len)

// // // task:03

// // // var paki = "Pakistani"
// // // var index = paki.indexOf("n")
// // // document.write("String: " + paki +"<br>" + "index of n : " + index)

// // // task:04

// // // var hello = "Hello World"
// // // var index = hello.lastIndexOf("l")
// // // document.write("String: " + hello +"<br>" + "Last index of l : " + index)

// // // task:05

// // // var pakis = "Pakistani"
// // // var char = pakis.charAt(3)
// // // document.write("String: " + pakis +"<br>" + "index of 3 : " + char)

// // // taask:06

// // // var firstname = prompt("Enter your firstname");
// // // var lastname = prompt("Enter your lastname");
// // // var fullname = firstname.concat(lastname);
// // // alert("Assalam-o-alikum " + fullname)

// // // task:07

// // // var city = "Hyderabad"
// // // var replacedcity = "islam" + city.slice(city.indexOf("bad"));
// // // console.log(replacedcity)



// // // var index = city.indexOf("Hyder")
// // // console.log(index)
// // // var firsttext = city.slice(index)
// // // var replace = "isla"
// // // document.write("City: " + city + "<br> After replacement: " + replace + firsttext)

// // // var city = "Hyderabad"
// // // var rep = city.replace("Hyder","Islam")
// // // console.log(rep)

// // // task:08

// // // var message = "Ali and Sami are best friends. They play cricket and football together.";
// // // var re = message.replace(/and/g,"&")
// // // document.write(re)

// // // task:09

// // // var integer = "472"
// // // var type = typeof(integer)
// // // var num = Number(integer)
// // // var type2 = typeof(num)
// // // document.write("Value: " + integer + "<br> Type: " + type + "<br> Value: " + num + "<br> Type: " + type2)

// // // task:10

// // // var user = prompt("Enter your input")
// // // var upp = user.toUpperCase()
// // // document.write(upp)

// // // task:11

// // // var userInput = prompt("Enter your input")
// // // var slic = userInput.slice(0,1)
// // // var upper = slic.toUpperCase()
// // // var sli2 = userInput.slice(1)
// // // var lower = sli2.toLowerCase()
// // // document.write("Userinput: " + userInput + "<br> Title case: " + upper + lower)

// // // task:12

// // // var num = 35.36 ;
// // // var numberAsString = num.toString();
// // // var ep = numberAsString.replace(".","")
// // // document.write("Number: " + num + "<br> Result: " + ep)

// // // task:13

// // // var userInput = prompt("Enter your input")
// // // var isTrue = false;
// // // for (i = 0; i < userInput.length; i++) {

// // //     if (userInput[i] == "!" || userInput[i] === "@") {
// // //         isTrue = true;
// // //         alert("invalid")

// // //     }

// // // }
// // // if (isTrue == false) {
// // //     alert("valid")
// // // }

// // // task:14

// // var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// // var flag = false
// // var user = prompt("Enter your item")
// // var lower = user.toLowerCase()
// // for(i = 0; i < bakery.length; i++){
// //     if(bakery[i] === lower){
// //         alert(lower + " is available at index " + i + " in our bakery")
// //         flag = true
// //     }
// // }
// // if(flag === false){
// //     alert(lower + " is not available in our bakery")
// // }

// // // task:15

// // // var a = [
// // //     "A",
// // //     "B",
// // //     "C",
// // //     "D",
// // //     "E",
// // //     "F",
// // //     "G",
// // //     "H",
// // //     "I",
// // //     "J",
// // //     "K",
// // //     "L",
// // //     "M",
// // //     "N",
// // //     "O",
// // //     "P",
// // //     "Q",
// // //     "R",
// // //     "S",
// // //     "T",
// // //     "U",
// // //     "V",
// // //     "W",
// // //     "X",
// // //     "Y",
// // //     "Z",
// // // ];
// // // var b = [
// // //     "a",
// // //     "b",
// // //     "c",
// // //     "d",
// // //     "e",
// // //     "f",
// // //     "g",
// // //     "h",
// // //     "i",
// // //     "j",
// // //     "k",
// // //     "l",
// // //     "m",
// // //     "n",
// // //     "o",
// // //     "p",
// // //     "q",
// // //     "r",
// // //     "s",
// // //     "t",
// // //     "u",
// // //     "v",
// // //     "w",
// // //     "x",
// // //     "y",
// // //     "z",
// // // ];
// // // var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// // // var pass = prompt("Enter your password");

// // // var isNumber = false;
// // // var isAlpha = false;
// // // var isInvalid = false;

// // // if (c.indexOf(pass[0]) !== -1) {
// // //     alert("Number is not allowed on index 0")
// // // }
// // // else if (pass.length < 6) {
// // //     alert("Password should be at leasat 6")
// // // }

// // // else {

// // //     for (i = 0; i < pass.length; i++) {

// // //         if (a.indexOf(pass[i]) !== -1) {

// // //             isAlpha = true;
// // //         }
// // //         else if (b.indexOf(pass[i]) !== -1) {

// // //             isAlpha = true;
// // //         }
// // //         else if (c.indexOf(pass[i]) !== -1) {

// // //             isNumber = true;
// // //         }
// // //         else {

// // //             isInvalid = true;

// // //         }
// // //     }
// // //     if (isNumber && isAlpha && !isInvalid) {

// // //         alert("Correct !")
// // //     }
// // //     else {

// // //         alert("password not meet the requirement ")
// // //     }
// // // }



// // // task:16

// // // var university = "University of Karachi";
// // // var splt = university.split("").join("<br>")
// // // document.write(splt + "<br>")

// // // task:17

// // // var character = prompt("Enter your string : ");

// // // var LastChar = (character.length) - 1;
// // // console.log(character[LastChar])

// // task:18

// // var name = prompt("Enter your String :");
// // var findWord = prompt("Enter your word which find from string : ");
// // var replacedWord = prompt("Enter your word which replace from string : ");
// // var splitedValue = name.split(' ');

// // for(i=0; i<splitedValue.length; i++){
// //     if(splitedValue[i]===findWord){
// //         var name= name.replace(splitedValue[i],replacedWord)
// //     }
// // }
// // console.log(name)

// // chapter:26-30

// // task:01

// // var user = +prompt("Enter your positive integer")

// // document.write("Number: " + user + "<br>")
// // document.write("round off value: " + Math.round(user) + "<br>")
// // document.write("floor value: " + Math.floor(user) + "<br>")
// // document.write("ceil value: " + Math.ceil(user) + "<br>")

// // task:02

// // var user = +prompt("Enter your negative integer")

// // document.write("Number: " + user + "<br>")
// // document.write("round off value: " + Math.round(user) + "<br>")
// // document.write("floor value: " + Math.floor(user) + "<br>")
// // document.write("ceil value: " + Math.ceil(user) + "<br>")

// // task:03

// // var num = +prompt("Enter a number")

// // if(num < 0){
// //     var absolute = num * -1;
// //     document.write("The absolute valute of " + num + " is " + absolute)
// // }else{
// //     document.write("The absolute valute of " + num + " is " + num)

// // }

// // task:04

// // var randomvalues = + prompt("How many random value do you want to after roll the dice?")
// // for (i = 1; i < randomvalues; i++) {
// //     var randomeNumber = Math.floor((Math.random() * 6)) + 1;
// //     document.write("Randome dice value : " + randomeNumber + "<br>")
// // }

// // task:05

// var ht = ["head","tail"]
// var  randomNumbers = Math.random()*ht.length;
// var  roundMethod = Math.round(randomNumbers)
// var  FloorMethod = Math.floor(randomNumbers)
// console.log(ht[FloorMethod])

// // task:06

// // var randomNumber = Math.floor(Math.random() * 100) + 1;
// // document.write("Random number between 1 to 100 : " + randomNumber + "<br>")

// // task:07

// // var user = prompt("Enter your weight in kilogram")

// // if(user.indexOf(".")){
// //     document.write("The weight of user is " + parseFloat(user) + " Kilograms")
// // }else{
// //     document.write("The weight of user is " + parseInt(user) + " Kilograms")

// // }

// // task:08

// // var secret = Math.floor(Math.random() * 10) + 1;
// // console.log(secret)
// // var user = +prompt("Enter a number 1 to 10")
// // if(user === secret){
// //     document.write("you win")
// // }else{
// //     document.write("Try again!")
// // }

// // chapte:31-34

// // task:01

// // var date = new Date()
// // document.write(date)

// // task:02

// // var month= ["January","February","March","April","May","June","July",
// //             "August","September","October","November","December"];
// // var date = new Date()
// // var mnth = date.getMonth()
// // document.write(month[mnth])

// // task:03

// // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // var current = new Date()
// // var getday = current.getMonth()
// // var neww = dayNames[getday]
// // var copy = neww.slice(0,3)
// // document.write(copy)

// // task:04

// // var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// // var currentDay = new Date().getDay();
// // if (day[currentDay] === "Sunday" || day[currentDay] === "Saturday") {

// //     document.write("Its fun day")
// // }
// // else {
// //     document.write("Its NOT fun day")

// // }

// // task:05

// //    var currentDate = new Date().getDate();
// //    console.log(currentDate)

// //     if (currentDate < 16) {
// //         alert('First Fifteen Days of the month')
// //     } else {
// //         alert('Last Fifteen Days of the month')
// //     }

// // task:06


// // var currentDate = new Date();

// // document.write("Current Date : " + currentDate);
// // document.write("<br>")

// // var MidNightJan = new Date("jan 1, 1970").getTime();


// // var diff = currentDate - MidNightJan;
// // document.write("Elapsed Millisecond since January 1, 1970: " + diff);
// // document.write("<br>")

// // var Minutes = diff / (1000 * 60 * 60);

// // document.write("Elapsed Minutes since January 1, 1970: " + Minutes);

// // task:07

// // var date = new Date().getHours();
// // if (date >= 12) {
// //     alert("Its PM")
// // }
// // else {
// //     alert("Its Am")
// // }

// // task:08

// // var date = new Date("Dec 31, 2020");
// // document.write("Later Date" + date);

// // task:09

// // var date = new Date("June 18, 2015");
// //     var current = new Date();
// //     var diff = current - date;

// //     var RamzanDaysPassed = Math.round(diff / (1000 * 60 * 60 * 24))

// // task:10

// // var date = new Date("Jan 01, 2015");
// //     var current = new Date();
// //     var diff = current - date;

// //     var secPassed = Math.round(diff / (1000 * 60))
// //     document.write("On Refernce date " + date + "," + secPassed + "  Passed since begning of 2015");

// // task:11

// // var dateTime = new Date("Jan 01, 2015 23:08:16")
// // document.write("Current date" + dateTime)


// // var beforeHr = new Date("Jan 01, 2015 22:08:16").getTime();

// // dateTime.setTime(beforeHr)
// // document.write("1 hour ago, it was " + dateTime)

// // task:12

// // var user = prompt("Enter your year");

// //     var userYear = new Date(user).getTime();

// //     var currentYear = new Date().getTime();

// //     var diff = currentYear - userYear;
// //     var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

// //     document.write("Your age is : " + age + "<br>");
// //     document.write("Your birth year is : " + user)

// // task:13

// // var currentDate = new Date();
// // alert("Current date" + currentDate)

// // var yearsBack = new Date("1992 Dec 05").getTime();

// // currentDate.setTime(yearsBack);

// // alert("100 years back it was" + currentDate);

// // // task:14

// var Month = ["Jan", "Feb", "Marach", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]

// var customerName = prompt("Enter your Name : ");
// var currentMonth = new Date().getMonth();
// var numberOfUnit = +prompt("Enter number of Units :");
// var ChargesOfUnit = +prompt("Enter Charges per unit :");
// var LatePaymentSurcharge = +prompt("Enter Late Payment Surcharge :");
// var netAmount = +prompt("Enter Net Amount Payable (within Due Date)");

// var net_Amount_Payable = numberOfUnit * ChargesOfUnit;
// var Gross_Amount_Payable = netAmount + LatePaymentSurcharge;




// document.write(`<h1>K-Electric Bill <br> </h1>`)
// document.write(`Customer Name: <b>${customerName}</b> <br> `)
// // document.write(`Month: <b>${Month[currentMonth]}</b> <br>`)
// // document.write(` Number of Units: <b>${numberOfUnit} </b><br>`)
// // document.write(`Charges per unit: <b>${ChargesOfUnit}</b> <br> `)

// // document.write(`Net Amount Payable (within Due Date): <b>${net_Amount_Payable}</b> <br>`)
// // document.write(`Late Payment Surcharge: <b>${LatePaymentSurcharge}</b> <br> </h4>`)
// // document.write(`Gross Amount Payable (after Due Date): <b>${Gross_Amount_Payable}</b> <br>`)

// // chapter:35-38

// // task:01

// // function date(){
// //    var New = new Date();
// //    document.write(New)   
// // }
// // date()

// // task:02

// // function greet(firstname,lastname){
// //    var name = firstname + lastname
// //    console.log(name)
// // }
// // var firstname = prompt("Enter your firstname")
// // var lastname = prompt("Enter your lastname")

// // greet(firstname,lastname)

// // task:03

// // function sum() {
// //    var num1 = +prompt("Enter your firstname")
// //    var num2 = +prompt("Enter your lastname")
// //    var plus = num1 + num2
// //    console.log(plus)
// // }

// // sum()

// // task:04

// // function calculator(firstNum, secNum) {
// //    var firstNum = +prompt("Enter you first Number: ")
// //    var secNum = +prompt("Enter you Last Number: ");
// //    var operator = prompt("Enter your operator : (+,-,*,/,%")
// //    if (operator === "+") {

// //        result = firstNum + secNum;
// //        document.write("Sum of two number is : " + result)

// //    }
// //    else if (operator === "-") {

// //        result = firstNum - secNum;
// //        document.write("Subtraction of two number is : " + result)

// //    }
// //    else if (operator === "*") {

// //        result = firstNum * secNum;
// //        document.write("Multiplication of two number is : " + result)

// //    }
// //    else if (operator === "/") {

// //        result = firstNum / secNum;
// //        document.write("Divide of two number is : " + Math.round(result))

// //    }
// //    else if (operator === "%") {
// //        result = firstNum % secNum;
// //        document.write("Reminder of two number is : " + result)

// //    }
// //    else {
// //        document.write("Invalid result")
// //    }
// // }

// // calculator()

// // task:05

// // function squares() {

// //    var squareNum = +prompt("Enter a number to find the sqaure of it  : ")

// //    var findSquare = squareNum * squareNum;

// //    document.write("Reminder of two number is : " + findSquare)

// // }
// // squares()

// // task:06

// // function factorial() {
// //     // Factorial of n = n! = n × (n – 1) × (n – 2) × … × 1
// //     var fact = 1;
// //     var factorialNumber = +prompt("Enter a number to find the factorical that number : ")
// //     document.write("Factorial Of " + factorialNumber + " ! <br>")

// //     // factorial of negative number is not possible 
// //     if (factorialNumber < 0) {
// //         document.write("The factorial of the negative number doesnot perform")
// //     }

// //     // factorial of 0! = 1
// //     else if (factorialNumber === 0) {

// //         document.write("The factorial of 0 is 1")
// //     }
// //     else if (factorialNumber >= 1) {
// //         for (i = 1; i <= factorialNumber; i++) {

// //             fact *= i;
// //             document.write(i + " ")

// //         }
// //         document.write(" =  " + fact)

// //     }
// // }

// // task:07

// // function counting() {
// //     document.write("<h1>Countring</h1> <br>================")
// //     var startNumber = +prompt("Enter a start Number : ");
// //     var EndNumber = +prompt("Enter a End Number : ");


// //     for (i = startNumber; i <= EndNumber; i++) {

// //         document.write(i + "<br>")
// //     }
// // }
// // counting()

// // task:08

// // function calculateHypotenuse(base, prep) {
        
// //     var base = +prompt("Enter a base :")
// //     var prep = +prompt("Enter a prependicular :")
// //      var Findbase = base * base;
// //      var FindPrep = prep * prep;
// //      var hyp = Math.sqrt(FindPrep + Findbase);
// //      document.write("Hypotenous of the triangle is : " + hyp)

// //  }
// //  calculateHypotenuse()

// // task:09

// // function area(width, height) {

// //     var width = +prompt("Enter a width :");
// //     var height = +prompt("Enter a height :");

// //     A = width * height;

// //     document.write("(Argument as variable) Area of the Rectangle is " + A);

// //     document.write("<br>")

// //     var area = 45 * 54;
// //     document.write("(Argument as value) Area of the Rectangle is : " + area)

// // }
// // area()

// // task:10

// // function palindrome() {


// //     var text = '';
// //     var userInput = prompt("Enter a string");

// //     for (var i = userInput.length - 1; i >= 0; i--) {
// //         text += userInput[i];
// //     }

// //     if (text === userInput) {
// //         alert("its palindrome");
// //     }
// //     else {
// //         alert("its not palindrome");
// //     }
// // }
// // palindrome()

// // task:11

// // function titledcase() {

    // var userInput = prompt("Enter a word or Letter").toLowerCase();

    // document.write("User Input : " + userInput + "<br>")

    // document.write("Title case : ")

    // var userInput = userInput.split(' ');
    // for (i = 0; i < userInput.length; i++) {
    //     userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
    //     document.write(userInput[i])
    // }
// // }
// // titledcase()

// // task:12

// // function longestWord(str){

    // var str = prompt("Enter your string : ")
    // var splitArrayValue = str.split(' ');
    
    // var storeWord = "";
    
    // for (var i = 0; i < splitArrayValue.length; i++) {
    //     if (splitArrayValue[i].length > storeWord.length) {
    //         storeWord = splitArrayValue[i];
    //     }
    // }
    //     // return storeWord;
    //     document.write("Actual String is : " + str + "<br>")
    //     document.write("Longest word in String is : " + storeWord)
        
// //     }

// // task:13

// // function letterOccurence(strings, character) {

// //     var strings = prompt("Enter a string :").toLowerCase();
// //     var character = prompt("Enter a character: ")

// //     var count = 0;
// //     for (var i = 0; i < strings.length; i++) {
// //         if (strings.charAt(i) == character)
// //             count++;
// //     }

// //     document.write("Text : " + strings + "<br>")
// //     document.write("There are " + count + " occurrence(s) of the word " + character);
// // }

// // task:14

// // function CircumferenceAndArea() {

// //     function Circumference(r) {
// //         var r = parseFloat(prompt("Enter a radius for Circumference of Cricle : "))
// //         var coc = 2 * Math.PI * r;
// //         document.write("Circumference of circle " + coc + "<br>");
// //     }
// //     function Area(r) {
// //         var r = parseFloat(prompt("Enter a radius for Area of circle : "))
// //         var area = Math.PI * r * r;
// //         document.write("Area of the circle: " + area);
// //     }

// //     Circumference();
// //     Area();
// // }

// // chapter :39-41

// // task:01

// var sum = 1;
// function power(a,b){
//     for(i = 1; i <= b; i++){
//         sum = a*sum;
//         console.log(sum)
//     }
//     alert(sum)
// }

// var powerNo = +prompt("Enter power no : ")
// var rangeofNo = +prompt("Enter raange no : ")

// power(powerNo,rangeofNo)

// // 1 ------> 2*1 = 2
// // 2 ------> 2*2 = 4
// // 3-------> 2*4 = 8
// // 4
// // 5

// task:02

//     function year(){
//     year = +prompt("Enter year")
// if(year%4===0){

//     console.log("its leap year")
// }
// else{
//         console.log("its not leap year")
//     }
// }
    
    // task:03

    // function side(a,b,c){
    //     return (a+b+c)/2
    // }
    
    // function area(s,a,b,c){
    
    //     return s*(s-a)*s*(s-b)*s*(s-c)
    // }
    // var side1 = +prompt("Enter a side 1")
    // var side2 = +prompt("Enter a side 2")
    // var sdie3 = +prompt("Enter a side 3")
    
    // var sq = side(side1,side2,sdie3)
    
    // var a = area(sq,side1,side2,sdie3)
    // console.log("Area of triangle " + a.toFixed(4))

// task:04

// function avg(m1,m2,m3){
//     return (m1+m2+m3) / 3
// }
// function per(m1,m2,m3){
//     var obt = m1 + m2 + m3
//     return (obt / 300) * 100
// }
// function main(a,b){
//     console.log("Average marks of student " + a)
//     console.log("percentage of student is " + b)
// }
// var m1 = +prompt("Enter your first subject marks of 100")
// var m2 = +prompt("Enter your second subject marks of 100")
// var m3 = +prompt("Enter your third subject marks of 100")
// var a = avg(m1,m2,m3)
// var b = per(m1,m2,m3)
// main(a,b)

// task:05

// flag = false
// function indexOf(word,letter){
//     for(i = 0; i < word.length; i++){
//         if(word[i] === letter){
//             alert([i])
//             flag = true
//         }
//     }
//     if(flag === false){
//         alert(-1)
//     }
// }
// indexOf("mustafa","t")

// task:06

// function vowel(string){
//     var spl = string.split("")
//     for(i = 0; i < string.length; i++){
//         var tolo = string[i].toLowerCase()
//         if(tolo === "a" || tolo === "e" || tolo === "i" || tolo === "o" || tolo === "u"){
//             spl[i] = ""
//         }
//     }
//     return spl.join("")
// }
// var ss = vowel("my name is mustafa")
// console.log(ss)

// task:07

// function vowelss(str){
//     var count = 0
//     var arr = ["ae","ai","ao","au","ea","ei","eo","eu","ia","ie","io","iu","oa","oe","oi","ou","ua","ue","ui","uo"]
//     for(i = 0;i < str.length; i++){
//         for(j= 0; j < arr.length; j++ ){
//             if(str.slice(i,i+2) === arr[j]){
//                 count++
//             }
//         }
//     }
    
//     return count
// }
// var str = prompt("Enter your string")
// var vowe = vowelss(str) 
// console.log(vowe)




// task:08

// function kmtometer(km){
//     // 1km = 1000m
//     return km * 1000
// }
// function kmtoinches(km){
//     // 1km = 39370.0787 inches
//     return km * 39370.0787
// }
// function kmtofeet(km){
//     // 1km = 3280.8399 feet
//     return km * 3280.8399
// }
// function kmtocentimeter(km){
//     // 1km = 100000 cm
//     return km * 100000
// }
// function main(m,inches,feet,cm){
//     console.log(`${km} is equal to ${m}`)
//     console.log(`${km} is equal to ${inches}`)
//     console.log(`${km} is equal to ${feet}`)
//     console.log(`${km} is equal to ${cm}`)
// }
// var km = +prompt("Enter kilometer")
// var kmm = kmtometer(km)
// var kmi = kmtoinches(km)
// var kmf = kmtofeet(km)
// var kmc = kmtocentimeter(km)
// main(kmm,kmi,kmf,kmc)

// task:09

// function overtime(hour,currsalary){
    // var nonfrac = Math.floor(hour)
//     var overtime = 12
//     if(hour > 40){
//         var salary = (overtime * (nonfrac - 40)) + currsalary
//         console.log(salary)
//     }
//     else{
//         console.log(currsalary)
//     }
// }
// var hour = +prompt("Enter your hour")
// var currsalary = +prompt("enter your salary")
// overtime(hour,currsalary)

// task:10

// function cash(amount){
//     if(amount > 0 ){
//         var hund = Math.floor(amount / 100)
//         var bala = amount % 100
//         var fif = Math.floor(bala / 50)
//         var bala = amount % 50
//         var ten = Math.floor(bala / 10)
//         console.log(hund + " " + fif + " " + ten)
//     }
// }
// var amount = +prompt("Enter your amount")
// cash(amount)

