const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        togglepMenu(aside)
    }
    togglepMenu(desktopMenu)
});

menuBurguerIcon.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        togglepMenu(aside)
    }
    togglepMenu(mobileMenu)
});

carMenuIcon.addEventListener('click', () => {
    if (!desktopMenu.classList.contains('inactive')) {
        togglepMenu(desktopMenu)
    }
    if (!mobileMenu.classList.contains('inactive')) {
        togglepMenu(mobileMenu)
    }
    togglepMenu(aside)
});


function togglepMenu(dropDownMenu) {
    dropDownMenu.classList.toggle('inactive');
}

const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Computer',
        price: 5000,
        image: 'https://www.sincable.mx/wp-content/uploads/2020/01/patrick-ward-z_dLXnQg0JY-unsplash-scaled.jpg'
    }
);
productList.push(
    {
        name: 'Headphones',
        price: 40,
        image: 'https://ripleype.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2021%2F11%2F02123555%2FAudifonos_Gato_5.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=6659c4689ba21bb4e8577162dd93d933'
    }
);
productList.push(
    {
        name: 'Phone',
        price: 900,
        image: 'https://http2.mlstatic.com/D_Q_NP_792043-MLA41734525906_052020-V.jpg'
    }
);
productList.push(
    {
        name: 'Tablet',
        price: 1000,
        image: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NzY2NTh8aW1hZ2UvcG5nfGgxZC9oNDkvMTEyNzY1MjY3ODA0NDYucG5nfGVhYzg5MzgwNjAzY2ExYTY3NzBlNmI2NDg3OTk0YTBjMDY0NzM2ZjM1NGQ3ZmNjMTVkNzIzN2I0OWE4MTJjNTc'
    }
);
productList.push(
    {
        name: 'Auto',
        price: 20000,
        image: 'https://autoland.com.pe/wp-content/uploads/2022/05/Arrizo-5-destacada.png'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Computer',
        price: 5000,
        image: 'https://www.sincable.mx/wp-content/uploads/2020/01/patrick-ward-z_dLXnQg0JY-unsplash-scaled.jpg'
    }
);
productList.push(
    {
        name: 'Headphones',
        price: 40,
        image: 'https://ripleype.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2021%2F11%2F02123555%2FAudifonos_Gato_5.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=6659c4689ba21bb4e8577162dd93d933'
    }
);
productList.push(
    {
        name: 'Phone',
        price: 900,
        image: 'https://http2.mlstatic.com/D_Q_NP_792043-MLA41734525906_052020-V.jpg'
    }
);
productList.push(
    {
        name: 'Tablet',
        price: 1000,
        image: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NzY2NTh8aW1hZ2UvcG5nfGgxZC9oNDkvMTEyNzY1MjY3ODA0NDYucG5nfGVhYzg5MzgwNjAzY2ExYTY3NzBlNmI2NDg3OTk0YTBjMDY0NzM2ZjM1NGQ3ZmNjMTVkNzIzN2I0OWE4MTJjNTc'
    }
);
productList.push(
    {
        name: 'Auto',
        price: 20000,
        image: 'https://autoland.com.pe/wp-content/uploads/2022/05/Arrizo-5-destacada.png'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Computer',
        price: 5000,
        image: 'https://www.sincable.mx/wp-content/uploads/2020/01/patrick-ward-z_dLXnQg0JY-unsplash-scaled.jpg'
    }
);
productList.push(
    {
        name: 'Headphones',
        price: 40,
        image: 'https://ripleype.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2021%2F11%2F02123555%2FAudifonos_Gato_5.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=6659c4689ba21bb4e8577162dd93d933'
    }
);
productList.push(
    {
        name: 'Phone',
        price: 900,
        image: 'https://http2.mlstatic.com/D_Q_NP_792043-MLA41734525906_052020-V.jpg'
    }
);
productList.push(
    {
        name: 'Tablet',
        price: 1000,
        image: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NzY2NTh8aW1hZ2UvcG5nfGgxZC9oNDkvMTEyNzY1MjY3ODA0NDYucG5nfGVhYzg5MzgwNjAzY2ExYTY3NzBlNmI2NDg3OTk0YTBjMDY0NzM2ZjM1NGQ3ZmNjMTVkNzIzN2I0OWE4MTJjNTc'
    }
);
productList.push(
    {
        name: 'Auto',
        price: 20000,
        image: 'https://autoland.com.pe/wp-content/uploads/2022/05/Arrizo-5-destacada.png'
    }
);

function renderProducts (array) {
    for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img');
    img.src = product.image;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');

    const productFigureImg = document.createElement('img');
    productFigureImg.src = './icons/bt_add_to_cart.svg';

    productInfoFigure.append(productFigureImg);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(img, productInfo);

    cardsContainer.append(productCard);
}
}

renderProducts(productList);