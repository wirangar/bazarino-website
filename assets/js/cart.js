class Cart {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('bazarino-cart')) || [];
    this.init();
  }

  init() {
    this.renderCartCount();
    this.setupEventListeners();
  }

  addItem(product, quantity = 1) {
    const existingItem = this.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        ...product,
        quantity
      });
    }
    
    this.save();
    this.renderCartCount();
  }

  removeItem(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.save();
    this.renderCartCount();
    this.renderCartItems();
  }

  updateQuantity(productId, newQuantity) {
    const item = this.cart.find(item => item.id === productId);
    
    if (item) {
      item.quantity = newQuantity;
      this.save();
      this.renderCartItems();
    }
  }

  clearCart() {
    this.cart = [];
    this.save();
    this.renderCartCount();
    this.renderCartItems();
  }

  save() {
    localStorage.setItem('bazarino-cart', JSON.stringify(this.cart));
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  renderCartCount() {
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
      const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
      countElement.textContent = totalItems;
      countElement.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  }

  renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartFooter = document.querySelector('.cart-footer');
    const totalPrice = document.querySelector('.total-price');
    
    if (this.cart.length === 0) {
      cartItemsContainer.innerHTML = '';
      cartEmpty.style.display = 'flex';
      cartFooter.style.display = 'none';
      return;
    }
    
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    
    cartItemsContainer.innerHTML = this.cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>€${item.price.toFixed(2)}</p>
          <div class="item-quantity">
            <button class="quantity-btn minus">−</button>
            <input type="number" value="${item.quantity}" min="1">
            <button class="quantity-btn plus">+</button>
          </div>
        </div>
        <button class="remove-item">&times;</button>
      </div>
    `).join('');
    
    totalPrice.textContent = `€${this.getTotal().toFixed(2)}`;
  }

  setupEventListeners() {
    // Open/Close Cart
    const cartBtn = document.querySelector('.cart-btn');
    const closeCart = document.querySelector('.close-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const cartSidebar = document.querySelector('.cart-sidebar');
    
    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        this.renderCartItems();
        cartSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
    
    if (closeCart) {
      closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    
    if (cartOverlay) {
      cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    
    // Add to Cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        const product = {
          id: productCard.dataset.id,
          name: productCard.querySelector('.product-name').textContent,
          price: parseFloat(productCard.querySelector('.product-price').dataset.price),
          image: productCard.querySelector('.product-image img').src
        };
        
        this.addItem(product);
        this.showNotification(`${product.name} به سبد خرید اضافه شد`);
      }
    });
    
    // Cart item interactions
    document.addEventListener('click', (e) => {
      const cartItem = e.target.closest('.cart-item');
      
      if (e.target.classList.contains('remove-item')) {
        this.removeItem(cartItem.dataset.id);
        this.showNotification('محصول از سبد خرید حذف شد');
      }
      
      if (e.target.classList.contains('quantity-btn')) {
        const input = cartItem.querySelector('input');
        let newQuantity = parseInt(input.value);
        
        if (e.target.classList.contains('plus')) {
          newQuantity++;
        } else if (e.target.classList.contains('minus') && newQuantity > 1) {
          newQuantity--;
        }
        
        input.value = newQuantity;
        this.updateQuantity(cartItem.dataset.id, newQuantity);
      }
    });
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Initialize Cart
document.addEventListener('DOMContentLoaded', () => {
  const cart = new Cart();
});
