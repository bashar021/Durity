// Search functionality
const searchDropdown = document.querySelector(".search-dropdown");
const productsDropdown = document.querySelector(".products");

document.getElementById("navbar").innerHTML = `
 <nav id="my-nav">
      <a class="logo" href="/">
        <img id="log-png" src="/public//homepage//logo.svg" alt="Company Logo">
      </a>
      <div class="search-container">
        <input type="text" placeholder="Search..." id="searchInput" autocomplete="off">
        <span id="search_icon" class="search-icon">
          <img src="/public//icons//icon.svg" alt="">
        </span>
        <div class="search-dropdown" id="suggestions">
        </div>
      </div>
      <div class="hamburger">☰</div>

      <div class="nav-links">
        <a href="/" class="">Home</a>
        <div class="dropdown">
          <a href="/components/service.html" class=" flex">Products <img  class='arrow-icon ' src='/public/icons/downarrow.svg'/></a>
          <div class="dropdown-content">
            <div class="nested-dropdown">
              <a href="/components/products.html?name=faucets" class="products ">Faucets</a>
              <div class="nested-dropdown-content" id="faucets-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>

            <div class="nested-dropdown">
              <a href="/components/products.html?name=ptmt" class="products ">PTMT</a>
              <div class="nested-dropdown-content text-steelblue" id="ptmt-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=showers " class="products">Showers</a>
              <div class="nested-dropdown-content" id="showers-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=health faucet " class="products">Health Faucet</a>
              <div class="nested-dropdown-content" id="hf-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=bath accessories " class="products">Bath Accessories</a>
              <div class="nested-dropdown-content" id="ba-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=faucet parts " class="products">Faucet Parts</a>
              <div class="nested-dropdown-content" id="fp-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <a href="/components/service.html" class=" flex">Company <img  class='arrow-icon ' src='/public/icons/downarrow.svg'/></a>
          <div class="dropdown-content">
            <div class="dropdown">
              <a href="/components/about.html" class="">About Us</a>
            </div>
            <div class="dropdown">
              <a href="/components/carrerspage.html" class="">Careers</a>
            </div>
            <div class="dropdown">
              <a href="/components/events.html" class="">Events</a>
            </div>
            <div class="dropdown">
              <a href="/components/register.html" class="">Register</a>
            </div>
            

           
          </div>
        </div>
        <div class="dropdown">
          <a href="/components/catalogue.html" class="">E-Catalogue</a>
          <!-- <div class="dropdown-content">
            <span onclick="openCatalogueF()" class="dropdown-item">Faucets</span>
            <span onclick="openCatalogueF()" class="dropdown-item">PTMT</span>
          </div> -->
        </div>
       
      </div>
    </nav>
    <div class="sidebar">
      <div class="close-btn">×</div>
      <div class="nav-links">
        <a href="/" class="">Home</a>
        <div class="dropdown">
          <a href="#">Products</a>
          <div class="dropdown-content">
            <!-- <a href="/components/products.html?name=faucets">Faucets</a> -->
            <div class="nested-dropdown">
              <a href="/components/products.html?name=faucets" class="products">Faucets</a>
              <div class="nested-dropdown-content" id="md-faucets-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=ptmt" class="products">PTMT</a>
              <div class="nested-dropdown-content" id="md-ptmt-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=showers">Showers</a>
              <div class="nested-dropdown-content" id="md-showers-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=health faucet">Health Faucet</a>
              <div class="nested-dropdown-content" id="md-hf-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=bath accessories">Bath Accessories</a>
              <div class="nested-dropdown-content" id="md-ba-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
            <div class="nested-dropdown">
              <a href="/components/products.html?name=faucet parts">Faucet Parts</a>
              <div class="nested-dropdown-content" id="md-fp-nested-d">
                <!-- <a href="/components/products.html?name=ptmt&sub=taps">Taps</a> -->
              </div>
            </div>
          </div>
        </div>
        <a href="/components/about.html">About Us</a>
        <a href="/components/carrerspage.html">Careers</a>
        <a href="/components/events.html">Events</a>
        <a href="/components/catalogue.html">E-Catalogue</a>
        <a href="/components/register.html">Register</a>
      </div>
    </div>
    <div class="popup-overlay" id="popupOverlay">
      <div class="popup-form">
        <button class="close-btn" onclick="closePopup()">&times;</button>
        <div class="form-header">
          <p class="text-black text-h4">Please fill out the form below to download our catalog</p>
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
            <textarea id="message" name="message" rows="3"></textarea>
          </div>

          <button type="submit" class="submit-btn">Download Now</button>
        </form>
      </div>
    </div>
`;
const searchInput = document.getElementById("searchInput");
const catalogue_download_design_container = document.getElementById('catalogue-download-design-container')
if(catalogue_download_design_container){
  catalogue_download_design_container.innerHTML = `
  <div class="cat-download-card cat-ptmt-card  catalogue-card">
       <div>
         <img src="/public//homepage/Untitled-design.jpg" width="100%" alt="PTMT Catalogue Design" />
       </div>
       <div class="cat-card-header">
         <div class="cat-card-icon">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path
               d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
           </svg>
         </div>
         <h3 class="cat-card-title">PTMT Collection</h3>
       </div>
       <button class="cat-download-btn" onclick="openCatalogueF()">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
           <polyline points="7 10 12 15 17 10" />
           <line x1="12" y1="15" x2="12" y2="3" />
         </svg>
         Download Catalogue
       </button>
     </div>
 
     <!-- Faucets Card -->
     <div class="cat-download-card cat-faucets-card catalogue-card">
       <div>
         <img src="/public//homepage/Untitled2-design.png" width="100%" alt="PTMT Catalogue Design" />
       </div>
       <div class="cat-card-header">
         <div class="cat-card-icon">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M12 2v6m0 0v6m0-6h6m-6 0H6" />
           </svg>
         </div>
         <h3 class="cat-card-title">Faucets Collection</h3>
       </div>
       <button class="cat-download-btn" onclick="openCatalogueF()">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
           <polyline points="7 10 12 15 17 10" />
           <line x1="12" y1="15" x2="12" y2="3" />
         </svg>
         Download Catalogue
       </button>
     </div>
 `;
}

const customer_support = document.getElementById("customer-support")
if(customer_support){
  customer_support.innerHTML = `
   <div >
      <span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg></span>
      <h2 class=''>Dealer Locater</h2>
      <div id='customer-horizontal-line'></div>
      <p>Become an  Dealer – Where Quality and Reliability Flow Together.</p>
    </div>
    <div >
      <span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36"><path fill="currentColor" d="M23 26a1 1 0 0 1-1 1H8c-.22 0-.43.2-.61.33L4 30V14a1 1 0 0 1 1-1h3.86v-2H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89a1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25h-2Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11a1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4m1 18.94l-3.5-2.73a1 1 0 0 0-.61-.21H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h17a1.1 1.1 0 0 1 1 1.06Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg></span>
      <h2>Talk to an Expert</h2>
       <div id='customer-horizontal-line'></div>
      <p>Need Expert Advice? Talk to an Durity Experts  Today!</p>
    </div>
    <div >
      <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V4.37A3.93 3.93 0 0 1 7 .5a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 12.25a2 2 0 0 0 2-2V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25" stroke-width="1"/></svg></span>
      <h2>Customer Service Request</h2>
       <div id='customer-horizontal-line'></div>
      <p>Your Satisfaction, Our Priority – Contact Durity Customer Service Today!</p>
    </div>
  `
}
document.getElementById("search_icon").addEventListener("click", () => {
  document.getElementById("searchInput").style.display = "block";
  document.getElementById("search_icon").style.display = "none";
  document.getElementById("searchInput").style.width = "99%";
  const searchInput = document.getElementById('searchInput');
  const searchIcon = document.getElementById('search_icon');
  function handleClickOutside(event) {
    // Check if the click was outside the input and the search icon
    if (
        searchInput && !searchInput.contains(event.target) &&
        searchIcon && !searchIcon.contains(event.target)
    ) {
        // Check if the input is empty
        if (searchInput.value.trim() === '') {
            console.log('There is no value');
            document.getElementById("search_icon").style.display = "block";
            document.getElementById("searchInput").style.display = "none";
            document.getElementById("searchInput").style.width = "0%";
        }
        // Remove the event listener after checking
        document.removeEventListener('click', handleClickOutside);
    }
}
  document.addEventListener('click', handleClickOutside);
});
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
    suggestions.style.display = "none";
    md_suggestions.style.display = "none";
  }
});

function filterSuggestions(query) {
  suggestions.innerHTML = ""; // Clear previous suggestions
  const filtered = itemNames?.filter((item) =>
    item?.toLowerCase().includes(query.toLowerCase())
  );
  if (filtered.length > 0) {
    suggestions.style.display = "block"; // Show suggestions
    filtered.forEach((item) => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.textContent = item;
      div.onclick = () => {
        searchInput.value = item; // Set input value to clicked suggestion
        window.open(`/components/product.html?${itemsMapping[item]}`, "_self");
        suggestions.style.display = "none"; // Hide suggestions
      };
      suggestions.appendChild(div);
    });
  } else {
    suggestions.style.display = "none"; // Hide if no suggestions
  }
}

// Mobile sidebar functionality
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Mobile dropdown functionality
const mobileDropdowns = document.querySelectorAll(".sidebar .dropdown");

mobileDropdowns.forEach((dropdown) => {
  dropdown.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });
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
    faucets_nested_d.innerHTML += `<a class="" href="components/product.html?name=faucets&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_faucets_nested_d.innerHTML += `<a class="" href="components/product.html?name=faucets&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });

  ptmt.forEach((item, index) => {
    ptmt_nested_d.innerHTML += `<a class="" href="components/product.html?name=ptmt&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_ptmt_nested_d.innerHTML += `<a class="" href="components/product.html?name=ptmt&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  showers.forEach((item, index) => {
    showers_nested_d.innerHTML += `<a class="" href="components/product.html?name=showers&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_showers_nested_d.innerHTML += `<a class="" href="components/product.html?name=showers&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  health_faucets.forEach((item, index) => {
    hf_nested_d.innerHTML += `<a class="" href="components/product.html?name=health faucet&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_hf_nested_d.innerHTML += `<a class="" href="components/product.html?name=health faucet&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  bath_accessories.forEach((item, index) => {
    ba_nested_d.innerHTML += `<a  class=""href="components/product.html?name=bath accessories&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_ba_nested_d.innerHTML += `<a class="" href="components/product.html?name=bath accessories&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  const faucets_part = durityProducts["faucet parts"]?.products;
  const fp_nested_d = document.getElementById("fp-nested-d");
  const md_fp_nested_d = document.getElementById("md-fp-nested-d");
  faucets_part?.forEach((item, index) => {
    fp_nested_d.innerHTML += `<a class="" href="components/product.html?name=faucet parts&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_fp_nested_d.innerHTML += `<a  class="" href="components/product.html?name=faucet parts&category=${item?.name}&index=${index}">${item?.name}</a>`;
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
    name = `/<a class='text-black' href="/components/service.html">Services</a>/<a class='text-black' href="/components/products.html?name=${queryObj['name']}">Categories</a>/Products/Product`;
  }
  if (name === "Products") {
    name = `/<a class='text-black' href="/components/service.html">Services</a>/<a class='text-black' href="/components/products.html?name=${queryObj['name']}">Categories</a>/Products/`;
  }
  if (name === "Categories") {
    name = `/<a class='text-black' href="/components/service.html">Services</a>/Categories/`;
  }
  if(path_container){
    path_container.innerHTML += name;
    // path_container.innerHTML += `<a href="#">hii</a>`;
  }
 
};
getLocation_path();
