const prevItems = localStorage.getItem('items')
function getRecentViewProductList() {

    let localStorageValue = JSON.parse(prevItems)
    localStorageValue = localStorageValue?.value
    return localStorageValue
}
// Sample product data
let products = [
    {
        id: 1,
        name: "Classic White Sneakers",
        code: "SN-001",
        image: "/api/placeholder/200/200",
        url: "/product/1"
    },
    {
        id: 2,
        name: "Leather Backpack",
        code: "BP-002",
        image: "/api/placeholder/200/200",
        url: "/product/2"
    },
    {
        id: 3,
        name: "Wireless Headphones",
        code: "WH-003",
        image: "/api/placeholder/200/200",
        url: "/product/3"
    },
    // Add more products as needed
];
products = getRecentViewProductList()
function createProductCard(product) {
    const productList = document.getElementById('productList');
    let src = `${product.imageSrc}${product.code}.jpg`
    const img = new Image();
    img.src = src
    img.onload = () => {
        productList.innerHTML += `
        <a href="${product.openPath}" class="productCard">
            <img src="${src}" alt="${product.name}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `
    }
    img.onerror = () => {
        productList.innerHTML += `
        <a href="${product.openPath}" class="productCard">
            <img src="/public/icons/brokenImage.svg" alt="" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `
    }


}




function renderProducts() {
    products.map(product => createProductCard(product))
}

// Initialize the product list
renderProducts();

// Optional: Add smooth scroll behavior
const productContainer = document.querySelector('.product-container');
let isDown = false;
let startX;
let scrollLeft;

productContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    productContainer.style.cursor = 'grabbing';
    startX = e.pageX - productContainer.offsetLeft;
    scrollLeft = productContainer.scrollLeft;
});

productContainer.addEventListener('mouseleave', () => {
    isDown = false;
    productContainer.style.cursor = 'default';
});

productContainer.addEventListener('mouseup', () => {
    isDown = false;
    productContainer.style.cursor = 'default';
});

productContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - productContainer.offsetLeft;
    const walk = (x - startX) * 2;
    productContainer.scrollLeft = scrollLeft - walk;
});