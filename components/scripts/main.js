/* The code provided is a comment section in JavaScript. It appears to be describing the purpose or
functionality of a carousel on a home page. However, the actual code for the carousel functionality
is not included in the provided snippet. */
// home page carausel js
class BannerCarousel {
  constructor() {
    // Easy to modify - just add or remove image paths here
    this.images = [
      "/public/home page/home page main banner/COVER 01.jpg",
      "/public/home page/home page main banner/COVER 2.jpg",
      "/public/home page/home page main banner/COVER 03.jpg",
      // '/public/home page/home page main banner/COVER 04.jpg'
      // Add more images here as needed
    ];

    this.currentSlide = 0;
    this.isAutoplay = true;
    this.autoplayInterval = 5000; // 5 seconds
    this.progressInterval = 50; // Update progress every 50ms
    this.autoplayTimer = null;
    this.progressTimer = null;
    this.progressValue = 0;

    this.slidesContainer = document.getElementById("carouselSlides");
    this.dotsContainer = document.getElementById("carouselDots");
    this.progressBar = document.getElementById("progressBar");
    this.playPauseBtn = document.getElementById("playPauseBtn");

    this.init();
  }

  init() {
    this.createSlides();
    this.createDots();
    this.startAutoplay();
    this.addEventListeners();
  }

  createSlides() {
    if (this.slidesContainer) {
      this.slidesContainer.innerHTML = "";
    }
    this.images.forEach((src, index) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide loading";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Banner ${index + 1}`;
      img.loading = "lazy";

      img.onload = () => {
        slide.classList.remove("loading");
      };

      img.onerror = () => {
        slide.classList.remove("loading");
        img.src =
          "https://placehold.co/1920x1080/667eea/white?text=Banner+" +
          (index + 1);
      };

      slide.appendChild(img);
      if (this.slidesContainer) {
        this.slidesContainer.appendChild(slide);
      }
    });
  }

  createDots() {
    if (this.dotsContainer) {
      this.dotsContainer.innerHTML = "";
    }

    this.images.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      if (index === 0) dot.classList.add("active");

      dot.addEventListener("click", () => this.goToSlide(index));
      if (this.dotsContainer) {
        this.dotsContainer.appendChild(dot);
      }
    });
  }

  updateSlidePosition() {
    const translateX = -this.currentSlide * 100;
    if (this.slidesContainer) {
      this.slidesContainer.style.transform = `translateX(${translateX}%)`;
    }

    if (this.dotsContainer) {
      this.updateDots();
    }

    // this.resetProgress();
  }

  updateDots() {
    const dots = this.dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide);
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlidePosition();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.updateSlidePosition();
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
    this.updateSlidePosition();
  }

  startAutoplay() {
    if (!this.isAutoplay) return;

    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoplayInterval);

    // this.startProgress();
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
    this.stopProgress();
  }

  toggleAutoplay() {
    this.isAutoplay = !this.isAutoplay;
    this.playPauseBtn.textContent = this.isAutoplay ? "⏸️" : "▶️";

    if (this.isAutoplay) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }

  startProgress() {
    this.progressValue = 0;
    this.progressTimer = setInterval(() => {
      this.progressValue +=
        (this.progressInterval / this.autoplayInterval) * 100;
      this.progressBar.style.width = `${this.progressValue}%`;

      if (this.progressValue >= 100) {
        // this.resetProgress();
      }
    }, this.progressInterval);
  }

  stopProgress() {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  }

  resetProgress() {
    this.progressValue = 0;
    this.progressBar.style.width = "0%";

    // if (this.isAutoplay) {
    //   this.stopProgress();
    //   this.startProgress();
    // }
  }

  addEventListeners() {
    // Pause on hover
    if (this.slidesContainer) {
      this.slidesContainer.addEventListener("mouseenter", () => {
        if (this.isAutoplay) this.stopAutoplay();
      });

      this.slidesContainer.addEventListener("mouseleave", () => {
        if (this.isAutoplay) this.startAutoplay();
      });
      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") this.prevSlide();
        if (e.key === "ArrowRight") this.nextSlide();
        if (e.key === " ") {
          e.preventDefault();
          this.toggleAutoplay();
        }
      });

      // Touch/swipe support
      let startX = 0;
      let endX = 0;

      this.slidesContainer.addEventListener(
        "touchstart",
        (e) => {
          startX = e.touches[0].clientX;
        },
        { passive: true }
      );

      this.slidesContainer.addEventListener(
        "touchend",
        (e) => {
          endX = e.changedTouches[0].clientX;
          const diff = startX - endX;

          if (Math.abs(diff) > 50) {
            // Minimum swipe distance
            if (diff > 0) {
              this.nextSlide();
            } else {
              this.prevSlide();
            }
          }
        },
        { passive: true }
      );
    }
  }

  // Public method to easily add more images
  addImages(newImages) {
    this.images = [...this.images, ...newImages];
    this.createSlides();
    this.createDots();
    this.updateSlidePosition();
  }

  // Public method to replace all images
  setImages(newImages) {
    this.images = newImages;
    this.currentSlide = 0;
    this.createSlides();
    this.createDots();
    this.updateSlidePosition();
  }
}
// Initialize carousel
const HomePageCarousel = new BannerCarousel();

// Example of how to add more images dynamically:
// carousel.addImages([
//     '/path/to/new-image1.jpg',
//     '/path/to/new-image2.jpg'
// ]);
// Example of how to replace all images:
HomePageCarousel.setImages([
  "/public/home page/home page main banner/COVER 01.jpg",
  "/public/home page/home page main banner/COVER 2.jpg",
  "/public/home page/home page main banner/DURITY WEB BANNER 2.jpg",
  // '/path/to/image3.jpg'
]);

/* The `// recent view section` in the JavaScript code is responsible for managing the recent view
products section on a webpage. It includes functionalities such as retrieving saved product lists
from local storage, creating product cards for display, rendering the products on the webpage, and
handling scrolling interactions within the recent view product carousel. */
//  recent view section
// const prevItems = localStorage.getItem("items");
const prevItems = sessionStorage.getItem('items')
const recentViewContainer = document.getElementById("recentProducts");
const productList = document.getElementById("recent-view-product-container");
const scrollLeftBtn = document.getElementById("recentScrollLeft");
const scrollRightBtn = document.getElementById("recentScrollRight");
const productContainer = document.querySelector(".product-container");
const scrollAmount = 300; // scroll variable of recent view product section
let isDown = false;
let startX;
let scrollLeft;
let products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    code: "SN-001",
    image: "/api/placeholder/200/200",
    url: "/product/1",
  },
  {
    id: 2,
    name: "Leather Backpack",
    code: "BP-002",
    image: "/api/placeholder/200/200",
    url: "/product/2",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    code: "WH-003",
    image: "/api/placeholder/200/200",
    url: "/product/3",
  },
  // Add more products as needed
];
function getRecentViewProductList() {
  // this function is used to takeout all the saved list of product from the local storage which is opened by the user
  let localStorageValue = JSON.parse(prevItems);
  localStorageValue = localStorageValue?.value;
  if (
    !localStorageValue ||
    (Array.isArray(localStorageValue) && localStorageValue?.length <= 0)
  ) {
    document.getElementById("recentProducts").style.display = "none";
  }
  return localStorageValue;
}
function createProductCard(product) {
  // this function created the recent view product card
  const productList = document.getElementById("productList");
  let src = `${product.imageSrc}${product.code}.jpg`;
  const img = new Image();
  img.src = src;
  img.onload = () => {
    productList.innerHTML += `
        <a href="${product.openPath}" class="productCard">
            <img src="${src}" alt="${product.name}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `;
  };
  img.onerror = () => {
    productList.innerHTML += `
        <a href="${product.openPath}" class="productCard">
            <img src="/public/icons/brokenImage.svg" alt="" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `;
  };
}
function renderProducts() {
  if (products?.length >= 2) {
    recentViewContainer.style.display = "block";
    products?.map((product) => createProductCard(product));
  } else {
    recentViewContainer.style.display = "none";
  }
}
if (recentViewContainer) {
  products = getRecentViewProductList();
  renderProducts();
}

if (productContainer) {
  productContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    productContainer.style.cursor = "grabbing";
    startX = e.pageX - productContainer.offsetLeft;
    scrollLeft = productContainer.scrollLeft;
  });

  productContainer.addEventListener("mouseleave", () => {
    isDown = false;
    productContainer.style.cursor = "default";
  });

  productContainer.addEventListener("mouseup", () => {
    isDown = false;
    productContainer.style.cursor = "default";
  });

  productContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - productContainer.offsetLeft;
    const walk = (x - startX) * 2;
    productContainer.scrollLeft = scrollLeft - walk;
  });
}
if (scrollLeftBtn) {
  scrollLeftBtn.addEventListener("click", () => {
    productList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}

if (scrollRightBtn) {
  scrollRightBtn.addEventListener("click", () => {
    productList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

/* The `// our trending product section` in the JavaScript code is responsible for creating a list of
trending products and displaying them in a carousel-like manner. It includes functions to create
individual product cards, render the trending products on the webpage, and handle scrolling
functionality for the carousel. */
// our trending product section
const trendingProductList = document.getElementById("product-container");
const trendingScrollLeftBtn = document.getElementById("scrollLeft");
const trendingScrollRightBtn = document.getElementById("scrollRight");
const trendingScrollAmount = 300; // Amount to scroll (px)
function createTrendingProductCard(product) {
  const productList = document.getElementById("productList");
  let src = `${product.imageSrc}${product.code}.jpg`;
  const img = new Image();
  img.src = src;
  img.onload = () => {
    productList.innerHTML += `
        <a href="${product.url}" class="productCard">
            <img src="${image}" alt="${product.name}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `;
  };
  img.onerror = () => {
    productList.innerHTML += `
        <a href="${product.url}" class="productCard">
            <img src="/public/icons/brokenImage.svg" alt="" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-code">Code: ${product.code}</div>
        </a>
    `;
  };
}
function renderTrendingProducts() {
  products.map((product) => createTrendingProductCard(product));
}
// Initialize the product list
// renderTrendingProducts();

function updateScrollButtons() {
  const maxScrollLeft =
    trendingProductList.scrollWidth - trendingProductList.clientWidth;

  // If at start, hide left button
  if (trendingProductList.scrollLeft <= 0) {
    trendingScrollLeftBtn.style.display = "none";
  } else {
    trendingScrollLeftBtn.style.display = "block";
  }

  // If at end, hide right button
  if (trendingProductList.scrollLeft >= maxScrollLeft - 1) {
    trendingScrollRightBtn.style.display = "none";
  } else {
    trendingScrollRightBtn.style.display = "block";
  }
}
if (trendingScrollLeftBtn) {
  trendingScrollLeftBtn.addEventListener("click", () => {
    trendingProductList.scrollBy({
      left: -trendingScrollAmount,
      behavior: "smooth",
    });
    //   updateScrollButtons()
  });
}
if (trendingScrollRightBtn) {
  trendingScrollRightBtn.addEventListener("click", () => {
    trendingProductList.scrollBy({
      left: trendingScrollAmount,
      behavior: "smooth",
    });
    //   updateScrollButtons()
  });
}

/* The `// our innovations section` in the JavaScript code is responsible for handling a carousel of
innovative products. It includes functionality to center a card within the carousel, set an active
card, and scroll the carousel left or right based on user interaction. The section also contains
event listeners for the cards to allow users to interact with the carousel by clicking on the cards. */
// our innovations section
const carousel = document.getElementById("productCarousel");
const cards = document.querySelectorAll(".inovative-product");
let activeIndex = Math.floor(cards.length / 2); // Start with the center card
// Function to center a card
function centerCard(index) {
  const card = cards[index];
  const rect = card.getBoundingClientRect();
  const centerPosition = rect.left + rect.width / 2;
  const offset = window.innerWidth / 2 - centerPosition;
  carousel.scrollBy({ left: -offset, behavior: "smooth" });
}
// Function to set active card
function setActiveCard(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
  centerCard(index);
}
// Add click event listeners to cards
// cards.forEach((card, index) => {
//     card.addEventListener('click', () => {
//         activeIndex = index;
//         setActiveCard(activeIndex);
//     });
// });
// setActiveCard(activeIndex-1);
// Scroll buttons functionality
function scrollCarousel(direction) {
  if (direction === "left" && activeIndex > 0) {
    activeIndex--;
  } else if (direction === "right" && activeIndex < cards.length - 1) {
    activeIndex++;
  }
  setActiveCard(activeIndex);
}

/* The above code is a comment section in JavaScript. It is used to provide information about the code
for other developers or for documentation purposes. The code inside the comment section will not be
executed by the JavaScript interpreter. */
// home page contact form
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
function showError(elementId, message) {
  const error = document.getElementById(elementId + "Error");
  error.style.display = "block";
  error.textContent = message;
}
function hideError(elementId) {
  document.getElementById(elementId + "Error").style.display = "none";
}
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (name === "") {
      showError("name", "Please enter your name");
      isValid = false;
    } else {
      hideError("name");
    }

    const email = document.getElementById("email").value.trim();
    if (!validateEmail(email)) {
      showError("email", "Please enter a valid email address");
      isValid = false;
    } else {
      hideError("email");
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
      showError("message", "Please enter your message");
      isValid = false;
    } else {
      hideError("message");
    }

    if (isValid) {
      const form = e.target;
      const formData = new FormData(form);

      fetch("https://formspree.io/f/xblzrjgq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            successMessage.style.display = "block";
            // alert('Message send successfully')
            form.reset();
          } else {
            response.json().then((data) => {
              //   document.getElementById("response").innerText =
              //     data.errors ? data.errors.map(e => e.message).join(", ") : "Oops! Something went wrong.";
              successMessage.innerHTML = "Oops! Something went wrong.";
              // alert('oops! something wents wrong.')
            });
          }
        })
        .catch((error) => {
          //   document.getElementById("response").innerText = "Error sending message.";
          successMessage.innerHTML = "Error sending message.";
          // alert('error in sending message ')
          // console.error("Error:", error);
        });
      // form.reset();
      // successMessage.style.display = "block";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    }
  });
}

["name", "email", "message"].forEach((id) => {
  let dc = document.getElementById(id);
  if (dc) {
    dc.addEventListener("input", () => {
      hideError(id);
    });
  }
});

// app section
//  js for animation of screen shot
// Add smooth parallax effect to phone mockups
// document.addEventListener('mousemove', (e) => {
//   const phones = document.querySelectorAll('.phone-mockup');
//   const rect = document.querySelector('.phones-container').getBoundingClientRect();
//   const centerX = rect.left + rect.width / 2;
//   const centerY = rect.top + rect.height / 2;

//   const moveX = (e.clientX - centerX) / 40;
//   const moveY = (e.clientY - centerY) / 40;

//   phones.forEach((phone, index) => {
//     const depth = index === 0 ? 1 : 0.7;
//     const baseRotation = index === 0 ? -15 : 15;
//     const baseTranslateX = index === 0 ? 40 : -40;
//     const baseTranslateY = index === 0 ? 0 : 40;

//     phone.style.transform = `
//       perspective(1000px)
//       rotateY(${baseRotation + moveX * depth}deg)
//       rotateX(${-moveY * depth}deg)
//       translateX(${baseTranslateX}px)
//       translateY(${baseTranslateY}px)
//     `;
//   });
// });

/* The code provided is a comment section in JavaScript. It appears to be describing the purpose or
functionality of a specific section of code related to the home page about us section animation.
Comments in code are used to provide explanations, document code, or disable certain parts of the
code without affecting the program's functionality. */
// home page  about us section animation
// Animated number counting
const stats = document.querySelectorAll(".stat-number");

stats.forEach((stat) => {
  const targetValue = parseInt(stat.getAttribute("data-value"));
  const duration = 2000; // 2 seconds
  const step = targetValue / (duration / 16); // 60fps
  let current = 0;

  const updateValue = () => {
    current += step;
    if (current < targetValue) {
      stat.textContent = Math.round(current).toLocaleString();
      requestAnimationFrame(updateValue);
    } else {
      stat.textContent = targetValue.toLocaleString();
    }
  };

  // Start animation when element is in view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      updateValue();
      observer.disconnect();
    }
  });

  observer.observe(stat);
});

/* The above code is a comment section in JavaScript. It is used to provide information about the code,
explain its purpose, or make notes for future reference. In this case, it appears to be a comment
related to a "catalogue section" in the code. Comments are ignored by the JavaScript interpreter and
do not affect the execution of the code. */
// for catalogue section

let cataloguePopupOverlay = document.getElementById("cataloguePopupOverlay");
function handleDownload(type) {
  // Replace this with your actual download logic

  const card = event.target.closest(".cat-download-card");
  const btn = card.querySelector(".cat-download-btn");
  const originalContent = btn.innerHTML;

  // Show loading state
  btn.innerHTML = `
      <svg class="cat-animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
      </svg>
      Downloading...
    `;

  // Reset button after 2 seconds (remove this in production)
  setTimeout(() => {
    btn.innerHTML = originalContent;
  }, 2000);
}
function openCatalogueF() {
  document.getElementById("cataloguePopupOverlay").style.display = "flex";
}
function closePopup() {
  document.getElementById("cataloguePopupOverlay").style.display = "none";
  resetForm();
}
function resetForm() {
  document.getElementById("downloadForm").reset();
  hideAllErrors();
}
function hideAllErrors() {
  var errors = document.querySelectorAll(".error");
  for (var i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function validateMobile(mobile) {
  return /^\d{10}$/.test(mobile);
}
function handleSubmit(event) {
  const form = event.target;
  const formData = new FormData(form);
  event.preventDefault();
  hideAllErrors();

  // var name = document.getElementById('name').value;
  // var email = document.getElementById('email').value;
  // var mobile = document.getElementById('mobile').value;
  // var business = document.getElementById('business').value;
  // var message = document.getElementById('message').value;

  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var mobile = form.elements["mobile"].value;
  var business = form.elements["business"].value;
  var message = form.elements["message"].value;

  var isValid = true;

  if (!name.trim()) {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  }

  if (!validateEmail(email)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  if (!validateMobile(mobile)) {
    document.getElementById("mobileError").style.display = "block";
    isValid = false;
  }

  if (!business.trim()) {
    document.getElementById("businessError").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    // const form = event.target;
    const formData = new FormData(form);
    console.log(formData)
    document.getElementById("catalogue-dn-form").innerText = "Please wait..";

    fetch("https://formspree.io/f/mgvlrkjy", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          //   successMessage.style.display = "block";
          alert('Message send successfully')
          form.reset();
          window.open(
            "https://drive.google.com/file/d/13IMJyHvVRQcZ1x0dbf69iZV5O2_AE-BP/view",
            "_blank"
          );
          document.getElementById("cataloguePopupOverlay").style.display = "none";
        } else {
          alert('There was a problem with your submission.');
        }
      })
      .catch((error) => {
        //   document.getElementById("response").innerText = "Error sending message.";
        //   successMessage.innerHTML = 'Error sending message.'
        alert("Unable to send your message try again ");
        // console.error("Error:", error);
      });
    // form.reset();
    // successMessage.style.display = "block";

    //   setTimeout(() => {
    //     successMessage.style.display = "none";
    //   }, 3000);
  }
}
// Close popup when clicking outside
if (cataloguePopupOverlay) {
  cataloguePopupOverlay.onclick = function (event) {
    if (event.target === this) {
      closePopup();
    }
  };
}
