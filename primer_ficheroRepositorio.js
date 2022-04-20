function Ej6(){
    let n1 = parseInt(document.getElementById("n1ej6").value);
    let n2 = parseInt(document.getElementById("n2ej6").value);
    if(n1 > n2){
        let suma = n1 + n2;
        window.alert("La suma es: " + suma);
        let resta = n1 - n2;
        window.alert("La diferencia es: " + resta);
    }
    if(n2 > n1){
        let multiplicacion = n1 * n2;
        window.alert("El producto es: " + multiplicacion);
        let division = n1 / n2;
        window.alert("La division es: " + division);
    }
    if(n1 == n2){
        window.alert(n1 + " y " + n2 + " son iguales");
    }
}