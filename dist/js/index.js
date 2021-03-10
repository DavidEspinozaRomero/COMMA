const $modal = document.getElementById('modal');
const $modalContainer = document.getElementById('modal-container');
const $btnClose = document.getElementById('btn-close');

const $menuList = document.getElementById('menu__list')
const menuItems = ['pizza', 'hamburguesa', 'bebida', 'pasteles']

const $aboutList = document.getElementById('about__list')
const aboutItems = ['Nosotros', 'Tradicion', 'Galeria de fotos', 'Blog']

// Categorias de productos
// Hamburguesas
const hamburguesaSimple = {name:'Hamburguesa Simple', img:'../public/item-1.jpg', description: 'carne con queso', price:'$3.00', id:'hamburguesa'}
const hamburguesaDoble = {name:'Hamburguesa Doble', img:'../public/item-2.jpg', description: 'doble carne con queso', price:'$5.00' , id:'hamburguesa'}

// Pasteles
const pastel = {name:'Pastel', img:'../public/item-3.jpg', description: 'pastel helado de fresa', price:'$10.00', id:'pasteles'}
const pastelChocolate = {name:'Pastel', img:'../public/item-3.jpg', description: 'pastel helado de fresa', price:'$10.00', id:'pasteles'}

// Todos los productos en 1 Array
const productos = [hamburguesaSimple, hamburguesaDoble, pastel]

const createTemplate = (HTMLString) => {
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  return html.body.children[0];
}
const addEventClick = ($element) => {
  $element.addEventListener('click', showModal);
}

const itemTemplate = ($nameList,id) => `<span id='${id}' class="${$nameList}__item">${id}</span>`

const renderListItems = (nameList, items, $list) =>{
  for (let i = 0, listItems = items.length; i < listItems; i++) {
    const template = itemTemplate(nameList,items[i]);
    const item = createTemplate(template);
    addEventClick(item)
    $list.append(item);
  }
}

renderListItems('menu', menuItems, $menuList)
renderListItems('about', aboutItems, $aboutList)

const productTemplate = (imgSrc, altTxt, productName, productDescription, productPrice) => {
  return(
    `
    <div class="product">
    <img class="product__img" src="${imgSrc}" alt="${altTxt}">
    <h3 class="product__name">${productName}</h3>
    <p class="product__description">${productDescription}</p>
    <span class="product__price">${productPrice}</span>
    </div>
    `
  )
}

function findId(e) {
  const idEvent= e.target.id;
  return productos.filter(({id}) => id == idEvent);
}

function renderType() {
  switch (id) {
    case products:
      
      break;
    case Nosotros:
      
      break;
    case Tradicion:
      
      break;
  
    default:
      break;
  }
}

function showModal(e) {
  (e.target.classList.contains('menu__item'))
    ? renderProduct(findId(e))
    : renderAbout()
  $modal.classList.remove('hide')
  $modal.style.animation = 'modalIn .8s forwards';
}

$btnClose.addEventListener('click', hideModal)
function hideModal() {
  $modal.classList.remove('hide')
  $modal.style.animation = 'modalOut .8s forwards';
}

const renderProduct = (products) =>{
  $modalContainer.innerHTML="";
  for (const product of products) {
    const {img, name, description, price} = product;
    const template = productTemplate(img, name, name, description, price);
    const item = createTemplate(template);
    $modalContainer.append(item);
  }
}
