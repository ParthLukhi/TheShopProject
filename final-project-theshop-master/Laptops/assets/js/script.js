// TOGGLE BUTTON CODE STARTS
const toggleBtn = document.querySelector(".toggle-btn");
const mainNavList = document.querySelector(".main-nav-list");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  mainNavList.classList.toggle("active");
})

document.querySelectorAll(".main-nav-link").forEach(e => e.addEventListener("click", () => {
  toggleBtn.classList.remove("active");
  mainNavList.classList.remove("active");
}))

// Hiding the menu when you click outside it
document.addEventListener("click", function (e) {
  if (!toggleBtn.contains(e.target) && !mainNavList.contains(e.target)) {
    toggleBtn.classList.remove("active");
    mainNavList.classList.remove("active");
  }
})
// TOGGLE BUTTON CODE ENDS

// SUB NAV MENU (inside 'Products') CODE STARTS
const subNavToggleBtn = document.querySelector(".has-sub-nav-list");
const subNavList = document.querySelector(".sub-nav-list");

subNavToggleBtn.addEventListener("click", () => {
  subNavToggleBtn.classList.toggle("active");
  subNavList.classList.toggle("active");
})

document.querySelectorAll(".sub-nav-link").forEach(e => e.addEventListener("click", () => {
  subNavToggleBtn.classList.remove("active");
  subNavList.classList.remove("active");
}))
// SUB NAV MENU (inside 'Products') CODE ENDS

// 'hero-img' SLIDESHOW CODE STARTS
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > x.length) {
    slideIndex = 1;
  }

  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
// 'hero-img' SLIDESHOW CODE ENDS


// 'laptops.html' page creation starts here
const laptops = [
  {
    image: 'assets/img/laptops/laptop-01.jpg',
    title: 'ASUS TUF Gaming F15 (2021), 15.6" (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GTX 1650 ...',
    review: 5,
    price: 890,
    description: [
      'Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)',
      'Access to over 100 high-quality PC games on Windows 11',
      'One-month subscription to Xbox Game Pass that\'s included with the purchase of your device',
      'Operating System: Pre-loaded Windows 11 Home with lifetime validity',
      'Memory: 8GB DDR4 2933MHz RAM, Support up to 32GB using 2x SO-DIMM Slot',
      'Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch SATA Slot for Storage Expansion',
      'Graphics: Dedicated NVIDIA GeForce GTX 1650 GDDR6 4GB VRAM',
      'Display: 15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC'
    ]
  },
  {
    image: 'assets/img/laptops/laptop-02.jpg',
    title: 'Hp Victus Latest AMD Ryzen 5 5600H Processor 16.1 Inches Fhd Gaming Laptop (8Gb Ram/512Gb Ssd/4Gb...',
    review: 3,
    price: 980,
    description: [
      'Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)',
      'Access to over 100 high-quality PC games on Windows 11',
      'One-month subscription to Xbox Game Pass that\'s included with the purchase of your device',
      'Operating System: Pre-loaded Windows 11 Home with lifetime validity',
      'Memory: 8GB DDR4 2933MHz RAM, Support up to 32GB using 2x SO-DIMM Slot',
      'Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch SATA Slot for Storage Expansion',
      'Graphics: Dedicated NVIDIA GeForce GTX 1650 GDDR6 4GB VRAM',
      'Display: 15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC'
    ]
  },
  {
    image: 'assets/img/laptops/laptop-03.jpg',
    title: 'HP 14s, 5th Gen AMD Ryzen 3- 8GB RAM/512GB SSD 14 inch(35.6cm) Laptop, FHD IPS Micro-Edge Display...',
    review: 4,
    price: 849,
    description: [
      'Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)',
      'Access to over 100 high-quality PC games on Windows 11',
      'One-month subscription to Xbox Game Pass that\'s included with the purchase of your device',
      'Operating System: Pre-loaded Windows 11 Home with lifetime validity',
      'Memory: 8GB DDR4 2933MHz RAM, Support up to 32GB using 2x SO-DIMM Slot',
      'Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch SATA Slot for Storage Expansion',
      'Graphics: Dedicated NVIDIA GeForce GTX 1650 GDDR6 4GB VRAM',
      'Display: 15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC'
    ]
  },
  {
    image: 'assets/img/laptops/laptop-04.jpg',
    title: 'Lenovo Ideapad 3 AMD Ryzen 5 5500U 15.6" FHD Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office...',
    review: 3,
    price: 1090,
    description: [
      'Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)',
      'Access to over 100 high-quality PC games on Windows 11',
      'One-month subscription to Xbox Game Pass that\'s included with the purchase of your device',
      'Operating System: Pre-loaded Windows 11 Home with lifetime validity',
      'Memory: 8GB DDR4 2933MHz RAM, Support up to 32GB using 2x SO-DIMM Slot',
      'Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch SATA Slot for Storage Expansion',
      'Graphics: Dedicated NVIDIA GeForce GTX 1650 GDDR6 4GB VRAM',
      'Display: 15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC'
    ]
  },
  {
    image: 'assets/img/laptops/laptop-05.jpg',
    title: 'Lenovo IdeaPad 3 Intel Celeron N4020 15.6" HD Laptop (8GB/256GB SSD/Windows 11/Office 2021/32GB ...',
    review: 5,
    price: 950,
    description: [
      'Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)',
      'Access to over 100 high-quality PC games on Windows 11',
      'One-month subscription to Xbox Game Pass that\'s included with the purchase of your device',
      'Operating System: Pre-loaded Windows 11 Home with lifetime validity',
      'Memory: 8GB DDR4 2933MHz RAM, Support up to 32GB using 2x SO-DIMM Slot',
      'Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch SATA Slot for Storage Expansion',
      'Graphics: Dedicated NVIDIA GeForce GTX 1650 GDDR6 4GB VRAM',
      'Display: 15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC'
    ]
  },
  {
    image: 'assets/img/laptops/laptop-06.jpg',
    title: 'Hp Victus Latest Amd Ryzen 7-5800H Processor 16.1 Inches Fhd Gaming Laptop (16Gb Ram/ 512Gb Ssd/4...',
    review: 4,
    price: 870,
    description: [
      'Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)',
      'Access to over 100 high-quality PC games on Windows 11',
      'One-month subscription to Xbox Game Pass that\'s included with the purchase of your device',
      'Operating System: Pre-loaded Windows 11 Home with lifetime validity',
      'Memory: 8GB DDR4 2933MHz RAM, Support up to 32GB using 2x SO-DIMM Slot',
      'Storage: 512GB M.2 NVMe PCIe 3.0 SSD with empty 1x 2.5-inch SATA Slot for Storage Expansion',
      'Graphics: Dedicated NVIDIA GeForce GTX 1650 GDDR6 4GB VRAM',
      'Display: 15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC'
    ]
  }
];

function addCard() {

  let html = '';

  setTimeout(() => {
    for (let i = 0; i < laptops.length; i++) {
      html += '<a class="card-link" href="laptop-info.html?id=' + i + '">';
      html += '<div class="card">';
      html += '<div class="card-img">';
      html += '<img src="' + laptops[i].image + '" alt="Laptop Image" />';
      html += '</div>';
      html += '<div class="card-info">';
      html += '<h1 class="card-title">' + laptops[i].title.substring(0, 87) + '...</h1>';
      html += '<ul class="rating-box">';
      for (let j = 0; j < laptops[i].review; j++) {
        html += '<li><span class="rating"><i class="fa fa-star"></i></span></li>';
      }
      html += '</ul>';
      html += '<div class="price-box">';
      html += '<sup class="price-tag-sub">$</sup><span class="price-tag">' + laptops[i].price + '</span><sup class="price-tag-sub">99</sup>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      html += '</a>';
    }
    document.getElementById("card-container").innerHTML = html;
  }, 300);
}

addCard();

// 'laptops.html' page creation ends here



// 'laptop-info.html' page creation starts here
const url = window.location.search;
const query = new URLSearchParams(url);
const id = query.get('id');

function addInfo() {
  let html = '';

  setTimeout(() => {
    html += '<div class="detail-card-img">';
    html += '<img src="' + laptops[id].image + '" alt="Laptop Image" />';
    html += '</div>';
    html += '<div class="detail-desc">';
    html += '<h1 class="detail-heading-primary">' + laptops[id].title.substring(0, 87) + '...</h1>';
    html += '<ul class="rating-box">';
    for (let j = 0; j < laptops[id].review; j++) {
      html += '<li><span class="rating"><i class="fa fa-star"></i></span></li>';
    }
    html += '</ul>';
    html += '<div class="price-box">';
    html += '<sup class="price-tag-sub">$</sup><span class="price-tag">' + laptops[id].price + '</span><sup class="price-tag-sub">99</sup>';
    html += '</div>';
    html += '<h2 class="detail-sub-heading">About this item :</h2>';
    html += '<ul class="about-box">';
    for (let k = 0; k < laptops[id].description.length; k++) {
      html += '<li class="about">' + laptops[id].description[k] + '</li>';
    }
    html += '</ul>';
    html += '</div>';
    document.getElementById("content-detail-page").innerHTML = html;
  }, 300);
}

addInfo();
// 'laptop-info.html' page creation ends here


// SORTING FUNCTION CODE STARTS
const sortBtn = document.querySelector("#sort-btn");

// SORTING FUNCTION BEGINS
sortBtn.addEventListener("click", () => {
  const sortValue = document.querySelector("#sort-select").value;
  if (sortValue == "low-to-high") {
    laptops.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortValue == "high-to-low") {
    laptops.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sortValue == "customer-reviews") {
    laptops.sort((a, b) => {
      return b.review - a.review;
    });
  }
  // SORTING FUNCTION ENDS
  // 'laptops.html' page creation with sorted 'laptops' array by calling 'addCard()' function
  addCard();
});
// SORTING FUNCTION CODE ENDS


// CONTACT FORM CODE BEGINS
function contactFunc() {
  const message = "Welcome! your message has been received.";
  alert(message);
}
// CONTACT FORM CODE ENDS