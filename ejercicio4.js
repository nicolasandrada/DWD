/**
 * 
 * Calcular el area en base al tipo de forma 
 * RECTANGULO = LADO A * LADO B
 * TRIANGULO = (LADO A * LADO B) / 2
 */
function calcularArea(lado_a, lado_b, tipo){
    
    let resultado = lado_a * lado_b

    return resultado
}


console.log( calcularArea(4,5, "Triangulo") )
console.log( calcularArea(4,5, "Rectangulo") )