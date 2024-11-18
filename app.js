const productsContainer = document.querySelector('.products-container');

async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    displayProducts(data.products.slice(0, 12)); 
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
  products.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="title">${product.title}</div>
        <div class="price">
          $${product.price.toFixed(2)} 
          <span class="old-price">$${(product.price * 1.1).toFixed(2)}</span>
        </div>
        <div class="colors">
          <span class="color-orange"></span>
          <span class="color-purple"></span>
          <span class="color-pink"></span>
        </div>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });
}

fetchProducts();
