const inputValue = document.getElementById('header-input');
const convertBtn = document.getElementById('header-button');
const resultBox = document.getElementsByClassName('main-data-text');
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
let resultFirst = [];
let resultSecond = [];
const names1 = ['meters', 'liters', 'kilograms'];
const names2 = ['feet', 'gallons', 'pounds'];
convertBtn.addEventListener('click', () => {
    convert(inputValue.value, meterToFeet);
    convert(inputValue.value, literToGallon);
    convert(inputValue.value, kilogramToPound);
    render(resultFirst, resultSecond);
})

function convert(number, unit) {
    let sum1 = (number * unit).toFixed(3);
    let sum2 = (number / unit).toFixed(3);
    resultFirst.push(sum1);
    resultSecond.push(sum2);
}
console.log(resultFirst, resultSecond);
function render(result1, result2) {
    for(let i = 0; i < resultBox.length; i++) {
        resultBox[i].innerHTML = `${inputValue.value} ${names1[i]} = ${result1[i]} ${names2[i]} | ${inputValue.value} ${names2[i]} = ${result2[i]} ${names1[i]}`;
    }
    resultFirst = [];
    resultSecond = [];
}