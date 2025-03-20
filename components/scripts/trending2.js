// const prevItems = localStorage.getItem('items')

// function getRecentViewProductList() {

//     let localStorageValue = JSON.parse(prevItems)
//     localStorageValue = localStorageValue?.value
//     return localStorageValue
// }
// Sample product data
// let products = [
//     {
//         name: "Soap Dishes &amp; Dispensers",
//         code: "SN-001",
//         image: "/public/515lDt3ygFL._AC_UF1000,1000_QL80_.jpg ",
//         url: "",
//     },
//     {
//         name: "Towel Holders &amp; Racks",
//         code: "BP-002",
//         image: "/public/GPID_1100659228_00.jpeg",
//         url: ""
//     },
//     {
//         name: "Toilet Paper Holders",
//         code: "WH-003",
//         image: "/public/plastic-bathroom-accessories-isolated-white-background_185193-57596.avif",
//         url: ""
//     },
//     {
//         name: "Multi-purpose Organisers",
//         code: "WH-003",
//         image: "/public/plastic-bathroom-accessories-isolated-white-background_185193-57596.avif",
//         url: ""
//     },
// ];
// products = getRecentViewProductList()
function createProductCard(product) {
    const productList = document.getElementById('productList');
    let src = `${product.imageSrc}${product.code}.jpg`
    const img = new Image();
    img.src = src
    img.onload = () => {
        productList.innerHTML += `
        <a href="${product.url}" class="productCard">
            <img src="${image}" alt="${product.name}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `
    }
    img.onerror = () => {
        productList.innerHTML += `
        <a href="${product.url}" class="productCard">
            <img src="/public/icons/brokenImage.svg" alt="" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `
    }
}




function renderTrendingProducts() {
    products.map(product => createProductCard(product))
}

// Initialize the product list
// renderTrendingProducts();

// Optional: Add smooth scroll behavior
// const productContainer = document.querySelector('.product-container');
// let isDown = false;
// let startX;
// let scrollLeft;

// productContainer.addEventListener('mousedown', (e) => {
//     isDown = true;
//     productContainer.style.cursor = 'grabbing';
//     startX = e.pageX - productContainer.offsetLeft;
//     scrollLeft = productContainer.scrollLeft;
// });

// productContainer.addEventListener('mouseleave', () => {
//     isDown = false;
//     productContainer.style.cursor = 'default';
// });

// productContainer.addEventListener('mouseup', () => {
//     isDown = false;
//     productContainer.style.cursor = 'default';
// });

// productContainer.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - productContainer.offsetLeft;
//     const walk = (x - startX) * 2;
//     productContainer.scrollLeft = scrollLeft - walk;
// });