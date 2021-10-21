//Catalogo de productos
const productos = [
    {nombre: 'Gatabis', precio: 2 },
    {nombre: 'Libro para colorear', precio: 4},
    {nombre: 'Campera', precio: 8},
    {nombre: 'Collar', precio: 2},
    {nombre: 'Rascador reciclado', precio: 6},
    {nombre: 'Arena para gatos', precio: 8}
];

console.log(JSON.stringify(productos));

localStorage.setItem('producto', 'Libro para colorear');
localStorage.setItem('precio', 4);

let producto = localStorage.getItem('producto');
let precio = localStorage.getItem('precio');

console.log(producto, precio)

localStorage.setItem('productosList', JSON.stringify(productos));

const storedProductos = localStorage.getItem('productosList');
console.log(JSON.parse(storedProductos))
