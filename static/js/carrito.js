const body = document.querySelector('body');
body.classList = 'bg-dark'

const titulo = document.querySelector('title');
titulo.textContent = 'Cart Fruit Store'

const pagCarrito = document.querySelector('#carrito');

const tituloImg = document.createElement('header');
tituloImg.classList = 'card-title text-center text-light bg-dark display-3'
tituloImg.textContent = 'Fruit Store'
pagCarrito.appendChild(tituloImg);

const navBar = document.createElement('nav');
navBar.classList = 'navbar text-bg-warning bg-gradient'
pagCarrito.appendChild(navBar);

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

let carrito = JSON.parse(localStorage.getItem('Carrito'))

for ( let c = 0; c < carrito.length; c++){
    const divUno = document.createElement('div');
    divUno.classList = 'container card text-bg-warning bg-gradient mb-3 mt-3'
    divUno.style = 'max-width: 450px;'
    pagCarrito.appendChild(divUno);
    
    const divDos = document.createElement('div');
    divDos.classList = 'row g-0'
    divUno.appendChild(divDos);
    
    const divTres = document.createElement('div');
    divTres.classList = 'col-md-4'
    divDos.appendChild(divTres);
    
    const imagenProducto = document.createElement('img');
    imagenProducto.classList = 'img-car rounded-start mx-0'
    imagenProducto.src = `../static/img/${carrito[c].imagen}`;
    divTres.appendChild(imagenProducto);

    const divCuatro = document.createElement('div');
    divCuatro.classList = 'col-md-8'
    divDos.appendChild(divCuatro);
    
    const divCinco = document.createElement('div');
    divCinco.classList = 'card-body'
    divCuatro.appendChild(divCinco);
    
    const hTres = document.createElement('h3');
    hTres.classList = 'card-title text-center mt-2 '
    hTres.textContent = `${carrito[c].nombre} = $${carrito[c].precio}`;
    divCinco.appendChild(hTres);

    const botonBorrar = document.createElement('button');
    botonBorrar.classList = 'btn col-12 btn-sm mt-s1 bg-dark text-warning';
    botonBorrar.textContent = 'Eliminar del Carrito'
    divCinco.appendChild(botonBorrar);
    botonBorrar.addEventListener('click', () => {
        eliminarFruta(carrito[c]);
        location.reload();
    })
    function eliminarFruta( id ){
        carrito.splice(c, 1)
        localStorage.setItem('Carrito', JSON.stringify(carrito));        
    }
}


const divFooter = document.createElement('div');
divFooter.classList = 'bg-warrning mt-5'
pagCarrito.appendChild(divFooter)

const parrafoFooter = document.createElement('p');
let anio = new Date().getFullYear()
parrafoFooter.textContent = `Juan Miguel Salave todos los derechos reservados ${anio}`
divFooter.classList = 'text-center text-bg-warning bg-gradient pt-3 p-1 mt-5'
divFooter.appendChild(parrafoFooter)