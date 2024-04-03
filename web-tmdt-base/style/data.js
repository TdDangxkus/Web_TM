
let cartItems = [];

function addToCart(productId) {
    const product = getProductDetails(productId);
    const existingIndex = cartItems.findIndex(item => item.id === productId);

    if (existingIndex !== -1) {
        cartItems[existingIndex].quantity++;
    } else {
        product.quantity = 1;
        cartItems.push(product);
    }

    updateCart();
}

function removeItem(index) {
    const productToRemove = cartItems[index];
    productToRemove.quantity--;

    if (productToRemove.quantity === 0) {
        cartItems.splice(index, 1); // Xóa sản phẩm nếu số lượng = 0
    }

    updateCart();
}


function clearCart() {
    cartItems = [];
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';
    let totalPrice = 0;
    let displayedProducts = []; // Mảng để theo dõi sản phẩm đã hiển thị

    cartItems.forEach((product, index) => {
        if (!displayedProducts.includes(product.id)) { // Nếu sản phẩm chưa được hiển thị
            const li = document.createElement('li');
            li.dataset.id = product.id;
            li.innerHTML = `<img src="${product.image}" alt="${product.name}" class="product-image" style="width: 80px; height: 80px; border: 2px solid #ffffff44;"> ${product.name} - $${product.price.toFixed(2)} x ${product.quantity}`; // Hiển thị số lượng sản phẩm và hình ảnh
            li.style.fontSize = '14px'; // Đặt kích thước của chữ là 16px
            cartItemsElement.appendChild(li);
            displayedProducts.push(product.id);
        }
        totalPrice += product.price * product.quantity; // Tính tổng giá
    });

    totalPriceElement.textContent = `Tổng giá: $${totalPrice.toFixed(2)}`;
}

function getProductDetails(productId) {
    // Lấy thông tin sản phẩm từ productId, ví dụ từ một đối tượng hoặc cơ sở dữ liệu
    // Ở đây, tôi sẽ chỉ trả về một đối tượng đại diện
    if (productId === 1) {
        return {
            id: 1,
            name: 'Xbox Controller',
            price: 15.99,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/gear01.jpg'
        };
    } else if (productId === 2) {
        return {
            id: 2,
            name: 'Echo Headset',
            price: 10,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/tainghe.webp'
        };      
    } else if (productId === 3) {
        return {
            id: 3,
            name: 'X-2 Wireless Mouse',
            price: 10,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/mou.webp'
        };
    } else if (productId === 4) {
        return {
            id: 4,
            name: 'Spartan Mechanical Keyboard',
            price: 15.00,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/phim.webp'
        };
    }else if (productId === 5) {
        return {
            id: 5,
            name: 'Gaming Chair',
            price: 20.00,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/chair2.webp'
        };
    }
    else if (productId === 6) {
        return {
            id: 6,
            name: 'Gaming Chair New',
            price: 22.00,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/chair4.jpg'
        };
    }
    else if (productId === 7) {
        return {
            id: 7,
            name: 'Mechanical Keyboard',
            price: 18.00,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/chair3.webp'
        };
    }
    else if (productId === 8) {
        return {
            id: 8,
            name: 'L503 Headset',
            price: 20.00,
            quantity: 1,
            image: '/vhu-web-tmdt/imgs/tainghenew.webp'
        };
    }
 
}
// lưu thông tin người dùng chọn sản phẩm vào *Local Storage*
function addToCart(productId) {
    const product = getProductDetails(productId);
    const existingIndex = cartItems.findIndex(item => item.id === productId);

    if (existingIndex !== -1) {
        cartItems[existingIndex].quantity++;
    } else {
        product.quantity = 1;
        cartItems.push(product);
    }

    // Lưu thông tin giỏ hàng vào Local Storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCart();
}






// img chuyển động
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//


