// ============== FEATURED PRODUCTS DATA ==============
const featuredProductsData = [
  {
    id: 1,
    name: "Premium Black Abaya",
    image: "./assets/images/features/1.jpeg"
  },
  {
    id: 2,
    name: "Nida Fabric Abaya",
    image: "./assets/images/features/2.jpeg"
  },
  {
    id: 3,
    name: "Luxury White Khimar",
    image: "./assets/images/features/3.jpeg"
  },
  {
    id: 4,
    name: "Everyday Hijab Combo",
    image: "./assets/images/features/4.jpeg"
  },
  // {
  //   id: 5,
  //   name: "Elegant Party Abaya",
  //   price: "₹1999",
  //   image: "./assets/images/features/5.jpeg"
  // },
  // {
  //   id: 6,
  //   name: "Soft Jersey Hijab",
  //   price: "₹399",
  //   image: "./assets/images/features/6.jpeg"
  // }
];

// Render Featured Products on Home Page
const container = document.getElementById("featuredProducts");

function displayFeaturedProducts() {
  container.innerHTML = featuredProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayFeaturedProducts();

// When a product is clicked
function openProductPage(id) {
  window.location.href = `./pages/product.html?id=${id}`;
}
