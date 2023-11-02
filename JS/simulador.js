console.log("conectado")

function interesCompuesto() {
    let resultado = 0;
    let cantidad = parseFloat(prompt("Ingresa la cantidad para el calculo"));
    let años = parseFloat(prompt("Años"));
    let interes = parseFloat(prompt("Porcentaje de interes"));
    
    for (let i = 0; i < años; i++){
    resultado = cantidad * (interes/100) + cantidad; 
    cantidad = resultado;
    } 

    console.log(resultado);
    alert("El resuldado del interes compuesto es " + resultado);
}

interesCompuesto();


