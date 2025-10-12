// Product categories data
{/* <a>
<svg width="30" height="40" viewBox="0 0 24 24" fill="currentColor">
 <path
   d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
</svg>
</a> */}
const setFooter = () => {
  let footer = document.getElementById("footer");
  footer.innerHTML = `
       <div id='footer-logo-section'>
              <img id="footer-company-logo" width='80' height='80' src='/public/icons/logo.svg' alt='durity'/>
              <div>
               <h1 class='text-h3 follow-us-footer-text'>Follow Us</h1>
              <a class='social-links'  href='https://www.instagram.com/duritybathfittings?igsh=MWNsMm10cWc4bDNkbQ==' target="blank">
           <svg width="30" height="40" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 7.5c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-9c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h9zm-4.5 1.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 1.2c.993 0 1.8.807 1.8 1.8s-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8.807-1.8 1.8-1.8zm3.75-2.1c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75z"/>
       </svg>
             </a>
            <a  class='social-links'  href='https://www.youtube.com/@Duritybath' target='blank'>
             <svg width="30" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.892l4.917 2.917-4.917 2.917v-5.834z" />
            </svg>
            </a>
            <a  class='social-links'  href='https://www.facebook.com/duritybath' target='blank'>
              <svg width="30" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
            </a>
            <a class='social-links' href='https://www.linkedin.com/company/durity-bath-fittings/?viewAsMember=true' target='blank'>
             <svg width="30" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
            </a>
              </div>
            
          </div>
     <div class="footer-container">
      
      <div class="footer-content">
      
        
      

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
            Work & Office Address - 56/B, Damodar Park Industrial Area, Dilshad Garden, Delhi - 110095
          </div>
          <div class="contact-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20 4h-16c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2zm0 4.236l-8 4.882-8-4.882v-2.236l8 4.882 8-4.882v2.236z" />
            </svg>
            contact@duritybath.com
          </div>
          <div class="contact-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
             +91 7982166639
          </div>
          <div class="contact-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4z" />
            </svg>
            Wednesday - Monday: 9AM - 7PM
          </div>
        </div>
      </div>
       <div id="durity-short-links" class='text-center'>
            <a href="/about.html">About Us</a><span class='footer-nav-vertical-line'></span><a href="/carrerspage.html">Careers</a><span class='footer-nav-vertical-line'></span><a href="/termsAndConditions.html">Terms & Conditions</a><span class='footer-nav-vertical-line'></span><a href="/register.html">Register</a><span class='footer-nav-vertical-line'></span><a href="/events.html">Events</a>
       </div>
      <div class="footer-bottom text-steelblue footer-trademark">
        <p class="text-steelblue x all-rights-reserved-footer-mark">&copy; 2025 LuxBath. All rights reserved. | Designed with ❤️ for luxury bathrooms</p>
      </div>
    </div>
    `;
};
setFooter();
let productCategories = {
  faucets: [
    "Freestanding Tubs",
    "Clawfoot Tubs",
    "Whirlpool Baths",
    "Bath Pillows",
    "Bath Mats",
    "Bath Caddies",
  ],
  ptmt: [
    "Rain Showers",
    "Smart Showers",
    "Body Jets",
    "Hand Showers",
    "Shower Panels",
    "Shower Heads",
  ],
  showers: [
    "Vanity Units",
    "Medicine Cabinets",
    "Wall Cabinets",
    "Under-sink Storage",
    "Towel Storage",
    "Bathroom Shelving",
  ],
  "health faucet": [
    "Faucets",
    "Drains",
    "Grab Bars",
    "Toilet Paper Holders",
    "Robe Hooks",
    "Shower Door Hardware",
  ],
  "bath accessories": [
    "Towel Warmers",
    "Heated Floors",
    "Steam Systems",
    "Bathroom TVs",
    "Smart Mirrors",
    "Aromatherapy Diffusers",
  ],
  "faucet parts": [
    "Towel Warmers",
    "Heated Floors",
    "Steam Systems",
    "Bathroom TVs",
    "Smart Mirrors",
    "Aromatherapy Diffusers",
  ],
};
const setProductListInFooter = ()=>{
  let {faucets,ptmt,showers,} = durityProducts
  let d = durityProducts
  ptmt = ptmt?.products?.map((item)=>{
    // return item?.name
    return item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)?.toLowerCase()
  })
  faucets = faucets?.products?.map((item)=>{
    // return item?.name
    let value = item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)?.toLowerCase()
    // return item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)?.toLowerCase()
    // return <a >value</a>
    return value
  })
  showers = showers?.products?.map((item)=>{
    // return item?.name
    return item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)?.toLowerCase()
  })
  let faucet_parts = d['faucet parts']?.products?.map((item)=>{
    // return item?.name
    return item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)?.toLowerCase()
  })
  let bath_accessories = d['bath accessories']?.products?.map((item)=>{
    // return item?.name
    return item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)?.toLowerCase()
  })
  let health_faucet = d['health faucet']?.products?.map((item)=>{
    return item?.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)?.toLowerCase()
    // return item?.name
  })
  productCategories['ptmt'] = ptmt
  productCategories['faucets'] = faucets
  productCategories['showers'] = showers
  productCategories['faucet parts'] =  faucet_parts
  productCategories['bath accessories'] = bath_accessories
  productCategories['health faucet'] =   health_faucet

}
setProductListInFooter()

// console.log('hii hello')
// Populate product categories
const productsSection = document.querySelector(".l-products-section");

Object.entries(productCategories).forEach(([category, products]) => {
  const categoryElement = document.createElement("div");
  categoryElement.className = "l-product-category";
  categoryElement.innerHTML = `
        <div class="l-category-header">
            <h4>${category?.toUpperCase()}</h4>
            <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg>
            </span>
            
        </div>
        <div class="l-category-content">
            <div class="l-product-grid">
                ${products
                  .map(
                    (product,index) => `
                    <a href="/product.html?name=${category}&category=${product}&index=${index}" class="l-product-link">${product}</a>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;

  productsSection.appendChild(categoryElement);
});

// Handle category expansion
document.querySelectorAll(".l-category-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains("active");

    // Close all other categories
    document
      .querySelectorAll(".category-header.active")
      .forEach((activeHeader) => {
        if (activeHeader !== header) {
          activeHeader.classList.remove("active");
          activeHeader.nextElementSibling.classList.remove("active");
        }
      });

    // Toggle current category
    header.classList.toggle("active");
    content.classList.toggle("active");
  });
});

// Newsletter functionality
const subscribeButton = document.querySelector(".newsletter-form button");
const emailInput = document.querySelector(".newsletter-form input");
// const successMessage = document.querySelector(".success-message");

// subscribeButton.addEventListener("click", () => {
//   const email = emailInput.value.trim();

//   if (email && email.includes("@")) {
//     emailInput.value = "";
//     successMessage.style.display = "block";

//     setTimeout(() => {
//       successMessage.style.display = "none";
//     }, 3000);
//   }
// });
