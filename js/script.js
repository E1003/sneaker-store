let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let cart = document.querySelector('.card');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  document.body.classList.toggle('active');
  closeCard();
};

openShopping.addEventListener('click', () => {
  body.classList.add('active');
  openCard();
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
  closeCard();
});


let listCards = [];

function addToCard(id, name, image, price) {
  if (listCards[id] == null) {
    listCards[id] = {
      id: id,
      name: name,
      image: image,
      price: price,
      quantity: 1
    };
  } else {
    listCards[id].quantity += 1;
  }
  reloadCard();
}


function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice += value.price * value.quantity;
    count += value.quantity;

    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="images/Jordans/${value.image}" alt=""></div>
        <div>${value.name}</div>
        <div>$${(value.price * value.quantity).toFixed(2)}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = totalPrice.toFixed(2);
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}

function openCard() {
  cart.style.transform = 'translateX(0)';
}

function closeCard() {
  cart.style.transform = 'translateX(100%)';
}

let productPreviewContainer = document.querySelector('.products-preview-container');
let productPreview = productPreviewContainer.querySelectorAll('.product-preview');

document.querySelectorAll('.products .slide .btn').forEach(detailBtn => {
  detailBtn.onclick = () => {
    productPreviewContainer.style.display = 'block';
    let name = detailBtn.getAttribute('data-product');
    productPreview.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.style.display = 'flex';
      }
    });
  };
});

document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close => {
  close.onclick = () => {
    productPreviewContainer.style.display = 'none';
    productPreview.forEach(closePreview => {
      closePreview.style.display = 'none';
    });
  };
});

var swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
