
// let persona = {
//   nombre:"pablo",
//   apellido:"cafa",
//   edad: 34,
//   gustos:"videojuegos",
  
// }

//  function guardarLocalStorage () {
 
// };

//  let novienealcaso = "roli";

//  localStorage.setItem( "nombre", JSON.stringify(persona));
  
//  guardarLocalStorage()

const data = [
{
  id:1,
name:"pablo",
apellido:"caffaratti",
edad:34
 },
 {id:2,
  name:"jorge",
  apellido:"capetch",
  edad:15
},
  {id:1,
    name:"justo",
    apellido:"faratti",
    edad:19},
    {
      id:4,
name:"cloud",
apellido:"strife",
edad:27
    },
];


// estamos repasando los metodos strings

const  documentos = [
    
    {
     dni: 33797304
    }

]
const numeros = [1,2,3,4,5,6,7,8] //array
const miCasa =  "mi casa es bastante grande" //string
const paraLaTrim = "    hola mundo     " 
const oracion = "aca estabamos tomando una cerveza pero luego vino mi padre y debimos comprar otra mas lugo de eso se acerco mi padre y me dijo que dejaramos de tomar"
const nombres =["jorge", "jose", "bautista", "carlos", "eduardo", "alejandro"]
const numerosYStrings = ["perro", 3, "gato", 15, "pablo", 34, "jose"] ///array
const edades= [18,19,20,21,22,23,24,25,26]//array
const animales = ["perro", "gato", "vivora", "caballo", "pajaro"]//array
const datos =[{id:1,
nombre:"pablo",
apellido:"caffaratti",
edad: 34,
gustos:"videojuegos"},
{id:2,
  nombre:"jose",
  apellido:"calisto",
  edad: 33,
  gustos:"peliculas"}]//objetos dentro de un array



const cambiarTamaño = miCasa.replace("grande", "chica")
const modOracion = oracion.replaceAll("padre", "amigo")
const devolverPosicion = oracion.indexOf("y")
const divididos = oracion.split(" ")
const repetir = miCasa.repeat(3)
const todoJunto = paraLaTrim.trim().repeat(3)
const funchart = todoJunto.charAt(10)
const concatenando = todoJunto.concat(paraLaTrim.trim())


console.log(modOracion.length)
console.log("-----------------------------")
console.log(cambiarTamaño)
console.log("-----------------------")
console.log(modOracion)
console.log(data.indexOf("p"))
console.log(paraLaTrim.trim())
console.log(divididos)
console.log(typeof oracion == "string")
console.log(typeof numeros == "number")
console.log(typeof miCasa == "number" )


// ver video de nucba clase 2.7 minuto 20
//video 1 de coderhouse minuto 35
console.log('----------------');    
console.log(repetir)
// for(let index = 0 ; index < documentos.length; index++){
//     const element= dni[index];
//     documentos.push(element)
// }
// console.log(numeros)
console.log("-------------");

console.log(funchart)

console.log("--------------");
console.log(concatenando);

console.log(concatenando.startsWith("Hola"));
console.log(oracion.endsWith("tomar"));
console.log("---------------------------")

console.log(oracion.includes("cerveza"));
console.log(divididos.includes("cerveza"));// revisa alguna palabra o letra qeu incluya un string
console.log(oracion.slice(0, 22)); //corta la cadena de texto y toma dos parametros como referencia




//metodos array
console.log("----------");

console.log(Array.isArray(numerosYStrings));

console.log(numerosYStrings[3])
console.log(numerosYStrings[0])

console.log(numerosYStrings.length)

console.log("------------------------")
//indexOf---------

console.log(numeros.indexOf(4)); 

console.log("-----------");

//tostring---------

console.log(numerosYStrings.toString());
 
console.log(numerosYStrings.concat(oracion));
console.log("-----------------");

// let consultarEdad = prompt("ingrese su nombre") 

// let preguntarEdad =()=>{

//  if(edades.indexOf(consultarEdad))
//   alert(`hola eres bienvenido tienes ${preguntarEdad}`)

// }
let nuevoArray = [...numeros, ...edades];

numerosYStrings.push("juancarlos")

console.log(numerosYStrings)

console.log("------------------");

edades.push({name: "lousi"}) ///podes agregar strings numeros y objetos

console.log(edades);

console.log("-----------------");
//unshift agrega al principi del array
edades.unshift({edad: 25})
edades.unshift({DNI: 337979304})

//pop agrega al final de un array
let quitObjet = edades.pop()
console.log("---------------------");
console.log(quitObjet);
console.log("-----------------");
console.log(edades);

//shift saca los elementos del principio del array

let quitObjStart = edades.shift()

console.log(quitObjStart);

console.log(edades);

//join te separa los arrays con el limbolo que le indiques

console.log("---------join ------");
console.log(numerosYStrings.join(" _ "));

//reverse da vuelta
console.log("---------------reverse ------------");
console.log(edades.reverse());

 //slice corta desde la direccion qeu le indiques

 console.log("--------slice -------");

 let cortarEdades = animales.slice(1, 4)
 let cortarReverso = animales.slice(-3)
 console.log(cortarEdades);
 console.log(cortarReverso);

 //ponemos mas animales


 console.log("---------agregamos animales----y edades------");

 let masAnimales = animales.push("jote", "chancho", "mula", "chacal")
 console.log(animales);
console.log("------");
console.log(edades.reverse());
let masEdades = edades.unshift(1,2,3,4,5,6,7)
 
 console.log(edades);
 //// metodos avanzados 

 //forHeach significa por cada 
 let nombreDeCadaUno = nombres.map((nombre) =>{
  return nombre 
 })
 
 let desglosar = edades.forEach((edad, index)=>{
  console.log(`${nombreDeCadaUno} tiene ${index} pesos y su edad  es de es ${edad}`)
 })

 //map hace lo ismo que el for Heach pero devulelve un array

 let desglosarYretornar = edades.map((edad, index)=>{
 return  "tiene" + " " + edad + " " + "gallinas" + index

})
console.log(`aqui ${nombreDeCadaUno} ${desglosarYretornar}`) 

let afortunados = nombres.map((nombre, index) =>{
  if(index %2 === 0){
  return "hoy dia  " + nombre + " es el mas afortunado"
}
return  nombre + " fue desafortunado " + " la proxima sera mejor"
})

console.log(afortunados);
console.log("-----------------filter---------");

let numerosPares = edades.filter((edad)=>{
  return edad % 2 === 0;
} )

console.log(numerosPares);


//filter  este es muy importante ver el video 8 en la hora 1.33 solamete te filtra segun la referencia qeu le pases en el return

let suertudos = afortunados.filter((nombre) =>{ 
  return nombre.includes("mas afortunado")  
})

let desafortunados = afortunados.filter((nombre)=> {
  return nombre.includes("fue desafortunado")
})
console.log(desafortunados );

// find itera un array y devuelve el valor del elemento que busquemos y si no se encuetra devuelve undefined devuelve falsy o truty

let Unfind = numeros.find((numero) =>{
  return numero %2 === 0 
})
console.log(Unfind);

let encontrN5 = numeros.find((numero) => {
  return numero == 5
  
})
console.log(encontrN5);

console.log("----------------- every -------------");
//every itera un array  y pregunta si todos los elementos son verdaderos para devolver la condicion y devuelve un booleano 
let haciandoElEvery = numeros.every((numero) =>{
  return numero > 0
})
console.log(haciandoElEvery);

//ver video 9 en minuto 8:46