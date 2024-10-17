//Página web: Fybeca.com

//Objetovs
const producto1 = {
  nombre: "Azitromicina",
  precio: 1.2,
  categoria: "Medicamento",
  stock: 0,
} 
const producto2 = {
  nombre: "Cepillo de dientes",
  precio: 5.0,
  categoria: "Higiene",
  stock: 20,
} 
const producto3 = {
  nombre: "Mascarilla",
  precio: 1.2,
  categoria: "Pandemia",
  stock: 10,
} 

//Arreglo de objetos
const totalProductos = [producto1, producto2, producto3] 
console.log(totalProductos) 

//Nueuvo arreglo de los nombres de productos
const nombresProductos = totalProductos.map((p) => p.nombre) 
console.log(nombresProductos) 

//Nuevo arreglo con los productos con stock distinto de 0
const stockProductos = totalProductos.filter((p) => p.stock) 
console.log(stockProductos) 

//Nuevo arreglo con los precios de los productos
const preciosProductos = totalProductos.map((producto) => producto.precio) 
console.log(preciosProductos) 

//Arreglos

const arrayProductos = [
  {
    nombre: "Ibuprofeno",
    precio: 0.25,
    categoria: "Medicamento",
    stock: 0,
  },
  {
    nombre: "Cepillo dental",
    precio: 1.35,
    categoria: "Higiene",
    stock: 10,
  },
  {
    nombre: "Bloqueador Solar",
    precio: 20,
    categoria: "Cuidado Personal",
    stock: 5,
  },
  {
    nombre: "Tinte para el cabello",
    precio: 10.0,
    categoria: "Belleza",
    stock: 25,
  },
] 

//Nuevo arreglo con los nombres de los productos
const nombreProductos = arrayProductos.map(p => p.nombre) 
console.log(nombreProductos)

const preciosDisponibles = arrayProductos.map(p => {return p.stock !== 0 ? p.precio : "No disponible"})
console.log(preciosDisponibles)
 
//Ingresar un nuevo producto al arreglo (con push y unshift) y validarlo
arrayProductos.push({
  nombre: "Crema Hidratante",
  precio: 12.84,
  categoria: "Cuidado Personal",
  stock: 15
}) 

const nuevoProducto = {
  nombre: "Jabon",
  precio: 2.25,
  categoria: "Higiene Personal",
  stock: 20
} 

nuevoProducto.stock > 0 && !Object.values(nuevoProducto).includes("") ? arrayProductos.unshift(nuevoProducto) : ""
console.log(arrayProductos) 

//Operador Spread
const allProductos = [...arrayProductos,...totalProductos]
console.log(allProductos)

//Operador Rest
const [productoUno,productoDos,productoTres, ...productoCuatro] = arrayProductos
console.log(productoCuatro)