
function getPlus() {
    let inputnumber1= document.getElementById("a").value
    let inputnumber2= document.getElementById("b").value
    let number1= parseInt(inputnumber1)
    let number2=parseInt(inputnumber2)
    let Result= number1+number2;
    return document.write("Result Addition: "+Result)
}
function getMinus(){
    let inputnumber1= document.getElementById("a").value
    let inputnumber2= document.getElementById("b").value
    let number1= parseInt(inputnumber1)
    let number2=parseInt(inputnumber2)
    let Result= number1-number2;
    return document.write("Result Substraction: "+Result)
}
function getX() {
    let inputnumber1= document.getElementById("a").value
    let inputnumber2= document.getElementById("b").value
    let number1= parseInt(inputnumber1)
    let number2=parseInt(inputnumber2)
    let Result= number1*number2;
    return document.write("Result Multiplication: "+Result)
}
function getDivision(){
    let inputnumber1= document.getElementById("a").value
    let inputnumber2= document.getElementById("b").value
    let number1= parseInt(inputnumber1)
    let number2=parseInt(inputnumber2)
    let Result= number1/number2;
    return document.write("Result Division: "+Result)
}