   // Product categories data
  
   const productCategories = {
    'Faucets': [
        'Freestanding Tubs', 'Clawfoot Tubs', 'Whirlpool Baths',
        'Bath Pillows', 'Bath Mats', 'Bath Caddies'
    ],
    'PTMT': [
        'Rain Showers', 'Smart Showers', 'Body Jets',
        'Hand Showers', 'Shower Panels', 'Shower Heads'
    ],
    'Showers': [
        'Vanity Units', 'Medicine Cabinets', 'Wall Cabinets',
        'Under-sink Storage', 'Towel Storage', 'Bathroom Shelving'
    ],
    'Health Faucets': [
        'Faucets', 'Drains', 'Grab Bars',
        'Toilet Paper Holders', 'Robe Hooks', 'Shower Door Hardware'
    ],
    'Bath Accessories': [
        'Towel Warmers', 'Heated Floors', 'Steam Systems',
        'Bathroom TVs', 'Smart Mirrors', 'Aromatherapy Diffusers'
    ],
    'Faucets Parts': [
        'Towel Warmers', 'Heated Floors', 'Steam Systems',
        'Bathroom TVs', 'Smart Mirrors', 'Aromatherapy Diffusers'
    ]
};

// Populate product categories
const productsSection = document.querySelector('.l-products-section');

Object.entries(productCategories).forEach(([category, products]) => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'l-product-category';
    console.log('hii',productsSection)
    categoryElement.innerHTML = `
        <div class="l-category-header">
            <h4>${category}</h4>
            <span class="arrow">▼</span>
        </div>
        <div class="l-category-content">
            <div class="l-product-grid">
                ${products.map(product => `
                    <a href="#" class="l-product-link">${product}</a>
                `).join('')}
            </div>
        </div>
    `;
    
    productsSection.appendChild(categoryElement);
});

// Handle category expansion
document.querySelectorAll('.l-category-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');
        
        // Close all other categories
        document.querySelectorAll('.category-header.active').forEach(activeHeader => {
            if (activeHeader !== header) {
                activeHeader.classList.remove('active');
                activeHeader.nextElementSibling.classList.remove('active');
            }
        });
        
        // Toggle current category
        header.classList.toggle('active');
        content.classList.toggle('active');
    });
});

// Newsletter functionality
const subscribeButton = document.querySelector('.newsletter-form button');
const emailInput = document.querySelector('.newsletter-form input');
const successMessage = document.querySelector('.success-message');

subscribeButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    
    if (email && email.includes('@')) {
        emailInput.value = '';
        successMessage.style.display = 'block';
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }
});