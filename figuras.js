// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado  + " cm");

const perimetroCuadrado = ladoCuadrado*4;

console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = baseTriangulo * alturaTriangulo / 2;




console.log( 
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + " cm, "
    + ladoTriangulo2 
    + " cm y " + baseTriangulo 
    + " cm"
    );

console.log("La altura del triángulo mide : " + alturaTriangulo + " cm");
console.log("El perímetro del triángulo es : " + perimetroTriangulo + " cm");
console.log("El área del triángulo es : " + areaTriangulo + " cm^2");

console.groupEnd();

// Código Círculo

console.group("Círculo");

// Radio
const radioCirculo = 4;
//Diámetro
 const diametroCirculo = 2*radioCirculo;
// PI

const PI = Math.PI;

// Circunferencia

const perimetroCircunferencia = 2 * PI * radioCirculo;

// Área 

const areaCirculo = PI * radioCirculo * radioCirculo;

console.log("El radio del círculo es: " + radioCirculo + " cm");
console.log("El diámetro del circulo es: " + diametroCirculo + " cm");
console.log("El valor de PI es : " + PI);
console.log("El perímetro de la circunferencia es :" + perimetroCircunferencia  + " cm")
console.log("El áre del círculo es: " + areaCirculo + " cm^2")

console.groupEnd();