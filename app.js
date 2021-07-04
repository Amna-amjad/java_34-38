// chapter 35-38, task 1
// var d = new Date();
// function myFunction() {
// }
//     d.getDate();
//     document.write(d) ;

// chapter 35-38, task 2
// var a= prompt("Enter your first name ");
// var b= prompt("Enter your last name");
// function first (a,b) {
//     return a+ " " + b
// }
// alert("Hello " +  first(a, b))

// chapter 35-38, task 3
// var a= +prompt("Enter first number");
// var b= +prompt("Enter second number");
// function first (a,b) {
//     return a+b
// }
// alert(first(a,b))

// chapter 35-38, task 4
// var val1= +prompt("Enter first value");
// var ope= prompt("Enter operand");
// var val2= +prompt("Enter second value");
// var res;
// function calc (val1 , ope, val2, res) {
//     if(ope === "+") {
//      return res = val1 + val2
//     }
//     else if (ope === "-") {
//         return res =  val1 - val2
//     }
//     else if (ope === "*") {
//         return res =  val1 * val2
//     } 
//     else if (ope === "/") {
//         return res =  val1 / val2
//     }
//     else {
//         return "Incorrect operator!"
//     }
// }
// document.write(calc(val1, ope, val2, res))

// chapter 35-38, task 5
// var a=+prompt("Enter a number"), b;
// function myFunction(){
//     return(b= Math.pow(a,2))
// }
// alert(myFunction(b))

// chapter 35-38, task 6
// var n= prompt("Enter a number")
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
//   alert( factorial(n) );

// chapter 35-38, task 7
// var num1= +prompt("Enter first number");
// var num2= +prompt("Enter second number")
// function printRange(num1, num2) {    
//     var text = "";
//         for (var i = num1; i <= num2; i++) {
//             text += i + ', ';
//         }
//     return text;
//     var result = text;
// }
// document.write( printRange(num1, num2)) ;

// chapter 35-38, task 8
// var base = +prompt("Enter base of a triangle");
// var perpendicular = +prompt("Enter perpendicular of a triangle");
// var h=0;
// function calculateHypotenuse(h) {
//     function calculateSquare(base, perpendicular) {
//     var a = Math.pow(base, 2);
//     var b = Math.pow(perpendicular, 2);
//      return a + b;
//     }
//        return (h= Math.sqrt(calculateSquare(base, perpendicular)));
//     }
//     alert(calculateHypotenuse(h));

// chapter 35-38, task 9
// var area;
// var width, height;
// function Area (width, height) {
//     var area=width * height;
//     return area;
// }
// var res=Area(14,2);
// document.write("Width: 14 " + "<br>");
// document.write("Height: 2 "+ "<br>");
// document.write("The area of rectangle is: " + res)

// chapter 35-38, task 10
// var word= prompt("Enter your word") , check= "";
// for(var i= word.length - 1; i>=0; i--) {
// check += word[i]
// }
// if(check === word) {
//     alert(word + " is palindrome word")
// }
// else {
//     alert(word + " is not a palindrome word")
// }

// chapter 35-38, task 11
// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
//   document.write("EXAMPLE STRING: the quick brown fox" + "<br>");
//   document.write("OUTPUT: " + titleCase("the quick brown fox"))

// chapter 35-38, task 12
// function longestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var res = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(res.length < array1[x].length)
//     {
//     res = array1[x];
//     } 
//   }
//   return res;
// }
// document.write("EXAMPLE STRING: Web Development Tutorial" + "<br>")
// document.write("OUPUT: " + longestWord("Web Development Tutorial"));

// chapter 35-38, task 13
// string = 'JSResources.com';
// function myFunction(string, letter){
//     return string.split(letter).length - 1;
// }
// document.write("EXAMPLE STRING: " + string + "<br>");
// document.write("OUTPUT: " + (myFunction(string, 'o')));

// chapter 35-38, task 14
// function calcCircumference(){
//     var radius = +prompt("Enter radius of a circle");
//     document.write("The circumference of the circle is " + (2 * radius * Math.PI) +"<br>" );
// }
// calcCircumference();
// function calArea(){
//     var radius = +prompt("Enter radius of a circle");
//     document.write("The area of the circle is " + (radius * radius * Math.PI) );
// }
// calArea();