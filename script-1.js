/*
alert("Write a javascript program of adding two numbers");
console.log("enter two numbers");
let a=+prompt("Enter first number");
let b=+prompt("enter second number");
 let c=a+b;
alert("sum of two numbers is" + c);
=======================================================================================================================
*/
/*
console.log("JavaScript program to calculate area and perimeter of the rectangle");
let l=+prompt("enter length of rectangle");
let b=+prompt("enter breadth of rectangle");
console.log("Length of the rectangle is : "+l);
console.log("Breadth of the rectangle is : "+b);
let a=l*b;
let p=(2*(l+b));
console.log("Area is : "+a+" Perimeter is : "+p);
=======================================================================================================================
*/
/*
console.log("JavaScript program to calculate payble amount by customer for burger and pizza");
let b=+prompt("enter number of burgers");
let p=+prompt("enter number of pizzas");
console.log("Number of burgers : "+b);
console.log("Number of pizzas : "+p);
let amB=+(45*b);
let amP=+(250*p);
let total=amP+amB;
console.log("Amount for burgers : "+amB+" Amount for pizzas : "+amP);
console.log("Total Amount Payble : "+total);
==========================================================================================================
*/
/*
document.write("JavaScript program to calculate area and circumference of circle");
const pi=3.14;
let r=+prompt("Enter radius of the circle");
let a=+pi*r*r;
let c=+2*pi*r;
console.log("Area is : "+a+"  Circumference is : "+c);
=========================================================================================================
*/
/*
document.write("JavaScript program to calculate total marks and percentage with name"+"<br>");
let name=prompt("Enter your name");
alert("Enter marks for each subject");
let h=+prompt("Marks in hindi");
let e=+prompt("Marks in english");
let m=+prompt("Marks in maths");
let s=+prompt("Marks in science");
let sa=+prompt("Marks in sanskrit");
document.write("<br>"+"Marks in Hindi : "+h);
document.write("<br>"+"Marks in English : "+e);
document.write("<br>"+"Marks in Maths : "+m);
document.write("<br>"+"Marks in Science : "+s);
document.write("<br>"+"Marks in Sanskrit : "+sa);
let total=+h+e+m+s+sa;
let p=((total*100)/500);
document.write("<br>"+"Total marks obtained by: "+name+" : "+total);
document.write("<br>"+"Percentage obtained by: "+name+" : "+p+"% " );
========================================================================================================
*/
/*
document.write("JavaScript program to convert celcius into fahrenheit"+"<br>");
let c=+prompt("Enter temperature in celcius");
let f=+((c*1.8)+32);
document.write("<br>"+"Temperature in celcius is : "+c+" *C");
document.write("<br>"+"<br>"+"Temperature in Fahrenheit is : "+f+" *F");
========================================================================================================
*/
/*
document.write("JavaScript program to calculate square root of a number"+"<br>");
let num=+prompt("Enter a number");
document.write("Number is : "+num);
let sqt=Math.sqrt(num);
document.write("<br>"+"Square root of : "+num+" is : "+sqt);
========================================================================================================
*/
/*
document.write("JavaScript program to calculate area of triangle when sides are given."+"<br>");
let s1=+prompt("enter side 1: ");
let s2=+prompt("enter side 2: ");
let s3=+prompt("enter side 3: ");
if((s1+s2)>s3&&(s2+s3)>s1&&(s1+s3)>s2)
{
    alert("Triangle is possible");
}
else
{
   alert("Triangle is not possible");
   document.write("<br>"+"Please enter valid set of sides");
   exit(0);
}
document.write("<br>"+"Sides are : "+s1+","+s2+","+s3);
let s=+(s1+s2+s3)/3;
let a=+Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
document.write("<br>"+"Area of triangle is : "+a);
=========================================================================================================
*/
/*
document.write("JavaScript program to swap the two numbers given by the user"+"<br><br>");
let a=+prompt("Enter a number");
let b=+prompt("Enter another number");
document.write("Before swap : "+"<br><br>"+"a = "+a+","+"  b = "+b+"<br><br>");
function swap(a,b)
{
   let c;
   c=a;
   a=b;
   b=c;
   document.write("After Swap : "+"<br><br>"+"a = "+a+","+"  b = "+b);
}
swap(a,b);
========================================================================================================
*/
document.write("JavaScript program to convert kilometeres in miles"+"<br><br>");
const m=0.62137;
let k=+prompt("Enter distance in km");
document.write("Distance in kilometer is : "+k+"km"+"<br><br>");
let mi=k*m;
document.write("Distance in mile is : "+mi+"miles");

