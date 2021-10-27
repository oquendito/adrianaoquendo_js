//Catalogo de productos
const imagenes = [
    {
        src: 'https://http2.mlstatic.com/D_NQ_NP_779883-MLA46442566950_062021-O.webp',
        alt: 'FeliFelinos',
        nombre: 'Libro para colorear',
        precio: 4
    },
    {
        src: 'img copy/products/catnip.jpeg',
        alt: 'FeliFelinos',
        nombre: 'Gatabis',
        precio: 2
    },
    {
        src: 'https://www.dhresource.com/0x0/f2/albu/g10/M01/08/51/rBVaVl5WP3iAeL5UAAbop7Ww2BA811.jpg/pet-cat-clothes-funny-dinosaur-costumes-coat.jpg',
        alt: 'FeliFelinos',
        nombre: 'Campera polar',
        precio: 8
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXVUTi05anl1mHPkl_ry7Afm1iRwCjYpu1g&usqp=CAU',
        alt: 'FeliFelinos',
        nombre: 'Collar felino',
        precio: 2
        },
        {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1hwbwWhEuImfUNiRcYWGBB8-2AQcHf_v3lzyd2RF6um-KOzvsw6VI68sx64Xu_ifZWs&usqp=CAU',
        alt: 'FeliFelinos',
        nombre: 'Rascador Reciclado',
        precio: 6
        },
        {
        src: 'data:image/jpeg;base64,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',
        alt: 'FeliFelinos',
        nombre: 'Arena para gatos',
        precio: 8
        },
    ];
    
    function renderizarGaleria(imagenes) {
    let html = '';
    
    imagenes.forEach(function(imagen){
        html += `
        <div class="galeria-item">
            <img src="${imagen.src}" alt="${imagen.alt}" width="200px" />
            <h3>${imagen.nombre}</h3>
            <p>USD${imagen.precio}</p>
        </div>
        `;
    });
    
    $('#galeria').html(html);
    }
    
    $(function() {
    renderizarGaleria(imagenes);
    });

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
