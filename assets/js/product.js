// PRODUCT LIST
const products = [
  {
    id: 1,
    name: "Black Abaya",
    price: "₹1499",
    image: "../assets/images/features/1.jpeg",
    desc: "Elegant black abaya made from breathable, premium-grade fabric. Designed for both daily wear and special occasions with a timeless modest look."
  },
  {
    id: 2,
    name: "Pink Scarf",
    price: "₹299",
    image: "../assets/images/features/2.jpeg",
    desc: "Soft chiffon scarf perfect for casual or formal outfits. Lightweight, comfortable, and easy to style for a modest look."
  },
  {
    id: 3,
    name: "Modest Dress",
    price: "₹1899",
    image: "../assets/images/features/3.jpeg",
    desc: "A stylish full-coverage modest dress with premium stitching and elegant fall. Suitable for events or daily modest looks."
  },
  {
    id: 4,
    name: "Hijab Pins Set",
    price: "₹99",
    image: "../assets/images/features/4.jpeg",
    desc: "Pack of 6 high-quality anti-slip hijab pins. Gentle on fabric with strong grip."
  }
];

// GET ID FROM URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// FIND PRODUCT
const product = products.find(p => p.id == productId);

// DISPLAY DATA
if (product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productPrice").innerText = product.price;
  document.getElementById("productDesc").innerText = product.desc;
} else {
  document.querySelector(".product-details").innerHTML =
    "<h2 style='text-align:center; padding:40px;'>Product not found</h2>";
}

// BUTTON ACTIONS
document.querySelector(".add-to-cart").addEventListener("click", () => {
  alert("Item added to cart!");
});

document.querySelector(".add-to-wishlist").addEventListener("click", () => {
  alert("Added to wishlist ❤️");
});









