class ProductManager {
  constructor() {
    this.products = [];
    this.filteredProducts = [];
    this.currentCategory = 'all';
    this.init();
  }

  async init() {
    await this.loadProducts();
    this.renderProducts();
    this.setupEventListeners();
  }

  async loadProducts() {
    try {
      const response = await fetch('products.json');
      this.products = await response.json();
      this.filteredProducts = [...this.products];
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  filterProducts(category) {
    this.currentCategory = category;
    
    if (category === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => {
        if (category === 'new') return product.isNew;
        if (category === 'bestseller') return product.isBestseller;
        if (category === 'discount') return product.discount > 0;
        return product.category === category;
      });
    }
    
    this.renderProducts();
  }

  renderProducts() {
    const productContainer = document.getElementById('product-container');
    
    if (!productContainer) return;
    
    productContainer.innerHTML = this.filteredProducts.map(product => `
      <div class="product-card" data-id="${product.id}" data-category="${product.category}">
        <div class="product-badges">
          ${product.isNew ? '<span class="badge new">جدید</span>' : ''}
          ${product.isBestseller ? '<span class="badge bestseller">پرفروش</span>' : ''}
          ${product.discount > 0 ? `<span class="badge discount">${product.discount}% تخفیف</span>` : ''}
        </div>
        <div class="product-image">
          <img src="${product.image}" alt="${product.name.fa}" loading="lazy">
          <button class="quick-view">نمایش سریع</button>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name.fa}</h3>
          <div class="product-price-wrapper">
            ${product.discount > 0 ? `
              <span class="old-price">€${product.price.toFixed(2)}</span>
              <span class="product-price" data-price="${product.price * (1 - product.discount/100)}">
                €${(product.price * (1 - product.discount/100)).toFixed(2)}
              </span>
            ` : `
              <span class="product-price" data-price="${product.price}">€${product.price.toFixed(2)}</span>
            `}
          </div>
          <button class="add-to-cart">افزودن به سبد</button>
        </div>
      </div>
    `).join('');
  }

  setupEventListeners() {
    // Tab filtering
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.filterProducts(button.dataset.category);
      });
    });
    
    // Quick View
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-view')) {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.dataset.id;
        this.showQuickView(productId);
      }
    });
    
    // Close Quick View
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal-overlay')) {
        this.closeQuickView();
      }
    });
  }

  showQuickView(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.querySelector('.quick-view-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
      <div class="product-gallery">
        <div class="main-image">
          <img src="${product.image}" alt="${product.name.fa}">
        </div>
      </div>
      <div class="product-details">
        <h2>${product.name.fa}</h2>
        <div class="product-meta">
          <span class="category">دسته: ${product.category}</span>
          <span class="availability">موجود در انبار</span>
        </div>
        
        <div class="price-wrapper">
          ${product.discount > 0 ? `
            <span class="old-price">€${product.price.toFixed(2)}</span>
            <span class="price">€${(product.price * (1 - product.discount/100)).toFixed(2)}</span>
            <span class="discount">${product.discount}% تخفیف</span>
          ` : `
            <span class="price">€${product.price.toFixed(2)}</span>
          `}
        </div>
        
        <div class="product-description">
          <h3>توضیحات محصول</h3>
          <p>${product.description.fa}</p>
        </div>
        
        <div class="product-actions">
          <div class="quantity-selector">
            <button class="qty-btn minus">−</button>
            <input type="number" value="1" min="1">
            <button class="qty-btn plus">+</button>
          </div>
          <button class="add-to-cart">افزودن به سبد</button>
        </div>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeQuickView() {
    const modal = document.querySelector('.quick-view-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize Product Manager
document.addEventListener('DOMContentLoaded', () => {
  const productManager = new ProductManager();
});
