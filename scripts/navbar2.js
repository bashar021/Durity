// Search functionality
const productsDropdown = document.querySelector(".products");

document.getElementById("navbar").innerHTML = `
 <nav id="my-nav" role="navigation" aria-label="Main Navigation">
      <a class="logo" href="/" title="Durity Bath - Premium Bathroom Accessories and Fixtures">
        <img id="log-png" src="/public/icons/logo.svg" alt="Durity Bath - Premium Bathroom Accessories and Fixtures Manufacturer" width="120" height="40">
      </a>
      <div class="search-container" role="search" aria-label="Search Products">
        <input type="text" placeholder="Search bathroom accessories, faucets, showers..." id="searchInput" autocomplete="off" aria-label="Search for bathroom accessories and fixtures" title="Search Durity Bath products">
        <span id="search_icon" class="search-icon" role="button" aria-label="Open search" tabindex="0">
          <img src="/public/icons/icon.svg" alt="Search icon" width="20" height="20">
        </span>
       
         <div class="search-dropdown" id="suggestions" role="listbox" aria-label="Search suggestions">
        </div>
     
       
      </div>
      <div class="hamburger" role="button" aria-label="Open mobile menu" tabindex="0" aria-expanded="false">☰</div>

      <div class="nav-links" role="menubar">
        <a href="/" class="" title="Durity Bath Homepage - Premium Bathroom Accessories">Home</a>
        <div class="dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
          <a href="/service.html" class=" flex" title="Browse Durity Bath Products - Faucets, Showers, Bath Accessories">Products <img  class='arrow-icon ' src='/public/icons/downarrow.svg' alt="Expand products menu" /></a>
          <div class="dropdown-content" role="menu" aria-label="Product Categories">
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <p onclick="window.location.href='/products.html?name=faucets'" href="/products.html?name=faucets" class="products" title="Browse Premium Faucets Collection - Durity Bath" role="menuitem">
              Faucets 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg>
              </p>
              <div class="nested-dropdown-content" id="faucets-nested-d" role="menu" aria-label="Faucets Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>

            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <p onclick="window.location.href='/products.html?name=ptmt'" href="/products.html?name=ptmt" class="products" title="Browse PTMT Collection - Premium Bathroom Fixtures" role="menuitem">PTMT  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg></p>
              <div class="nested-dropdown-content text-steelblue" id="ptmt-nested-d" role="menu" aria-label="PTMT Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <p onclick="window.location.href='/products.html?name=showers '" href="/products.html?name=showers " class="products" title="Browse Premium Showers Collection - Durity Bath" role="menuitem">Showers  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg></p>
              <div class="nested-dropdown-content" id="showers-nested-d" role="menu" aria-label="Showers Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <p onclick="window.location.href='/products.html?name=health faucet '" href="/products.html?name=health faucet " class="products" title="Browse Health Faucets Collection - Premium Bathroom Fixtures" role="menuitem">Health Faucet  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg></p>
              <div class="nested-dropdown-content" id="hf-nested-d" role="menu" aria-label="Health Faucets Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <p onclick="window.location.href='/products.html?name=bath accessories '" href="/products.html?name=bath accessories " class="products" title="Browse Bath Accessories Collection - Premium Bathroom Fixtures" role="menuitem">Bath Accessories  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg></p>
              <div class="nested-dropdown-content" id="ba-nested-d" role="menu" aria-label="Bath Accessories Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <p onclick="window.location.href='/products.html?name=faucet parts '" href="/products.html?name=faucet parts " class="products" title="Browse Faucet Parts Collection - Premium Bathroom Components" role="menuitem">Faucet Parts  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg></p>
              <div class="nested-dropdown-content" id="fp-nested-d" role="menu" aria-label="Faucet Parts Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
          <a href="/service.html" class=" flex" title="Learn about Durity Bath Company - About Us, Careers, Events" role="menuitem">Company <img  class='arrow-icon ' src='/public/icons/downarrow.svg' alt="Expand company menu" /></a>
          <div class="dropdown-content" role="menu" aria-label="Company Information">
            <div class="dropdown">
              <p class="products" onclick="window.location.href='/about.html'"  href="/about.html" class="" title="About Durity Bath - Premium Bathroom Accessories Manufacturer" role="menuitem">About Us</p>
            </div>
            <div class="dropdown">
              <p class="products" onclick="window.location.href='/carrerspage.html'"  href="/carrerspage.html" class="" title="Join Durity Bath Team - Career Opportunities in Bathroom Accessories" role="menuitem">Careers</p>
            </div>
            <div class="dropdown">
              <p class="products" onclick="window.location.href='/events.html'"  href="/events.html" class="" title="Durity Bath Events and Trade Shows - Bathroom Accessories Exhibitions" role="menuitem">Events</p>
            </div>
            <div class="dropdown">
              <p class="products" onclick="window.location.href='/register.html'"  href="/register.html" class="" title="Register with Durity Bath for Exclusive Access to Premium Products" role="menuitem">Register</p>
            </div>
            

           
          </div>
        </div>
        <div class="dropdown">
          <a href="/catalogue.html" class="" title="Download Durity Bath E-Catalogue - Premium Bathroom Accessories Catalog" role="menuitem">E-Catalogue</a>
         
        </div>
       
      </div>
    </nav>
    <div class="sidebar" role="navigation" aria-label="Mobile Navigation" aria-hidden="true">
      <div class="close-btn" role="button" aria-label="Close mobile menu" tabindex="0">×</div>
      <div class="nav-links" role="menubar">
        <a href="/" class="" title="Durity Bath Homepage - Premium Bathroom Accessories">Home</a>
        <div class="dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
          <a href="#" role="menuitem" title="Browse Durity Bath Products">Products</a>
          <div class="dropdown-content" role="menu" aria-label="Product Categories">
            <!-- <a href="/products.html?name=faucets">Faucets</a> -->
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <a href="/products.html?name=faucets" class="products" title="Browse Premium Faucets Collection - Durity Bath" role="menuitem">Faucets</a>
              <div class="nested-dropdown-content" id="md-faucets-nested-d" role="menu" aria-label="Faucets Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <a href="/products.html?name=ptmt" class="products" title="Browse PTMT Collection - Premium Bathroom Fixtures" role="menuitem">PTMT</a>
              <div class="nested-dropdown-content" id="md-ptmt-nested-d" role="menu" aria-label="PTMT Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <a href="/products.html?name=showers" title="Browse Premium Showers Collection - Durity Bath" role="menuitem">Showers</a>
              <div class="nested-dropdown-content" id="md-showers-nested-d" role="menu" aria-label="Showers Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <a href="/products.html?name=health faucet" title="Browse Health Faucets Collection - Premium Bathroom Fixtures" role="menuitem">Health Faucet</a>
              <div class="nested-dropdown-content" id="md-hf-nested-d" role="menu" aria-label="Health Faucets Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <a href="/products.html?name=bath accessories" title="Browse Bath Accessories Collection - Premium Bathroom Fixtures" role="menuitem">Bath Accessories</a>
              <div class="nested-dropdown-content" id="md-ba-nested-d" role="menu" aria-label="Bath Accessories Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown" role="menuitem" aria-haspopup="true" aria-expanded="false">
              <a href="/products.html?name=faucet parts" title="Browse Faucet Parts Collection - Premium Bathroom Components" role="menuitem">Faucet Parts</a>
              <div class="nested-dropdown-content" id="md-fp-nested-d" role="menu" aria-label="Faucet Parts Collection">
                <!-- <a href="/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
          </div>
        </div>
        <a href="/about.html" title="About Durity Bath - Premium Bathroom Accessories Manufacturer">About Us</a>
        <a href="/carrerspage.html" title="Join Durity Bath Team - Career Opportunities in Bathroom Accessories">Careers</a>
        <a href="/events.html" title="Durity Bath Events and Trade Shows - Bathroom Accessories Exhibitions">Events</a>
        <a href="/catalogue.html" title="Download Durity Bath E-Catalogue - Premium Bathroom Accessories Catalog">E-Catalogue</a>
        <a href="/register.html" title="Register with Durity Bath for Exclusive Access to Premium Products">Register</a>
      </div>
    </div>
  
`;
const searchInput = document.getElementById("searchInput");
const searchDropdown = document.querySelector(".search-dropdown");
const catalogue_download_design_container = document.getElementById(
  "catalogue-download-design-container"
);
if (catalogue_download_design_container) {
  catalogue_download_design_container.innerHTML = `
  <div class="cat-download-card cat-ptmt-card catalogue-card" itemscope itemtype="https://schema.org/Product">
       <div>
         <img src="/public/home page/home page catalogue banner /PTMT  CATLOG.jpg" width="100%" alt="PTMT Collection Catalogue - Premium Bathroom Fixtures by Durity Bath" itemprop="image" />
       </div>
       <div class="cat-card-header">
         <div class="cat-card-icon" aria-hidden="true">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path
               d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
           </svg>
         </div>
         <h3 class="cat-card-title" itemprop="name">PTMT Collection</h3>
         <meta itemprop="description" content="Premium PTMT bathroom fixtures and accessories catalogue by Durity Bath">
       </div>
       <button class="cat-download-btn" onclick="openCatalogueF()" title="Download PTMT Collection Catalogue - Premium Bathroom Fixtures" aria-label="Download PTMT Collection Catalogue">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
           <polyline points="7 10 12 15 17 10" />
           <line x1="12" y1="15" x2="12" y2="3" />
         </svg>
         Download Catalogue
       </button>
     </div>
 
     <!-- Faucets Card -->
     <div class="cat-download-card cat-faucets-card catalogue-card" itemscope itemtype="https://schema.org/Product">
       <div>
         <img src="/public/home page/home page catalogue banner /FAUCET.jpg" width="100%" alt="Faucets Collection Catalogue - Premium Bathroom Faucets by Durity Bath" itemprop="image" />
       </div>
       <div class="cat-card-header">
         <div class="cat-card-icon" aria-hidden="true">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M12 2v6m0 0v6m0-6h6m-6 0H6" />
           </svg>
         </div>
         <h3 class="cat-card-title" itemprop="name">Faucets Collection</h3>
         <meta itemprop="description" content="Premium faucets and bathroom fixtures catalogue by Durity Bath">
       </div>
       <button class="cat-download-btn" onclick="openCatalogueF()" title="Download Faucets Collection Catalogue - Premium Bathroom Faucets" aria-label="Download Faucets Collection Catalogue">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
           <polyline points="7 10 12 15 17 10" />
           <line x1="12" y1="15" x2="12" y2="3" />
         </svg>
         Download Catalogue
       </button>
     </div>



    <div class="popup-overlay" id="cataloguePopupOverlay">
      <div class="popup-form catalogue-download-form-box">
        <button class="close-btn" onclick="closePopup()">&times;</button>
        <div class="form-header">
          <p class="text-black text-h4 mt-0 mb-0">Please fill out the form below to download our catalog</p>
        </div>
        <form id="downloadForm" onsubmit="handleSubmit(event)">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
            <div class="error" id="nameError">Please enter your name</div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <div class="error" id="emailError">Please enter a valid email</div>
          </div>

          <div class="form-group">
            <label for="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" required>
            <div class="error" id="mobileError">Please enter a valid mobile number</div>
          </div>

          <div class="form-group">
            <label for="business">Business Name</label>
            <input type="text" id="business" name="business" required>
            <div class="error" id="businessError">Please enter your business name</div>
          </div>

          <div class="form-group">
            <label for="message">Message (Optional)</label>
            <textarea id="message" name="message" rows="2"></textarea>
          </div>

          <button type="submit" id="catalogue-dn-form" class="submit-btn">Download Now</button>
        </form>
      </div>
    </div>
 `;
}

const customer_support = document.getElementById("customer-support");
if (customer_support) {
  customer_support.innerHTML = `
    <div itemscope itemtype="https://schema.org/Service">
      <p class='flex align-items-center gap-2 text-black text-h3 mt-0 pt-0 pb-0 mb-2'>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg>
      <span itemprop="name">Dealer Locator</span>
      </p>
      <div id='customer-horizontal-line' aria-hidden="true"></div>
      <p class='text-black text-h5 mb-0' itemprop="description">Become a Durity Bath Dealer – Where Quality and Reliability Flow Together. Premium bathroom accessories and fixtures distribution opportunities.</p>
    </div>

    <div itemscope itemtype="https://schema.org/Service">
      <p class='flex align-items-center gap-2 text-black text-h3 mt-0 pt-0 mb-2'>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" aria-hidden="true"><path fill="currentColor" d="M23 26a1 1 0 0 1-1 1H8c-.22 0-.43.2-.61.33L4 30V14a1 1 0 0 1 1-1h3.86v-2H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89a1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25h-2Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11a1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4m1 18.94l-3.5-2.73a1 1 0 0 0-.61-.21H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h17a1.1 1.1 0 0 1 1 1.06Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      <span itemprop="name">Talk to an Expert</span></p>
      
       <div id='customer-horizontal-line' aria-hidden="true"></div>
      <p class='text-black text-h5 mb-0' itemprop="description">Need Expert Advice? Talk to Durity Bath Experts Today! Professional consultation for bathroom accessories, faucets, and fixtures.</p>
    </div>
    
    <div itemscope itemtype="https://schema.org/Service">
      <p class='flex align-items-center gap-2 text-black text-h3 mt-0 pt-0 mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V4.37A3.93 3.93 0 0 1 7 .5a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 12.25a2 2 0 0 0 2-2V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25" stroke-width="1"/></svg>
      <span itemprop="name">Customer Service Request</span></p>
      <div id='customer-horizontal-line' aria-hidden="true"></div>
        <p class='text-black text-h5 mb-0' itemprop="description">Your Satisfaction, Our Priority – Contact Durity Bath Customer Service Today! Premium support for bathroom accessories and fixtures.</p>
    </div>
  `;
}
// Enhanced search functionality with SEO attributes
document.getElementById("search_icon").addEventListener("click", () => {
  document.getElementById("searchInput").style.display = "block";
  document.getElementById("search_icon").style.display = "none";
  document.getElementById("searchInput").style.width = "99%";
  document.getElementById("searchInput").focus(); // Auto-focus for better UX

  const searchInput = document.getElementById("searchInput");
  const searchIcon = document.getElementById("search_icon");

  function handleClickOutside(event) {
    // Check if the click was outside the input and the search icon
    if (
      searchInput &&
      !searchInput.contains(event.target) &&
      searchIcon &&
      !searchIcon.contains(event.target)
    ) {
      // Check if the input is empty
      if (searchInput.value.trim() === "") {
        document.getElementById("search_icon").style.display = "block";
        document.getElementById("searchInput").style.display = "none";
        document.getElementById("searchInput").style.width = "0%";
      }
      // Remove the event listener after checking
      document.removeEventListener("click", handleClickOutside);
    }
  }
  document.addEventListener("click", handleClickOutside);
});

// Enhanced keyboard navigation for search
document.getElementById("search_icon").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    document.getElementById("search_icon").click();
  }
});
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
    suggestions.style.display = "none";
    // md_suggestions.style.display = "none";
  }
});

// function filterSuggestions(query) {

//   suggestions.innerHTML = ""; // Clear previous suggestions
//   const filtered = itemNames?.filter((item) =>
//     item?.toLowerCase().includes(query.toLowerCase())
//   );
//   if (filtered.length > 0) {
//     suggestions.style.display = "block"; // Show suggestions
//     filtered.forEach((item) => {
//       const div = document.createElement("div");
//       div.className = "suggestion-item";
//       div.textContent = item;
//       div.onclick = () => {
//         searchInput.value = item; // Set input value to clicked suggestion
//         window.open(`/product.html?${itemsMapping[item]}`, "_self");
//         suggestions.style.display = "none"; // Hide suggestions
//       };
//       suggestions.appendChild(div);
//     });
//   } else {
//     suggestions.style.display = "none"; // Hide if no suggestions
//   }
// }
function filterSuggestions(query) {
  suggestions.innerHTML = ""; // Clear previous suggestions

  const filtered = itemNames?.filter((item) =>
    item?.toLowerCase().includes(query.toLowerCase())
  );

  // Remove duplicates
  const uniqueFiltered = [...new Set(filtered)];

  if (uniqueFiltered.length > 0) {
    suggestions.style.display = "block"; // Show suggestions
    uniqueFiltered.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.setAttribute("role", "option");
      div.setAttribute(
        "aria-label",
        `Search for ${item} - Premium bathroom accessories by Durity Bath`
      );
      div.setAttribute(
        "title",
        `View ${item} - Premium bathroom accessories by Durity Bath`
      );
      div.setAttribute("tabindex", "0");
      div.textContent = item;

      // Enhanced click handler with SEO-friendly navigation
      div.onclick = () => {
        searchInput.value = item; // Set input value to clicked suggestion
        const productUrl = `/product.html?${itemsMapping[item]}`;
        // Add analytics tracking if needed
        window.open(productUrl, "_self");
        suggestions.style.display = "none"; // Hide suggestions
      };

      // Keyboard navigation support
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          div.click();
        }
      });

      suggestions.appendChild(div);
    });
  } else {
    suggestions.style.display = "none"; // Hide if no suggestions
  }
}

// Enhanced mobile sidebar functionality with accessibility
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  sidebar.setAttribute("aria-hidden", "false");
  hamburger.setAttribute("aria-expanded", "true");
  // Focus management for accessibility
  const firstLink = sidebar.querySelector("a");
  if (firstLink) firstLink.focus();
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sidebar.setAttribute("aria-hidden", "true");
  hamburger.setAttribute("aria-expanded", "false");
  // Return focus to hamburger button
  hamburger.focus();
});

// Enhanced keyboard navigation for mobile menu
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hamburger.click();
  }
});

closeBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    closeBtn.click();
  }
});

// Enhanced mobile dropdown functionality with accessibility
const mobileDropdowns = document.querySelectorAll(".sidebar .dropdown");

mobileDropdowns.forEach((dropdown) => {
  const dropdownLink = dropdown.querySelector("a");
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  if (dropdownLink && dropdownContent) {
    dropdownLink.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = dropdown.classList.contains("active");

      // Close all other dropdowns
      mobileDropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("active");
          otherDropdown.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("active");
      dropdown.setAttribute("aria-expanded", !isActive);
    });

    // Keyboard navigation support
    dropdownLink.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dropdownLink.click();
      }
    });
  }
});

searchInput.addEventListener("input", () => {
  if (searchInput.value !== "") {
    searchDropdown.classList.add("active");
    filterSuggestions(searchInput.value);
  } else {
    searchDropdown.classList.remove("active");
    suggestions.innerHTML = ""; // Clear previous suggestions
    searchDropdown.style.display = "none";
  }
});

const setCategoryItems = () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const faucet = durityProducts["faucets"].products;
  const ptmt = durityProducts["ptmt"].products;
  const showers = durityProducts["showers"].products;
  const health_faucets = durityProducts["health faucet"].products;
  const bath_accessories = durityProducts["bath accessories"].products;
  const faucets_nested_d = document.getElementById("faucets-nested-d");
  const md_faucets_nested_d = document.getElementById("md-faucets-nested-d");
  const ptmt_nested_d = document.getElementById("ptmt-nested-d");
  const md_ptmt_nested_d = document.getElementById("md-ptmt-nested-d");
  const showers_nested_d = document.getElementById("showers-nested-d");
  const md_showers_nested_d = document.getElementById("md-showers-nested-d");
  const hf_nested_d = document.getElementById("hf-nested-d");
  const md_hf_nested_d = document.getElementById("md-hf-nested-d");
  const ba_nested_d = document.getElementById("ba-nested-d");
  const md_ba_nested_d = document.getElementById("md-ba-nested-d");
  faucet.forEach((item, index) => {
    const productName =
      item?.name?.charAt(0)?.toUpperCase() +
      item?.name?.slice(1)?.toLowerCase();
    const productUrl = `/product.html?name=faucets&category=${encodeURIComponent(
      item?.name
    )}&index=${index}`;

    faucets_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Faucets by Durity Bath" aria-label="Browse ${productName} faucets collection">${productName}</a>`;
    md_faucets_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Faucets by Durity Bath" aria-label="Browse ${productName} faucets collection">${productName}</a>`;
  });

  ptmt.forEach((item, index) => {
    const productName =
      item?.name?.charAt(0)?.toUpperCase() +
      item?.name?.slice(1)?.toLowerCase();
    const productUrl = `/product.html?name=ptmt&category=${encodeURIComponent(
      item?.name
    )}&index=${index}`;

    ptmt_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium PTMT Bathroom Fixtures by Durity Bath" aria-label="Browse ${productName} PTMT collection">${productName}</a>`;
    md_ptmt_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium PTMT Bathroom Fixtures by Durity Bath" aria-label="Browse ${productName} PTMT collection">${productName}</a>`;
  });

  showers.forEach((item, index) => {
    const productName =
      item?.name?.charAt(0)?.toUpperCase() +
      item?.name?.slice(1)?.toLowerCase();
    const productUrl = `/product.html?name=showers&category=${encodeURIComponent(
      item?.name
    )}&index=${index}`;

    showers_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Showers by Durity Bath" aria-label="Browse ${productName} showers collection">${productName}</a>`;
    md_showers_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Showers by Durity Bath" aria-label="Browse ${productName} showers collection">${productName}</a>`;
  });

  health_faucets.forEach((item, index) => {
    const productName =
      item?.name?.charAt(0)?.toUpperCase() +
      item?.name?.slice(1)?.toLowerCase();
    const productUrl = `/product.html?name=health faucet&category=${encodeURIComponent(
      item?.name
    )}&index=${index}`;

    hf_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Health Faucets by Durity Bath" aria-label="Browse ${productName} health faucets collection">${productName}</a>`;
    md_hf_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Health Faucets by Durity Bath" aria-label="Browse ${productName} health faucets collection">${productName}</a>`;
  });

  bath_accessories.forEach((item, index) => {
    const productName =
      item?.name?.charAt(0)?.toUpperCase() +
      item?.name?.slice(1)?.toLowerCase();
    const productUrl = `/product.html?name=bath accessories&category=${encodeURIComponent(
      item?.name
    )}&index=${index}`;

    ba_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Bath Accessories by Durity Bath" aria-label="Browse ${productName} bath accessories collection">${productName}</a>`;
    md_ba_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Bath Accessories by Durity Bath" aria-label="Browse ${productName} bath accessories collection">${productName}</a>`;
  });

  const faucets_part = durityProducts["faucet parts"]?.products;
  const fp_nested_d = document.getElementById("fp-nested-d");
  const md_fp_nested_d = document.getElementById("md-fp-nested-d");
  faucets_part?.forEach((item, index) => {
    const productName =
      item?.name?.charAt(0)?.toUpperCase() +
      item?.name?.slice(1)?.toLowerCase();
    const productUrl = `/product.html?name=faucet parts&category=${encodeURIComponent(
      item?.name
    )}&index=${index}`;

    fp_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Faucet Parts by Durity Bath" aria-label="Browse ${productName} faucet parts collection">${productName}</a>`;
    md_fp_nested_d.innerHTML += `<a class="" href="${productUrl}" title="View ${productName} - Premium Faucet Parts by Durity Bath" aria-label="Browse ${productName} faucet parts collection">${productName}</a>`;
  });
};
setCategoryItems();
const getLocation_path = () => {
  const params = new URLSearchParams(window.location.search);
  const queryObj = {};
  params.forEach((value, key) => {
    queryObj[key] = value;
  });
  const path = window.location.pathname;
  let name = path.substring(path.lastIndexOf("/") + 1);
  name = name.replace(".html", "");
  const path_container = document.getElementById("location-path-container");
  const mapped = {
    service: "Services",
    products: "Categories",
    product: "Products",
    productitem: "Product",
  };
  name = mapped[name];
  if (name === "Product") {
    name = `/<a class='text-black' href="/service.html">Services</a>/<a class='text-black' href="/products.html?name=${queryObj["name"]}">Categories</a>/Products/Product`;
  }
  if (name === "Products") {
    name = `/<a class='text-black' href="/service.html">Services</a>/<a class='text-black' href="/products.html?name=${queryObj["name"]}">Categories</a>/Products/`;
  }
  if (name === "Categories") {
    name = `/<a class='text-black' href="/service.html">Services</a>/Categories/`;
  }
  if (path_container) {
    path_container.innerHTML += name;
    // path_container.innerHTML += `<a href="#">hii</a>`;
  }
};
getLocation_path();
