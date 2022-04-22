// By Daniel Guerrero Reina
// He cambiado todo el ejercicio por una simple función que sume ambas variables
// He modificado para que en vez de que sea una suma sea una resta
function Ej6(){
    let n1 = parseInt(document.getElementById("n1ej6").value);
    let n2 = parseInt(document.getElementById("n2ej6").value);
    
    let resta = n1 + n2;
    window.alert("La resta es: " + resta);
}