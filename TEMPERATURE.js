const temperature = document.getElementById('temperature');
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const result = document.getElementById('result');
let temp;


function convertTemperature(){
    if(fahrenheit.checked){
        temp = Number(temperature.value);
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + '°F';
    }else if(celsius.checked){
        temp = Number(temperature.value);
        temp = (temp -32)*(5/9);
        result.textContent = temp.toFixed(1) + '°C';
    }
    else{
        result.textContent = 'select a unit';
    }
}
