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


// chapter:06

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
