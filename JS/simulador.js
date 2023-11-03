function interesCompuesto() {
    let resultado = 0;

    let cantidad = parseFloat(prompt("Ingresa la cantidad para el calculo"));
    if ((cantidad === null) || (cantidad === 0) || (cantidad <= 0)) {
        alert("Ingresa una cantidad mayor a 0");
        throw new Error("Ingresa una cantidad mayor a 0");
    }

    let años = parseFloat(prompt("Años"));
    if (años === null) {
        alert("Ingresa un numero de años");
        throw new Error("Ingresa un numero de años");
    }
    else if (años === 0) {
        alert("No puede ser 0 años");
        throw new Error("No puede ser 0 años");
    }
    let interes = parseFloat(prompt("Porcentaje de interes"));
    if (interes === null){
        alert("Ingresa un porcentraje de interes");
        throw new Error("Ingresa un porcentraje de interes");
    }

    for (let i = 0; i < años; i++){
    resultado = cantidad * (interes/100) + cantidad; 
    cantidad = resultado;
    } 

    console.log(resultado);
    alert("El resuldado del interes compuesto es " + resultado);
}

interesCompuesto();




