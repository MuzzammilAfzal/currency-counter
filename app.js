import {
    countryList,
}from './country.js';
const arrCountryList=Object.entries(countryList);


for (let index = 0; index < arrCountryList.length; index++) {
    let option=document.createElement("option");
    let node=document.createTextNode(arrCountryList[index][0]);
    option.appendChild(node);
    let element=document.getElementById("dropDownFrom");
    element.appendChild(option);
    option.value=arrCountryList[index][1];
    console.log(option);
}
for (let index = 0; index < arrCountryList.length; index++) {
    let option=document.createElement("option");
    let node=document.createTextNode(arrCountryList[index][0]);
    option.appendChild(node);
    let element=document.getElementById("dropDownTo");
    element.appendChild(option);
    option.value=arrCountryList[index][1];
}

document.getElementById("dropDownFrom").onchange= function flagChange() {
    let flagValue=document.getElementById("dropDownFrom").value;
    let flagSourceFrom="https://flagsapi.com/"+flagValue+"/flat/64.png";
    let flagFrom=document.getElementById("flagFrom").setAttribute("src",flagSourceFrom);
}
document.getElementById("dropDownTo").onchange= function flagChange() {
    let flagValue=document.getElementById("dropDownTo").value;
    let flagSourceFrom="https://flagsapi.com/"+flagValue+"/flat/64.png";
    let flagFrom=document.getElementById("flagTo").setAttribute("src",flagSourceFrom);
}




 
