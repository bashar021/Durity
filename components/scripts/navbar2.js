// Search functionality
const searchInput = document.getElementById("searchInput");
const searchDropdown = document.querySelector(".search-dropdown");
console.log(searchInput, searchDropdown);
const productsDropdown = document.querySelector(".products");
searchInput.addEventListener("input", () => {
  console.log("hiiii");
  if (searchInput.value !== "") {
    searchDropdown.classList.add("active");
    filterSuggestions(searchInput.value);
  } else {
    searchDropdown.classList.remove("active");
    suggestions.innerHTML = ""; // Clear previous suggestions
    searchDropdown.style.display = "none";
  }
});
document.getElementById('search_icon').addEventListener('click',()=>{
  // console.log('hii search icon clicked')
  document.getElementById('searchInput').style.display = "block";
  document.getElementById('search_icon').style.display = "none";
  document.getElementById('searchInput').style.width = '99%'
})
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

const setCategoryItems = () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  // console.log(durityProducts[name], name)
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
  console.log(ptmt, faucets_nested_d);
  faucet.forEach((item, index) => {
    faucets_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=faucets&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_faucets_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=faucets&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });

  ptmt.forEach((item, index) => {
    ptmt_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=ptmt&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_ptmt_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=ptmt&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  showers.forEach((item, index) => {
    showers_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=showers&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_showers_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=showers&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  health_faucets.forEach((item, index) => {
    hf_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=health faucet&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_hf_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=health faucet&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  bath_accessories.forEach((item, index) => {
    ba_nested_d.innerHTML += `<a  class="text-steelblue"href="components/product.html?name=bath accessories&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_ba_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=bath accessories&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
  const faucets_part = durityProducts["faucet parts"]?.products;
  const fp_nested_d = document.getElementById("fp-nested-d");
  const md_fp_nested_d = document.getElementById("md-fp-nested-d");
  faucets_part?.forEach((item, index) => {
    fp_nested_d.innerHTML += `<a class="text-steelblue" href="components/product.html?name=faucet parts&category=${item?.name}&index=${index}">${item?.name}</a>`;
    md_fp_nested_d.innerHTML += `<a  class="text-steelblue" href="components/product.html?name=faucet parts&category=${item?.name}&index=${index}">${item?.name}</a>`;
  });
};
setCategoryItems();

const getLocation_path = ()=>{
  const path = window.location.pathname;
  let name = path.substring(path.lastIndexOf('/') + 1);
  name = name.replace('.html','')
  const path_container = document.getElementById('location-path-container')
  console.log('hii',name)
  const mapped={
    service:"Services",
    products:'Categories',
    product:'Products',
    productitem:'Product'
  }
  name = mapped[name]
  if(name === 'Product'){
    name = 'Services/Categories/Products/Product'
  }
  if(name === 'Products'){
     name = 'Services/Categories/Products/'
  }
  if(name === 'Categories'){
    name = 'Services/Categories/'
  }
  path_container.innerHTML += `/${name}`
}
getLocation_path()


