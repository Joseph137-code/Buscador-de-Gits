//import { heroes } from './base/Index'
/*console.log(heroes)

const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if(heroe.id === id) {
      return true;
    } else {
      return false
    }
  })
}

const getHeroeById = (id) => heroes.find((heroe) => (heroe.id === id));

const getHeroeByOwer = (owner) => heroes.filter((heroe) => (heroe.owner === owner));

console.log(getHeroeById(2))
console.log(getHeroeByOwer("DC"))

//Promesas

const promesas = new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(2)
      resolve(heroe);
    }, 2000);
});

promesas.then((heroe) => {
  console.log(heroe)
})

const heroeById = (id) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const heroe = getHeroeById(id)
      if (heroe){
        resolve(heroe);
      } else {
        reject ("No se Pudo Encontrar heroe")
      }
      
  }, 2000);

  });
}

heroeById(1)
.then(heroe => console.log("heroe", heroe))
.catch(error => console.warn(error))
//arreglos
 const arreglo = [1, 2, 3,4 ]
 let arreglo2 = [ ...arreglo, 5]

 const arrgelo3 = arreglo2.map(function(numero){
   return numero * 2
 })

 console.log(arreglo)
 console.log(arreglo2)
 console.log(arrgelo3)

//Funciones

const saludar = function(nombre){
  return `hola, ${nombre}`
}

const saludar2 = (nombre) => `hola, ${nombre}`

console.log(saludar("jose"))
console.log(saludar2("Sierra"))

function getUsuarioActivo (nombre){
  return {
    uid: "123456",
    username: nombre
  }
}

const getUsuarioActivo2 = nombre => (
  {
    uid: "123456",
    username: nombre
  }
)

const usuarioActivo = getUsuarioActivo("jose");
const usuarioActivo2 = getUsuarioActivo2("Sandra");
console.log(usuarioActivo)
console.log(usuarioActivo2)

//Desestructuracion arreglos

const personajes = [ "vegeta", "goku" , "trunks"]
const [, , p3]= personajes
console.log(p3)

const retornaArreglo = () => {
  return ["ABC", 123]
}

const [letras, numeros]= retornaArreglo();
console.log(letras, numeros);


const tarea = (valor) =>{
  return [valor, () => {console.log("Hola Mundo")} ]
}

const [nombre, setNombre]= tarea("Goku");
console.log(nombre)
setNombre()
bZ1gyByJi04EG4ox8SSzTtImWfuIFvbz
*/