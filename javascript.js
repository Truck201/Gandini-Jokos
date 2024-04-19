// Act 1
let num1 = 5
let num2 = 10

suma = num1 + num2
//console.log(suma)


// Act 2 
let num3 = 15

if (num1>num2 & num1>num3) {
        // console.log("El número mas alto es " + num1)
} else {
    if (num2>num1 & num2>num3) {
        // console.log("El número más alto es " + num2)
    } else {
        if(num3>num1 & num3>num2) {
        // console.log("El número mas alto es " + num3)
        }
    }
}

if(num1<num2 & num1<num3) {
        // console.log("El número mas bajo es " + num1)
} else {
    if (num2<num1 & num2<num3) {
        // console.log("El número más bajo es " + num2)
    } else {
        if(num3<num1 & num3<num2) {
        // console.log("El número mas alto es " + num3)
        }
    }
}


// Act 3
let dato = "PALABRA"
// console.log(dato.length)
// console.log("Palabra tiene " + (dato.length) + " " + "letras" )


// Act 4
let num5 = 2%2
if (num5 === 0) {
   // console.log("Es par")
} else {
   // console.log("Es impar")
}


// Act 5
const names = "Jeffrey"
for (let i = 0; i < 6; i ++) {
   // console.log(i, names)
}


// Act 6
let numb = 15
let numb2 = 10
if (numb < numb2) {
    for (let i = numb++; i < numb2; i++) {
      //  console.log(i)
    }
}   else {
    for (let i = numb--; i > numb2; i--){
      //  console.log(i)
    }
}


// Act 7
let numb3 = 4
let numb4 = 28
// console.log("Múltiplos de 3 entre el " + numb3 + " y el valor " + numb4)
if (numb3 < numb4) {
    //  for (i = numb3; i <= numb4; i++) {
       // if (i % 3 === 0)
       // console.log(i)
   // }
} else {
    //  for (i = numb3; i >= numb4; i--) {
        //  if (i % 3 === 0)
        //  console.log(i)
    //}
}


// Act 8
for (let i = 0; i < 100; i ++) {
    if (i % 2 === 0 & i % 5 === 0) {
    //    console.log(i)
    }
}


// Act 9
let array = [12,15,10]
suma = array[0] + array [1] + array[2]
// console.log(suma)


// WOOOW !! ACT 10
const array2 = [5,10,15,20,2,8]
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
       // console.log(array2[i])
    }
}


// ACT 11 Very Hardinero
const palab = "MAMBANEGRA"

let conteo = {}; // Almacén de datos; array

for (let i = 0; i < palab.length; i++) {
    let letra = palab[i]
    if (conteo[letra]) {
        conteo[letra]++
    } else {
        conteo[letra] = 1
    }
}

for (let letra in conteo) {
    // console.log(letra,"=",conteo[letra])
}


// Act 12
let list = [
    {Nombre: "Juan", Sexo:"Masculino", Edad: 27},
    {Nombre: "Ester", Sexo:"Femenino", Edad: 97},
    {Nombre: "Mengecho", Sexo: "Masculino", Edad: 34},
    {Nombre: "Francisco", Sexo: "Masculino", Edad: 7},
    {Nombre: "Marta", Sexo: "Femenino", Edad: 30},
    {Nombre: "Ana", Sexo: "Femenino", Edad: 20}
]

acM  = []
acF = []

let min = Infinity // Hom
let min2 = Infinity  // Fem

let max = 0 // Hom
let max2 = 0 // Fem

let acE = 0

let nMM = 0 // Nombre Masculino Mayor.
let nMm = 0 // ""   ""  menor.
let nFM = 0 // Nombre Femenino Mayor.
let nFm = 0 // ""   ""  menor.

for (let i = 0; i < list.length; i++) {
    if (list[i].Sexo === "Masculino") {
        acM = list[i].Edad
        acE = acE + list[i].Edad
            if (list[i].Edad < min){
                min = list[i].Edad
            }
            if (list[i].Edad > max) {
                max = list[i].Edad
            } 
    } else {
        if (list[i].Sexo === "Femenino") {
            acF.push(list[i].Edad)
            acE = acE + list[i].Edad
            if (list[i].Edad < min2) {
                min2 = list[i].Edad 
            }
            if (list[i].Edad > max2) {
                max2 = list[i].Edad
            } 
        }
    }
}

for (let i = 0; i < list.length; i++) {
    if (list[i].Edad === max2) {
        nFM = list[i].Nombre
    }
}

for (let i = 0; i < list.length; i++) {
    if (list[i].Edad === min2) {
        nFm = list[i].Nombre
    }
}

for (let i = 0; i < list.length; i++) {
    if (list[i].Edad === max) {
        nMM = list[i].Nombre
    }
}

for (let i = 0; i < list.length; i++){
    if (list[i].Edad === min) {
        nMm = list[i].Nombre
    }
}

let Prom = acE / list.length

console.log("Promedio de la edad de todos en la lista es de " + Math.round(Prom) + " años." )

console.log("Edad Mayor de las Hombres es de " + max + " años." + " Su nombre es " + nMM + "." )
console.log("Edad menor de los Hombres es de " + min + " años." + " Su nombre es " + nMm + ".")

console.log("Edad Mayor de las Mujeres es de " + max2 + " años." + " Su nombre es " + nFM + "." )
console.log("Edad menor de los Mujeres es de " + min2 + " años." + " Su nombre es " + nFm + ".")













