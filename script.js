"use strict"

// document.getElementById('textarea-field').contentEditable(false);

let one = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "1";
}
let two = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "2";
}
let three = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "3";
}
let four = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "4";
}
let five = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "5";
}
let six = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "6";
}
let seven = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "7";
}
let eight = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "8";
}
let nine = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "9";
}
let plus = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "+";
}
let minus = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "-";
}
let into = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "*";
}
let devide = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "/";
}
let dot = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + ".";
}
let zero = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "0";
}
let doublezero = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "00";
}
let persentage = () => {
    let text = document.getElementById('textarea-field').innerHTML;
    document.getElementById('textarea-field').innerHTML = text + "%";
}
let allClear = () => {
    document.getElementById('textarea-field').innerHTML = "";
}
let operation=()=>{
    let text =document.getElementById('textarea-field').innerHTML;
    document.getElementById("textarea-field").innerHTML=eval(text);

}
let removeOne=()=>{
    let text =document.getElementById('textarea-field').innerHTML;
    let finalString=document.getElementById('textarea-field').innerHTML=pop(text);
    document.getElementById("textarea-field").innerHTML=finalString;
}