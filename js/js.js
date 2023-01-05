function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 862.85;
    let euro = 910.08;
    let real = 157.45;
    let yen = 6.57;
    if (document.getElementById("dolar").checked) {
        resultado = valore / dolar;
        alert("El cambio de Pesos Chilenos a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("euro").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos Chilenos a Euros es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("real").checked) {
        resultado = valore / real;
        alert("El cambio de Pesos Chilenos a Reales es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("yen").checked) {
        resultado = valore / yen;
        alert("El cambio de Pesos Chilenos a Yenes es: $" + resultado.toFixed(2));
    }
    else { alert("Tiene que completar todos los requerimientos.") }
}