   // Product categories data
  
   const setFooter = ()=>{
    let footer = document.getElementById('footer')
    footer.innerHTML = `
     <div class="footer-container">
      <div class="footer-content">
        <div class="footer-about">
          <h3>Durity</h3>
          <p>Transform your bathroom into a sanctuary of luxury and comfort with our premium collection of bathroom
            accessories. We pride ourselves on combining elegant design with exceptional functionality.</p>
          <!-- <div class="newsletter-form"> -->
          <!-- <input type="email" placeholder="Enter your email"> -->
          <!-- <button type="button">Subscribe</button> -->
          <!-- </div> -->
          <div id="durity-short-links">
            <a href="">About Us</a><a href="">Careers</a><a href="">Events</a><a href="">Register</a>
          </div>
          <div class="success-message">Thank you for subscribing!</div>
        </div>

        <div class="l-products-section">
          <!-- Product categories will be dynamically populated -->

        </div>

        <div class="footer-contact">
          <h4>Contact Info</h4>
          <div class="contact-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            123 Luxury Lane, Design District
          </div>
          <div class="contact-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20 4h-16c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2zm0 4.236l-8 4.882-8-4.882v-2.236l8 4.882 8-4.882v2.236z" />
            </svg>
            info@luxbath.com
          </div>
          <div class="contact-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
            +1 (555) 123-4567
          </div>
          <div class="contact-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4z" />
            </svg>
            Mon - Sat: 9AM - 7PM
          </div>
        </div>
      </div>

      <div class="footer-bottom text-steelblue ">
        <p class="text-steelblue">&copy; 2025 LuxBath. All rights reserved. | Designed with ❤️ for luxury bathrooms</p>
      </div>
    </div>
    `
}
setFooter()
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

