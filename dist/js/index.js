const $modal = document.getElementById('modal');
const $modalContainer = document.getElementById('modal-container');
const $btnClose = document.getElementById('btn-close');

const $menuList = document.getElementById('menu__list')
const menuItems = ['Hamburguesas', 'Bebidas', 'Pasteles']

const $aboutList = document.getElementById('about__list')
const aboutItems = ['Nosotros', 'Tradicion', 'Blog', 'Galeria de fotos']

// Categorias de productos
// Bebidas
const milshakeSabores = {name:'Hamburguesa Simple', img:'https://instagram.fatf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/146619626_3484631544979230_617797892373189481_n.jpg?tp=1&_nc_ht=instagram.fatf1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=KZ0qryTaQ_wAX-sgjwH&oh=f15d091cb58eb36763029f9c094a2150&oe=60748FBE', description: 'tres sabores vainilla, chocolate y fresa', price:'$3.00', id:'Bebidas'}
const milshakeFrase = {name:' Doble', img:'https://instagram.fatf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/144888694_1075674346179750_352439025387974684_n.jpg?tp=1&_nc_ht=instagram.fatf1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=fva_fssUDUcAX-50f0A&oh=20133b1d79516d1c646f34c4534e4dfa&oe=6073BCF6', description: 'fresas con chocolate blanco', price:'$5.00' , id:'Bebidas'}

// Hamburguesas
const hamburguesaSimple = {name:'Hamburguesa Simple', img:'https://instagram.fatf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/156225868_824205031497069_6640867329066576039_n.jpg?tp=1&_nc_ht=instagram.fatf1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=lgPo-UZAe94AX-8rUuY&oh=e95ce490152aecbb0d3423501bcab251&oe=607464DF', description: 'carne con queso', price:'$3.00', id:'Hamburguesas'}
const hamburguesaDoble = {name:'Hamburguesa Doble', img:'https://instagram.fatf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/153092134_426279255487453_1417163058475134220_n.jpg?tp=1&_nc_ht=instagram.fatf1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wbOJeeQc_nMAX_kQfvF&oh=bdc747a970eddca1b392f2043bd3951a&oe=607468DB', description: 'doble carne con queso', price:'$5.00' , id:'Hamburguesas'}

// Pasteles
const pastelChocolateBlanco = {name:'Pastel de chocolate Blanco', img:'https://instagram.fatf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/148255465_268190588002850_4553889754385595392_n.jpg?tp=1&_nc_ht=instagram.fatf1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=G2M0tTKvLTUAX8-8EJG&oh=dcc4611b1438736ed8b0f33a45effb19&oe=6073817C', description: 'chocolate Blanco, huevo kinder, tableta de chocolate', price:'$10.00', id:'Pasteles'}
const pastelChocolate = {name:'Pastel de chocolate', img:'https://instagram.fatf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/148116168_176927287536981_5432411285464101204_n.jpg?tp=1&_nc_ht=instagram.fatf1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=G9j0ApCY3N4AX_q6pDd&oh=2a8e847e08ed9cdb716956122c89bfda&oe=607255C0', description: 'pastel helado de fresa', price:'$12.00', id:'Pasteles'}

// Todos los productos en 1 Array
const productos = [hamburguesaSimple, hamburguesaDoble, milshakeSabores,milshakeFrase,pastelChocolateBlanco,pastelChocolate]

// About section
const about = {img:"/public/item-6.jpg", alt:'image alt',title:"Title", txt:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus, nam dolor hic corrupti, esse suscipit, aliquid magni placeat quia facilis. Necessitatibus, quo deserunt ipsam maxime laboriosam amet officiis animi.'}

const createHTML = (HTMLString) => {
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
    const item = createHTML(template);
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
    <img class="product__img" loading='lazy' src="${imgSrc}" alt="${altTxt}">
    <h3 class="product__name">${productName}</h3>
    <p class="product__description">${productDescription}</p>
    <span class="product__price">${productPrice}</span>
    </div>
    `
  )
}
const contentTemplate = (imgSrc,altTxt, title, text) => {
  return(
    `
    <div class="content">
    <img class="content__img" loading='lazy' src="${imgSrc}" alt="${altTxt}">
    <h3 class="content__title">${title}</h3>
    <p class="content__text">${text}</p>
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
    : renderAbout(about)
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
    const item = createHTML(template);
    $modalContainer.append(item);
  }
}

const renderAbout = (content) => {
  $modalContainer.innerHTML="";
  const {img, alt, title, txt} = content;
  const template = contentTemplate(img, alt, title, txt);
  const item = createHTML(template);
  $modalContainer.append(item);
}
