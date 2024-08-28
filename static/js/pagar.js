const body = document.querySelector('body');
body.classList = 'bg-dark'

const titulo = document.querySelector('title');
titulo.textContent = 'Pagar Fruit Store'

const pagPagar = document.querySelector('#pagar');

const tituloImg = document.createElement('header');
tituloImg.classList = 'card-title text-center text-light bg-dark display-3'
tituloImg.textContent = 'Fruit Store'
pagPagar.appendChild(tituloImg);

const navBar = document.createElement('nav');
navBar.classList = 'navbar text-bg-warning bg-gradient'
pagPagar.appendChild(navBar);

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
    h3Enlace.classList ='text-dark mx-5 mx-0';
    h3Enlace.textContent = enla.nombr;
    enlace.appendChild(h3Enlace);
    divNavBar.appendChild(enlace);
})

let producto = JSON.parse(localStorage.getItem('Carrito'));

const divContainer = document.createElement('div');
divContainer.classList = 'container col-4 mt-5'
pagPagar.appendChild(divContainer);

const ol = document.createElement('ol')
ol.classList = 'list-group';
divContainer.appendChild(ol)

for ( let p = 0; p < producto.length; p++){

    const li = document.createElement('li')
    li.classList = 'list-group-item d-flex justify-content-between align-items-start text-bg-warning bg-gradient'
    ol.appendChild(li)

    const divLi = document.createElement('div')
    divLi.classList = 'ms-2 me-auto'
    li.appendChild(divLi);

    const divNombre = document.createElement('div');
    divNombre.classList = 'fw-bold h4 mt-2'
    divNombre.textContent = `${producto[p].nombre}`
    divLi.appendChild(divNombre);

    const spanPrecio = document.createElement('span');
    spanPrecio.classList = 'h5 text-dark rounded-pill p-2';
    spanPrecio.textContent = `$ ${producto[p].precio}`
    li.appendChild(spanPrecio);

}

let total = 0
function totalDePrecio(producto){
    producto.forEach((producto) => {
        total += producto.precio
        return total
    })
}

totalDePrecio(producto);

const liTotal = document.createElement('li');
liTotal.classList = 'list-group-item d-flex justify-content-between align-items-start'
ol.appendChild(liTotal);

const divLiTotal = document.createElement('div')
divLiTotal.classList = 'ms-2 me-auto'
liTotal.appendChild(divLiTotal);

const divNombreTotal = document.createElement('div');
divNombreTotal.classList = 'fw-bold h2 mt-2'
divNombreTotal.textContent = `Total`
divLiTotal.appendChild(divNombreTotal);

const spanPrecioTotal = document.createElement('span');
spanPrecioTotal.classList = 'h3 text-dark mt-2';
spanPrecioTotal.textContent = `$ ${total}`
liTotal.appendChild(spanPrecioTotal);


const divFooter = document.createElement('div');
divFooter.classList = 'bg-warrning mt-5'
pagPagar.appendChild(divFooter)

const parrafoFooter = document.createElement('p');
let anio = new Date().getFullYear()
parrafoFooter.textContent = `Juan Miguel Salave todos los derechos reservados ${anio}`
divFooter.classList = 'text-center text-bg-warning bg-gradient pt-3 p-1 mt-5'
divFooter.appendChild(parrafoFooter)
