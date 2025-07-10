document.addEventListener('DOMContentLoaded', () => {
  // Language Data
  const translations = {
    fa: {
      title: 'بازارینو | فروشگاه ایرانی در ایتالیا | سفارش آنلاین محصولات ایرانی',
      'header-title': 'بازارینو | فروشگاه ایرانی در ایتالیا',
      slogan: 'اصالت ایرانی، راحتی ایتالیایی <strong>IRIT</strong>',
      'intro-greeting': 'سلام به <span class="highlight">بازارینو</span> خوش آمدید! ✋',
      'intro-text': 'بازارینو یک ربات تلگرامی هوشمند است که مخصوص ایرانیان مقیم ایتالیا طراحی شده تا بتوانند به سادگی محصولات اصیل ایرانی شامل برنج، خشکبار، ادویه‌جات، نوشیدنی‌ها و کنسروها را سفارش دهند و در <strong>شهر پروجا</strong> یا <strong>سراسر ایتالیا</strong> تحویل بگیرند.',
      'feature-delivery-title': 'تحویل سریع و مطمئن',
      'feature-delivery-text': 'ارسال به تمام نقاط ایتالیا با بهترین روش‌های حمل و نقل در کمترین زمان ممکن',
      'feature-quality-title': 'کیفیت تضمینی',
      'feature-quality-text': 'محصولات با کیفیت و اصیل ایرانی با گارانتی بازگشت وجه در صورت عدم رضایت',
      'feature-support-title': 'پشتیبانی همه‌جانبه',
      'feature-support-text': 'پشتیبانی فارسی‌زبان به صورت 24 ساعته و 7 روز هفته برای پاسخگویی به شما',
      'cta-button': 'ورود به ربات تلگرامی بازارینو',
      'cta-note': 'کلیک کنید و مستقیماً به ربات ما در تلگرام متصل شوید',
      'search-placeholder': 'جستجوی محصولات...',
      'products-title': 'محصولات پرطرفدار',
      poem: 'آب حیات نامده‌ای زان لب شیرین هنوز<br>در دل من مانده از آن لعل شکرخا خاطری',
      'poem-translation': 'Non ho ancora bevuto l\'acqua della vita da quelle labbra dolci,<br>ma il ricordo del tuo sorriso zuccherato vive ancora nel mio cuore.',
      'signature-title': 'با افتخار تقدیم می‌کنیم',
      'signature-text': 'تیم بازارینو - ایتالیا',
      'signature-note': 'برای ایرانیان عزیز در سرزمین داوینچی و دانته',
      'footer-home': 'صفحه اصلی',
      'footer-products': 'محصولات',
      'footer-about': 'درباره ما',
      'footer-contact': 'تماس با ما',
      'footer-faq': 'سوالات متداول',
      'footer-terms': 'شرایط و ضوابط',
      copyright: 'طراحی شده با <span class="heart">♥</span> توسط تیم بازارینو',
      'cart-title': 'سبد خرید',
      'cart-product': 'محصول',
      'cart-price': 'قیمت',
      'cart-quantity': 'تعداد',
      'cart-subtotal': 'جمع',
      'cart-actions': 'عملیات',
      'cart-total': 'جمع کل: ',
      'order-form-title': 'تکمیل سفارش',
      'form-name': 'نام و نام خانوادگی',
      'form-phone': 'شماره تلفن',
      'form-address': 'آدرس',
      'form-postal-code': 'کد پستی',
      'form-notes': 'یادداشت (اختیاری)',
      'form-discount': 'کد تخفیف',
      'form-submit': 'ثبت سفارش',
      'about-title': 'درباره بازارینو',
      'about-text': 'بازارینو با هدف آوردن طعم و اصالت محصولات ایرانی به ایرانیان مقیم ایتالیا تأسیس شد. ما در بازارینو تلاش می‌کنیم تا با ارائه محصولات باکیفیت و اصیل ایرانی، از برنج و زعفران گرفته تا شیرینی‌های سنتی و کنسروهای آماده، حس خانه را به شما هدیه دهیم. تیم ما در پروجا مستقر است و خدمات خود را به سراسر ایتالیا ارائه می‌دهد.',
      'about-mission': 'ماموریت ما ایجاد تجربه‌ای آسان و دلپذیر برای خرید محصولات ایرانی است. با استفاده از ربات تلگرامی هوشمند و وب‌سایت کاربرپسند، شما می‌توانید به راحتی سفارش دهید و محصولات را درب منزل تحویل بگیرید.',
      'thankyou-title': 'سفارش شما ثبت شد!',
      'thankyou-text': 'از شما برای خرید از بازارینو تشکر می‌کنیم. سفارش شما با موفقیت ثبت شد و تیم ما به زودی با شما تماس خواهد گرفت. می‌توانید از طریق ربات تلگرامی یا واتساپ با ما در ارتباط باشید.',
      'return-home': 'بازگشت به صفحه اصلی'
    },
    en: {
      title: 'Bazarino | Iranian Store in Italy | Order Authentic Iranian Products Online',
      'header-title': 'Bazarino | Iranian Store in Italy',
      slogan: 'Iranian Authenticity, Italian Convenience <strong>IRIT</strong>',
      'intro-greeting': 'Welcome to <span class="highlight">Bazarino</span>! ✋',
      'intro-text': 'Bazarino is a smart Telegram bot designed for Iranians living in Italy to easily order authentic Iranian products, including rice, nuts, spices, beverages, and canned goods, delivered in <strong>Perugia</strong> or <strong>across Italy</strong>.',
      'feature-delivery-title': 'Fast & Reliable Delivery',
      'feature-delivery-text': 'Shipping to all parts of Italy with the best transportation methods in the shortest time possible',
      'feature-quality-title': 'Guaranteed Quality',
      'feature-quality-text': 'High-quality, authentic Iranian products with a money-back guarantee if not satisfied',
      'feature-support-title': 'Comprehensive Support',
      'feature-support-text': '24/7 Persian-speaking support to assist you',
      'cta-button': 'Enter Bazarino Telegram Bot',
      'cta-note': 'Click to connect directly to our Telegram bot',
      'search-placeholder': 'Search products...',
      'products-title': 'Popular Products',
      poem: 'آب حیات نامده‌ای زان لب شیرین هنوز<br>در دل من مانده از آن لعل شکرخا خاطری',
      'poem-translation': 'I have not yet drunk the water of life from those sweet lips,<br>but the memory of your sugary smile still lingers in my heart.',
      'signature-title': 'Proudly Presented',
      'signature-text': 'Bazarino Team - Italy',
      'signature-note': 'For our dear Iranians in the land of Da Vinci and Dante',
      'footer-home': 'Home',
      'footer-products': 'Products',
      'footer-about': 'About Us',
      'footer-contact': 'Contact Us',
      'footer-faq': 'FAQ',
      'footer-terms': 'Terms & Conditions',
      copyright: 'Designed with <span class="heart">♥</span> by the Bazarino Team',
      'cart-title': 'Shopping Cart',
      'cart-product': 'Product',
      'cart-price': 'Price',
      'cart-quantity': 'Quantity',
      'cart-subtotal': 'Subtotal',
      'cart-actions': 'Actions',
      'cart-total': 'Total: ',
      'order-form-title': 'Complete Your Order',
      'form-name': 'Full Name',
      'form-phone': 'Phone Number',
      'form-address': 'Address',
      'form-postal-code': 'Postal Code',
      'form-notes': 'Notes (Optional)',
      'form-discount': 'Discount Code',
      'form-submit': 'Submit Order',
      'about-title': 'About Bazarino',
      'about-text': 'Bazarino was founded with the goal of bringing the taste and authenticity of Iranian products to Iranians living in Italy. At Bazarino, we strive to offer high-quality, authentic Iranian products, from rice and saffron to traditional sweets and ready-to-eat canned foods, giving you a taste of home. Our team is based in Perugia and provides services across Italy.',
      'about-mission': 'Our mission is to create an easy and enjoyable shopping experience for Iranian products. With our smart Telegram bot and user-friendly website, you can order effortlessly and have products delivered to your doorstep.',
      'thankyou-title': 'Your Order Has Been Placed!',
      'thankyou-text': 'Thank you for shopping with Bazarino. Your order has been successfully placed, and our team will contact you soon. You can reach us via our Telegram bot or WhatsApp.',
      'return-home': 'Return to Home'
    },
    it: {
      title: 'Bazarino | Negozio iraniano in Italia | Ordina prodotti iraniani autentici online',
      'header-title': 'Bazarino | Negozio iraniano in Italia',
      slogan: 'Autenticità iraniana, comodità italiana <strong>IRIT</strong>',
      'intro-greeting': 'Benvenuti a <span class="highlight">Bazarino</span>! ✋',
      'intro-text': 'Bazarino è un bot Telegram intelligente progettato per gli iraniani che vivono in Italia per ordinare facilmente prodotti iraniani autentici, tra cui riso, noci, spezie, bevande e conserve, consegnati a <strong>Perugia</strong> o in <strong>tutta Italia</strong>.',
      'feature-delivery-title': 'Consegna Veloce e Affidabile',
      'feature-delivery-text': 'Spedizione in tutta Italia con i migliori metodi di trasporto nel minor tempo possibile',
      'feature-quality-title': 'Qualità Garantita',
      'feature-quality-text': 'Prodotti iraniani autentici e di alta qualità con garanzia di rimborso se non soddisfatti',
      'feature-support-title': 'Supporto Completo',
      'feature-support-text': 'Supporto in lingua persiana 24/7 per assistervi',
      'cta-button': 'Accedi al Bot Telegram di Bazarino',
      'cta-note': 'Clicca per connetterti direttamente al nostro bot Telegram',
      'search-placeholder': 'Cerca prodotti...',
      'products-title': 'Prodotti Popolari',
      poem: 'آب حیات نامده‌ای زان لب شیرین هنوز<br>در دل من مانده از آن لعل شکرخا خاطری',
      'poem-translation': 'Non ho ancora bevuto l\'acqua della vita da quelle labbra dolci,<br>ma il ricordo del tuo sorriso zuccherato vive ancora nel mio cuore.',
      'signature-title': 'Con Orgoglio Presentiamo',
      'signature-text': 'Team Bazarino - Italia',
      'signature-note': 'Per i nostri cari iraniani nella terra di Da Vinci e Dante',
      'footer-home': 'Home',
      'footer-products': 'Prodotti',
      'footer-about': 'Chi Siamo',
      'footer-contact': 'Contattaci',
      'footer-faq': 'FAQ',
      'footer-terms': 'Termini e Condizioni',
      copyright: 'Progettato con <span class="heart">♥</span> dal Team Bazarino',
      'cart-title': 'Carrello',
      'cart-product': 'Prodotto',
      'cart-price': 'Prezzo',
      'cart-quantity': 'Quantità',
      'cart-subtotal': 'Subtotale',
      'cart-actions': 'Azioni',
      'cart-total': 'Totale: ',
      'order-form-title': 'Completa il Tuo Ordine',
      'form-name': 'Nome e Cognome',
      'form-phone': 'Numero di Telefono',
      'form-address': 'Indirizzo',
      'form-postal-code': 'Codice Postale',
      'form-notes': 'Note (Opzionale)',
      'form-discount': 'Codice Sconto',
      'form-submit': 'Invia Ordine',
      'about-title': 'Chi è Bazarino',
      'about-text': 'Bazarino è stato fondato con l\'obiettivo di portare il gusto e l\'autenticità dei prodotti iraniani agli iraniani che vivono in Italia. A Bazarino, ci impegniamo a offrire prodotti iraniani autentici e di alta qualità, dal riso allo zafferano, dai dolci tradizionali alle conserve pronte, per regalarti un assaggio di casa. Il nostro team ha sede a Perugia e offre servizi in tutta Italia.',
      'about-mission': 'La nostra missione è creare un\'esperienza di acquisto facile e piacevole per i prodotti iraniani. Con il nostro bot Telegram intelligente e il nostro sito web user-friendly, puoi ordinare facilmente e ricevere i prodotti a casa tua.',
      'thankyou-title': 'Il Tuo Ordine è Stato Inviato!',
      'thankyou-text': 'Grazie per aver acquistato con Bazarino. Il tuo ordine è stato inviato con successo e il nostro team ti contatterà presto. Puoi contattarci tramite il nostro bot Telegram o WhatsApp.',
      'return-home': 'Torna alla Home'
    }
  };

  // Language Switcher
  let currentLang = 'fa';
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentLang = button.dataset.lang;
      langButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      updateLanguage();
    });
  });

  function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(element => {
      const key = element.dataset.lang;
      element.innerHTML = translations[currentLang][key] || element.innerHTML;
    });
    document.querySelector('#search-input').placeholder = translations[currentLang]['search-placeholder'];
    document.documentElement.lang = currentLang;
    document.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    if (window.location.pathname.includes('index.html')) {
      loadProducts(document.getElementById('search-input').value);
    }
  }

  // Set Year in Footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Load Products
  let products = [];
  function loadProducts(searchTerm = '') {
    fetch('assets/js/products.json')
      .then(response => response.json())
      .then(data => {
        products = data;
        const filteredProducts = products.filter(product => 
          product[currentLang].toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.cat.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const productsContainer = document.getElementById('products-container');
        productsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
          if (product.is_bestseller) {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide product-card';
            slide.innerHTML = `
              <picture>
                <source srcset="${product.image_url}.webp" type="image/webp">
                <img src="${product.image_url}" alt="${product[currentLang]}" loading="lazy">
              </picture>
              <div class="product-info">
                <h3>${product[currentLang]}</h3>
                <p class="product-price">${product.weight} - €${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">افزودن به سبد</button>
              </div>
            `;
            productsContainer.appendChild(slide);
          }
        });
        initializeSwiper();
        addCartEventListeners();
      });
  }

  // Initialize Swiper
  function initializeSwiper() {
    new Swiper('.products-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  // Cart Functionality
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  function addCartEventListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.dataset.id;
        const product = products.find(p => p.id === productId);
        const cartItem = cart多元Items.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          cartItems.push({
            id: productId,
            name: product[currentLang],
            price: product.price,
            quantity: 1,
            image: product.image_url
          });
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        showNotification(`${product[currentLang]} به سبد خرید اضافه شد`);
        if (window.location.pathname.includes('cart.html')) {
          loadCart();
        }
      });
    });
  }

  function loadCart() {
    const cartTableBody = document.getElementById('cart-items');
    cartTableBody.innerHTML = '';
    let total = 0;
    cartItems.forEach((item, index) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${item.image}" alt="${item.name}"> ${item.name}</td>
        <td>€${item.price.toFixed(2)}</td>
        <td>
          <div class="cart-controls">
            <button class="decrease" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increase" data-index="${index}">+</button>
          </div>
        </td>
        <td>€${subtotal.toFixed(2)}</td>
        <td><button class="remove" data-index="${index}">حذف</button></td>
      `;
      cartTableBody.appendChild(row);
    });
    document.getElementById('cart-total-amount').textContent = `€${total.toFixed(2)}`;

    // Cart Controls
    document.querySelectorAll('.increase').forEach(button => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        cartItems[index].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        loadCart();
      });
    });

    document.querySelectorAll('.decrease').forEach(button => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity -= 1;
        } else {
          cartItems.splice(index, 1);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        loadCart();
      });
    });

    document.querySelectorAll('.remove').forEach(button => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        loadCart();
      });
    });
  }

  // Notification
  function showNotification(message) {
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

  // Search Functionality
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      loadProducts(searchInput.value);
    });
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
        user_id: `USER_${Date.now()}`,
        handle: '@BazarinoUser',
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
        discount_code: document.getElementById('discount-code').value,
        discount_amount: 0,
        status: 'Pending',
        notified: false
      };

      try {
        const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          cartItems = [];
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          window.location.href = 'thankyou.html';
        } else {
          showNotification('خطا در ثبت سفارش. لطفاً دوباره تلاش کنید.');
        }
      } catch (error) {
        showNotification('خ
