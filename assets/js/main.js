document.addEventListener('DOMContentLoaded', () => {
  // Language Data
  const translations = {
    fa: {
      title: 'بازارینو | فروشگاه ایرانی در ایتالیا | سفارش آنلاین محصولات ایرانی',
      // ... (بقیه ترجمه‌ها مانند قبل)
    },
    en: {
      title: 'Bazarino | Iranian Store in Italy | Order Authentic Iranian Products Online',
      // ... (بقیه ترجمه‌ها مانند قبل)
    },
    it: {
      title: 'Bazarino | Negozio iraniano in Italia | Ordina prodotti iraniani autentici online',
      // ... (بقیه ترجمه‌ها مانند قبل)
    }
  };

  // Google Sheets Configuration
  const SPREADSHEET_ID = '1EsB54UL819KT2Sy51x2n-aSMDB6BZmA-N03vtNqxwuE';
  const PRODUCTS_SHEET = 'Sheet2';
  const ORDERS_SHEET = 'Orders';
  
  // Telegram Bot Configuration
  const TELEGRAM_BOT_TOKEN = '7943242906:AAEfC9EZN6cCnXKok-NHad1RRarDPniW-Vs';
  const ADMIN_CHAT_ID = '7801271819';

  // Language Switcher (همانند قبل)
  // ...

  // Load Products from Google Sheets
  let products = [];
  async function loadProducts(searchTerm = '') {
    try {
      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${PRODUCTS_SHEET}?key=AIzaSyD4YkI5nYdRjUyQlW7Q4Xq3ZQ2Xq3ZQ2X`, {
        headers: {
          'Authorization': 'Bearer ' + await getAccessToken()
        }
      });
      
      const data = await response.json();
      
      if (data.values && data.values.length > 1) {
        const headers = data.values[0];
        products = data.values.slice(1).map(row => {
          const product = {};
          headers.forEach((header, index) => {
            product[header.toLowerCase()] = row[index];
          });
          return product;
        });
        
        const filteredProducts = products.filter(product => 
          product[currentLang]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.cat?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        const productsContainer = document.getElementById('products-container');
        if (productsContainer) {
          productsContainer.innerHTML = '';
          filteredProducts.forEach(product => {
            if (product.is_bestseller === 'TRUE') {
              const slide = document.createElement('div');
              slide.className = 'swiper-slide product-card';
              slide.innerHTML = `
                <picture>
                  <source srcset="${product.image_url}.webp" type="image/webp">
                  <img src="${product.image_url}" alt="${product[currentLang]}" loading="lazy">
                </picture>
                <div class="product-info">
                  <h3>${product[currentLang]}</h3>
                  <p class="product-price">${product.weight} - €${parseFloat(product.price).toFixed(2)}</p>
                  <button class="add-to-cart" data-id="${product.id}">${translations[currentLang]['form-submit']}</button>
                </div>
              `;
              productsContainer.appendChild(slide);
            }
          });
          initializeSwiper();
          addCartEventListeners();
        }
      }
    } catch (error) {
      console.error('Error loading products:', error);
      showNotification('خطا در بارگذاری محصولات. لطفاً دوباره تلاش کنید.');
    }
  }

  // Get Google Sheets Access Token
  async function getAccessToken() {
    try {
      const response = await fetch('https://bazarino-bot.onrender.com/get-token');
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      return '';
    }
  }

  // Send Order to Telegram
  async function sendToTelegram(orderData) {
    try {
      let message = `📦 *سفارش جدید دریافت شد* 📦\n\n`;
      message += `👤 *مشتری*: ${orderData.name}\n`;
      message += `📱 *تلفن*: ${orderData.phone}\n`;
      message += `📍 *آدرس*: ${orderData.address}\n`;
      message += `📮 *کد پستی*: ${orderData.destination}\n\n`;
      message += `🛒 *محصولات سفارش*:\n`;
      
      orderData.products.forEach(item => {
        message += `- ${item.product_name} (${item.quantity}x): €${item.subtotal.toFixed(2)}\n`;
      });
      
      message += `\n💰 *جمع کل*: €${orderData.products.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2)}\n`;
      message += `📝 *یادداشت*: ${orderData.notes || 'ندارد'}\n`;
      message += `🎟️ *کد تخفیف*: ${orderData.discount_code || 'ندارد'}\n\n`;
      message += `🆔 *شناسه سفارش*: ${orderData.order_id}`;
      
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: ADMIN_CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });
      
      return response.ok;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  }

  // Save Order to Google Sheets
  async function saveOrderToSheet(orderData) {
    try {
      const values = [
        [
          orderData.timestamp,
          orderData.order_id,
          orderData.name,
          orderData.phone,
          orderData.address,
          orderData.destination,
          JSON.stringify(orderData.products),
          orderData.notes,
          orderData.discount_code,
          'Pending'
        ]
      ];
      
      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${ORDERS_SHEET}!A:J:append?valueInputOption=USER_ENTERED`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + await getAccessToken(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values
        })
      });
      
      return response.ok;
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      return false;
    }
  }

  // Order Submission
  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (cartItems.length === 0) {
        showNotification('سبد خرید خالی است!');
        return;
      }
      
      const formData = {
        timestamp: new Date().toISOString(),
        order_id: `ORDER_${Date.now()}`,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        destination: document.getElementById('postal-code').value,
        products: cartItems.map(item => ({
          product_id: item.id,
          product_name: item.name,
          quantity: item.quantity,
          price: item.price,
          subtotal: item.price * item.quantity
        })),
        notes: document.getElementById('notes').value,
        discount_code: document.getElementById('discount-code').value
      };

      try {
        // Send to Telegram
        const telegramSent = await sendToTelegram(formData);
        
        // Save to Google Sheets
        const sheetSaved = await saveOrderToSheet(formData);
        
        if (telegramSent && sheetSaved) {
          cartItems = [];
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          window.location.href = 'thankyou.html';
        } else {
          showNotification('خطا در ثبت سفارش. لطفاً دوباره تلاش کنید.');
        }
      } catch (error) {
        showNotification('خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.');
      }
    });
  }

  // Initialize
  updateLanguage();
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    loadProducts();
  }
  if (window.location.pathname.includes('cart.html')) {
    loadCart();
  }
});
