const products = [
  // Mobiles (5)
  { id: 1, name: "Realme 5G Smartphone", price: 12999, category: "mobiles", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Samsung Galaxy Phone", price: 15999, category: "mobiles", img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "iPhone Model X", price: 59999, category: "mobiles", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "Tablet Pro 10", price: 18999, category: "mobiles", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80" },
  { id: 5, name: "Mobile Accessories Pack", price: 799, category: "mobiles", img: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?auto=format&fit=crop&w=900&q=80" },

  // Fashion (5)
  { id: 6, name: "Men Casual T-Shirt", price: 499, category: "fashion", img: "https://images.unsplash.com/photo-1520975958225-5c8c1bdf5c44?auto=format&fit=crop&w=900&q=80" },
  { id: 7, name: "Women Stylish Dress", price: 999, category: "fashion", img: "https://images.unsplash.com/photo-1520975682031-a7a9791dffea?auto=format&fit=crop&w=900&q=80" },
  { id: 8, name: "Premium Sneakers", price: 2999, category: "fashion", img: "https://images.unsplash.com/photo-1528701800489-20be3c1ea6cb?auto=format&fit=crop&w=900&q=80" },
  { id: 9, name: "Leather Wallet", price: 399, category: "fashion", img: "https://images.unsplash.com/photo-1620799139507-2a76f79bde44?auto=format&fit=crop&w=900&q=80" },
  { id: 10, name: "Fashion Sunglasses", price: 699, category: "fashion", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80" },

  // Electronics (5)
  { id: 11, name: "Gaming Laptop i5", price: 49999, category: "electronics", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80" },
  { id: 12, name: "Wireless Headphones", price: 1999, category: "electronics", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80" },
  { id: 13, name: "Smart Watch Pro", price: 2499, category: "electronics", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80" },
  { id: 14, name: "Bluetooth Speaker", price: 1499, category: "electronics", img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80" },
  { id: 15, name: "Gaming Mouse RGB", price: 899, category: "electronics", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80" },

  // Home (5)
  { id: 16, name: "Modern Sofa Set", price: 12999, category: "home", img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80" },
  { id: 17, name: "Wooden Dining Table", price: 8999, category: "home", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
  { id: 18, name: "Comfortable Bed", price: 15999, category: "home", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
  { id: 19, name: "Home Wall Decor", price: 599, category: "home", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" },
  { id: 20, name: "Study Chair Premium", price: 1499, category: "home", img: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=900&q=80" },

  // Beauty (5)
  { id: 21, name: "Skincare Face Cream", price: 399, category: "beauty", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80" },
  { id: 22, name: "Perfume Spray", price: 799, category: "beauty", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80" },
  { id: 23, name: "Makeup Kit", price: 999, category: "beauty", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80" },
  { id: 24, name: "Hair Oil Bottle", price: 299, category: "beauty", img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=900&q=80" },
  { id: 25, name: "Body Lotion", price: 349, category: "beauty", img: "https://images.unsplash.com/photo-1620916566393-7e1f7e30a8b2?auto=format&fit=crop&w=900&q=80" }
];

let cart = [];
let currentCategory = "all";

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="info">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <br>
        <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function filterCategory(cat) {
  currentCategory = cat;

  const searchValue = document.getElementById("searchBox").value.toLowerCase();
  let filtered = products;

  if (cat !== "all") {
    filtered = filtered.filter(p => p.category === cat);
  }

  if (searchValue.trim() !== "") {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchValue));
  }

  renderProducts(filtered);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const found = cart.find(item => item.id === id);

  if (found) found.qty += 1;
  else cart.push({ ...product, qty: 1 });

  updateCartUI();
}

function changeQty(id, type) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  if (type === "plus") item.qty += 1;
  if (type === "minus") item.qty -= 1;

  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);

  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  document.getElementById("cartCount").innerText = cart.reduce((a,b)=>a+b.qty,0);

  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  if(cart.length === 0){
    cartItems.innerHTML = `<p style="color:#cbd5e1;">Cart is empty 😅</p>`;
  } else {
    cart.forEach(item => {
      total += item.price * item.qty;

      const div = document.createElement("div");
      div.className = "cartItem";
      div.innerHTML = `
        <div class="cartItemTop">
          <div>
            <h4>${item.name}</h4>
            <p>₹${item.price} x ${item.qty}</p>
          </div>
          <button onclick="removeItem(${item.id})">🗑</button>
        </div>

        <div class="cartActions">
          <button onclick="changeQty(${item.id},'minus')">-</button>
          <button onclick="changeQty(${item.id},'plus')">+</button>
        </div>
      `;
      cartItems.appendChild(div);
    });
  }

  document.getElementById("cartTotal").innerText = total;
}

function toggleCart(){
  document.getElementById("cartSidebar").classList.toggle("active");
}

function checkout(){
  if(cart.length === 0){
    alert("Cart is empty! Add products first ✅");
    return;
  }
  alert("✅ Order placed successfully!\nThank you for shopping with EasyShop!");
  cart = [];
  updateCartUI();
  toggleCart();
}

function scrollToProducts(){
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

/* SEARCH */
document.getElementById("searchBox").addEventListener("input", () => {
  filterCategory(currentCategory);
});

/* First load */
renderProducts(products);
updateCartUI();
