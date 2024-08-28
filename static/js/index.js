const body = document.querySelector('body');
body.classList = 'bg-dark'

const titulo = document.querySelector('title');
titulo.textContent = 'Fruit Store'

const global = document.querySelector('#global');

const tituloImg = document.createElement('header');
tituloImg.classList = 'card-title text-center text-light bg-dark display-3'
tituloImg.textContent = 'Fruit Store'
global.appendChild(tituloImg);

const navBar = document.createElement('nav');
navBar.classList = 'navbar text-bg-warning bg-gradient'
global.appendChild(navBar);

const divNavBar = document.createElement('div');
divNavBar.classList = 'container-fluid'
navBar.appendChild(divNavBar);

const navegacion = [
    { nombr :'Fruteria',    ir : '/index.html' }, 
    { nombr :'Ver Carrito', ir : '../pages/carrito.html'},
    { nombr :'Pagar',       ir : '../pages/pagar.html'} 
]
navegacion.forEach(function(enla){
    let enlace = document.createElement('a');
    enlace.classList = 'navbar-brand';
    enlace.href = enla.ir;
    let h3Enlace = document.createElement('h3');
    h3Enlace.classList ='text-dark mx-5 mb-0';
    h3Enlace.textContent = enla.nombr;
    enlace.appendChild(h3Enlace);
    divNavBar.appendChild(enlace);
})

const fondoPinias = document.createElement('div');
fondoPinias.classList = 'fondo  mb-5'
global.appendChild(fondoPinias);

const divContainer = document.createElement('div');
divContainer.classList = 'container col-9 mb-5'
global.appendChild(divContainer);

const divFrutas = document.createElement('div');
divFrutas.classList = 'row'
divContainer.appendChild(divFrutas);

const productosFruta = [
    { id: 1,  nombre : 'Naranja',   precio :  2000,   imagen : 'f-1.jpg' },
    { id: 2,  nombre : 'Arándanos', precio :  12000,  imagen : 'f-2.jpg' },
    { id: 3,  nombre : 'Banana',    precio :  3500,   imagen : 'f-3.jpg' },
    { id: 4,  nombre : 'Manzana',   precio :  5500,   imagen : 'f-4.jpg' },
    { id: 5,  nombre : 'Mango',     precio :  3000,   imagen : 'f-5.jpg' },
    { id: 6,  nombre : 'Frutilla',  precio :  6000,   imagen : 'f-6.jpg' },
    { id: 7,  nombre : 'Piña',      precio :  5000,   imagen : 'f-7.jpg' },
    { id: 8,  nombre : 'Pera',      precio :  8500,  imagen : 'f-8.jpg' },
    { id: 9,  nombre : 'kiwi',      precio :  875,    imagen : 'f-9.jpg' },
    { id: 10, nombre : 'Mandarina', precio :  1000,   imagen : 'f-10.jpg' },
    { id: 11, nombre : 'Durazno',   precio :  5500,   imagen : 'f-11.jpg' },
    { id: 12, nombre : 'Melon',     precio :  4500,   imagen : 'f-12.jpg' },
    { id: 13, nombre : 'Papaya',    precio :  3500,   imagen : 'f-13.jpg' },
]

let carritoCompras = [];

for ( let i = 0; i < productosFruta.length; i++){
    
    const divFruta = document.createElement('div');
    divFruta.classList = 'col mt-5'
    divFrutas.appendChild(divFruta);

    const divCard = document.createElement('div');
    divCard.classList = 'card'
    divCard.style = 'width: 18rem'
    divFruta.appendChild(divCard);
    

    const img = document.createElement('img');
    img.classList = 'p-1'
    img.src = `./static/img/${productosFruta[i].imagen}`;
    divCard.appendChild(img);
    img.onmouseenter

    const divCardBody = document.createElement('div');
    divCardBody.classList = 'card-body';
    divCard.appendChild(divCardBody);

    const nombreFruta = document.createElement('h3');
    nombreFruta.classList = 'card-title m-0';
    nombreFruta.textContent = `${productosFruta[i].nombre} = $${productosFruta[i].precio}`;
    divCardBody.appendChild(nombreFruta);

    const button = document.createElement('button');
    button.classList = 'btn btn-warning btn-sm mt-2';
    button.textContent = 'Añadir al carrito'
    divCardBody.appendChild(button);
    button.addEventListener('mouseenter',() => {
        button.classList = 'btn btn-light m-0 mt-2';
    })
    button.addEventListener('mouseout',() => {
        button.classList = 'btn btn-warning btn-sm m-0 mt-2';
    })
    button.addEventListener('click', () => {
        agregar(productosFruta[i]);
        Toastify({
            text: `Se agrego ${productosFruta[i].nombre}`,
            className: "info",
            style: {
              background: "linear-gradient(to right, #96c93d, #96c93d)",
            }
        }).showToast();
    })
// `Se agrego ${productosFruta[i].nombre}`
    const agregar = (producto) => {
        carritoCompras.push(productosFruta[i]);
        localStorage.setItem('Carrito', JSON.stringify(carritoCompras));
        
    }
}

const divFooter = document.createElement('div');
divFooter.classList = 'bg-warrning'
global.appendChild(divFooter)

const parrafoFooter = document.createElement('p');
let anio = new Date().getFullYear()
parrafoFooter.textContent = `Juan Miguel Salave todos los derechos reservados ${anio}`
divFooter.classList = 'text-center text-bg-warning bg-gradient pt-3 p-1'
divFooter.appendChild(parrafoFooter)
