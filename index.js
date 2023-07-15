
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got Clicked!");  //Anonymous function used in event listener//
    });

}







// function add(num1, num2) {
//     return (num1 + num2);}
// undefined
// function multiply(num1, num2) {
//     return (num1 * num2);}
// undefined
// function calculator (num1, num2, operator){
//     return operator(num1, num2);}
// undefined
// calculator(2,3,multiply);
// function add(num1, num2) {
//     return (num1 + num2);}
// undefined
// function multiply(num1, num2) {
//     return (num1 * num2);}
// undefined
// function calculator (num1, num2, operator){
//     return operator(num1, num2);}
// undefined
// calculator(2,3,multiply);
// 6