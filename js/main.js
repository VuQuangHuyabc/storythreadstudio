// Main JavaScript for Storythread Studio E-commerce

// Product data
const products = [
    {
        id: 1,
        name: "Classic White Business Shirt",
        price: 29.99,
        originalPrice: 94.99,
        images: [
            "san pham 1/1.avif",
            "san pham 1/2.avif",
            "san pham 1/3.avif",
            "san pham 1/4.avif",
            "san pham 1/5.avif",
            "san pham 1/6.avif",
            "san pham 1/7.avif",
            "san pham 1/8.avif"
        ],
        description: "Premium white business shirt with perfect fit. Essential for every professional wardrobe.",
        category: "Formal",
        sizes: ["S", "M", "L", "XL", "XXL"],
        featured: true
    },
    {
        id: 2,
        name: "Navy Blue Striped Shirt",
        price: 27.99,
        originalPrice: 85.99,
        images: [
            "san pham 2/Ảnh chụp màn hình 2026-03-25 174828.png",
            "san pham 2/Ảnh chụp màn hình 2026-03-25 174838.png",
            "san pham 2/Ảnh chụp màn hình 2026-03-25 174848.png",
            "san pham 2/Ảnh chụp màn hình 2026-03-25 174904.png",
            "san pham 2/Ảnh chụp màn hình 2026-03-25 174913.png",
            "san pham 2/Ảnh chụp màn hình 2026-03-25 174925.png"
        ],
        description: "Classic navy blue striped shirt with modern fit. Perfect for business meetings and formal occasions.",
        category: "Formal",
        sizes: ["S", "M", "L", "XL"],
        featured: true
    },
    {
        id: 3,
        name: "Light Blue Checkered Shirt",
        price: 24.99,
        originalPrice: 78.99,
        images: [
            "san pham 3/Ảnh chụp màn hình 2026-03-25 175047.png",
            "san pham 3/Ảnh chụp màn hình 2026-03-25 175103.png",
            "san pham 3/Ảnh chụp màn hình 2026-03-25 175111.png",
            "san pham 3/Ảnh chụp màn hình 2026-03-25 175118.png",
            "san pham 3/Ảnh chụp màn hình 2026-03-25 175129.png"
        ],
        description: "Stylish light blue checkered pattern shirt. Great for casual outings and weekend wear.",
        category: "Casual",
        sizes: ["M", "L", "XL"],
        featured: true
    },
    {
        id: 4,
        name: "White Blue Patterned Shirt",
        price: 28.99,
        originalPrice: 92.99,
        images: [
            "san pham 4/Ảnh chụp màn hình 2026-03-25 175215.png",
            "san pham 4/Ảnh chụp màn hình 2026-03-25 175222.png",
            "san pham 4/Ảnh chụp màn hình 2026-03-25 175229.png",
            "san pham 4/Ảnh chụp màn hình 2026-03-25 175237.png",
            "san pham 4/Ảnh chụp màn hình 2026-03-25 175244.png",
            "san pham 4/Ảnh chụp màn hình 2026-03-25 175256.png"
        ],
        description: "Elegant white shirt with blue geometric patterns. Sophisticated choice for professional settings.",
        category: "Formal",
        sizes: ["S", "M", "L", "XL", "XXL"],
        featured: true
    },
    {
        id: 5,
        name: "Cream Beige Casual Shirt",
        price: 25.99,
        originalPrice: 81.99,
        images: [
            "san pham 5/Ảnh chụp màn hình 2026-03-25 175323.png",
            "san pham 5/Ảnh chụp màn hình 2026-03-25 175329.png",
            "san pham 5/Ảnh chụp màn hình 2026-03-25 175335.png",
            "san pham 5/Ảnh chụp màn hình 2026-03-25 175342.png"
        ],
        description: "Comfortable cream beige shirt perfect for casual Fridays and weekend gatherings.",
        category: "Casual",
        sizes: ["S", "M", "L", "XL"],
        featured: true
    },
    {
        id: 6,
        name: "Dark Navy Business Shirt",
        price: 26.99,
        originalPrice: 88.99,
        images: [
            "san pham 6/Ảnh chụp màn hình 2026-03-25 175507.png",
            "san pham 6/Ảnh chụp màn hình 2026-03-25 175512.png",
            "san pham 6/Ảnh chụp màn hình 2026-03-25 175517.png",
            "san pham 6/Ảnh chụp màn hình 2026-03-25 175525.png"
        ],
        description: "Premium dark navy business shirt with subtle texture. Ideal for executive meetings and formal events.",
        category: "Premium",
        sizes: ["M", "L", "XL", "XXL"],
        featured: true
    }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    
    // Load products on homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        displayFeaturedProducts();
    }
    
    // Load product detail page
    if (window.location.pathname.endsWith('product-detail.html')) {
        displayProductDetail();
    }
    
    // Load cart page
    if (window.location.pathname.endsWith('cart.html')) {
        displayCart();
    }
});

// Load products on homepage
function displayFeaturedProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    const featuredProducts = products.filter(product => product.featured);
    
    productGrid.innerHTML = featuredProducts.map(product => `
        <div class="col-md-4 mb-4 fade-in">
            <div class="card product-card clickable-product" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="sale-badge">SALE</div>
                <img src="${product.images[0]}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title product-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.description.substring(0, 80)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="product-price text-danger fw-bold">$${product.price}</span>
                            <span class="original-price text-muted text-decoration-line-through ms-2">$${product.originalPrice}</span>
                        </div>
                        <button class="btn btn-primary btn-sm btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="bi bi-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Load all products
function loadProducts() {
    // This function can be used for a full products page
    const productGrid = document.getElementById('all-products-grid');
    if (!productGrid) return;
    
    productGrid.innerHTML = products.map(product => `
        <div class="col-md-4 mb-4 fade-in">
            <div class="card product-card clickable-product" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="sale-badge">SALE</div>
                <img src="${product.images[0]}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title product-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.description.substring(0, 80)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="product-price text-danger fw-bold">$${product.price}</span>
                            <span class="original-price text-muted text-decoration-line-through ms-2">$${product.originalPrice}</span>
                        </div>
                        <button class="btn btn-primary btn-sm btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="bi bi-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Load related products
function loadRelatedProducts(category, currentProductId) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;
    
    const relatedProducts = products.filter(p => p.category === category && p.id !== currentProductId).slice(0, 3);
    
    relatedContainer.innerHTML = relatedProducts.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card product-card clickable-product" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="sale-badge">SALE</div>
                <img src="${product.images[0]}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h6 class="card-title product-title">${product.name}</h6>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="product-price text-danger fw-bold">$${product.price}</span>
                            <span class="original-price text-muted text-decoration-line-through ms-2">$${product.originalPrice}</span>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="bi bi-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId, size = 'M') {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size: size,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Display cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-cart-x fs-1 text-muted"></i>
                <h4 class="mt-3">Your cart is empty</h4>
                <a href="index.html" class="btn btn-primary mt-3">Continue Shopping</a>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                </div>
                <div class="col-md-4">
                    <h5>${item.name}</h5>
                    <p class="text-muted">Size: ${item.size}</p>
                    <p class="product-price">$${item.price}</p>
                </div>
                <div class="col-md-3">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', 1)">+</button>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5>$${(item.price * item.quantity).toFixed(2)}</h5>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id}, '${item.size}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId, size);
    } else {
        saveCart();
        displayCart();
        updateCartCount();
    }
}

// Remove from cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    displayCart();
    updateCartCount();
    showToast('Item removed from cart', 'success');
}

// Show toast notification
function showToast(message, type = 'success') {
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    toast.innerHTML = `
        <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Create toast container
function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Display product detail
function displayProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    console.log("ID:", productId);

    const product = products.find(p => p.id === productId);

    console.log("Product:", product);

    if (!product) {
        document.body.innerHTML = "<h2>Product not found</h2>";
        return;
    }

    const container = document.getElementById('product-detail');
    if (!container) return;

    container.innerHTML = `
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <img src="${product.images[0]}" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h2>${product.name}</h2>
                    <h4>$${product.price}</h4>
                    <p>${product.description}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    // Add newsletter form handling
    const newsletterForm = document.querySelector('form');
    if (newsletterForm && newsletterForm.querySelector('input[type="email"]')) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showToast('Thank you for subscribing! Check your email for confirmation.', 'success');
                this.reset();
            }
        });
    }
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all feature items and category cards
    document.querySelectorAll('.feature-item, .category-card').forEach(el => {
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
    }
});
