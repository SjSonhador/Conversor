document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert("Digite um valor válido!");
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }

    document.getElementById("fahrenheit").value ="Seu valor em Fahrenheit é : " + parseFloat(fahrenheit).toFixed(2) + "(F°)";
    document.getElementById("celsius").value = "Seu valor em Celsius é : " + parseFloat(celsius).toFixed(2) + "(C°)";
}

function clearForm(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}