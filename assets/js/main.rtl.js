// =================================================================================================================
// Navbar
document.addEventListener("DOMContentLoaded", () => {
  // إنشاء العنصر div وإضافته إلى DOM
  let layerScreen = document.createElement("div");
  layerScreen.className = "box-layer-screen";
  layerScreen.textContent = ""; // يمكنك وضع النص الذي تريده هنا

  // تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
  document.body.appendChild(layerScreen);

  // العناصر الأخرى في DOM
  let btnToggle = document.querySelector(".btn-toggle-collapse");
  let listNav = document.querySelector(".box-collapse-nav");
  let btnXmark = document.querySelector(".btn-xmark");

  let navbarComprehensive = document.querySelector(".box-navbar-comprehensive");

  // إزالة العنصر بعد إضافته للتأكد من أنه سيضاف فقط عند النقر
  layerScreen.remove();

  btnToggle.onclick = () => {
    listNav.classList.toggle("toggleSidbar");

    if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
      navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
      setTimeout(() => {
        layerScreen.classList.add("visible");
      }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
    }
  };

  btnXmark.onclick = () => {
    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");
      setTimeout(() => {
        layerScreen.remove();
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };

  layerScreen.onclick = () => {
    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");
      console.log("lllll");
      setTimeout(() => {
        layerScreen.remove();
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
    console.log("cccc");

    if ($(window).width() >= 992) {
      $(".box-collapse-items").css("transform", "translateX(0%)");
      $(".ul-items-Categories").css("transform", "translateX(0%)");
      return;
    }

    $(".box-collapse-items").css("transform", "translateX(0%)");
    $(".ul-items-Categories").css("transform", "translateX(-100%)");
  };

  // ========================================================
  // let btnXmark2 = document.querySelector(".btn-xmark-2");

  $(".btn-xmark-2").on("click", function () {

    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
        $(".box-collapse-items").css("transform", "translateX(0%)");
        $(".ul-items-Categories").css("transform", "translateX(0%)");
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  });

  // ========================================================
  // let btnXmark3 = document.querySelector(".btn-xmark-3");

  $(".btn-xmark-3").on("click", function (event) {
    event.stopPropagation(); 

    console.log("vcdvdvdvdvdv");
    listNav.classList.remove("toggleSidbar");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
        $(".box-collapse-items").css("transform", "translateX(0%)");
        $(".ul-items-Categories").css("transform", "translateX(0%)");
      }, 1000); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  });
});

// --------------------------------------
$(".btn-chevron").click(function (event) {
  $(".box-collapse-items").css("transform", "translateX(0%)");
  event.stopPropagation(); 
  console.log("1000");
});

// -----------------------------------
document.querySelectorAll(".box-Categories-nav").forEach((item) => {
  item.addEventListener("click", () => {
    // إخفاء كافة القوائم المنسدلة
    document.querySelectorAll(".box-collapse-items").forEach((subMenu) => {
      // subMenu.style.display = 'none';
      subMenu.style.transform = "translateX(0%)";
    });
    // إظهار القائمة المنسدلة الخاصة بالعنصر المحدد
    // item.querySelector('.sub-menu-dropdown-Categories38').style.display = 'block';
    item.querySelector(".box-collapse-items").style.transform = "translateX(100%)";
  });
});

// ------------------------
// mm
if ($(window).width() <= 992) {

document.querySelectorAll(".item-titel").forEach((item) => {
  item.addEventListener("click", () => {
    // إخفاء كافة القوائم المنسدلة
    document.querySelectorAll(".ul-items-Categories").forEach((subMenu) => {
      // subMenu.style.display = 'none';
      subMenu.style.transform = "translateX(-100%)";
    });

    // item.querySelector('.sub-menu-dropdown-Categories38').style.display = 'block';
    item.querySelector(".ul-items-Categories").style.transform =
      "translateX(0)";
  });
});

$(".btn-chevron-3").click(function (event) {
 
  event.stopPropagation(); 
  console.log("1000");
});

$(".btn-chevron-items").click(function (event) {
  $(".ul-items-Categories").css("transform", "translateX(-100%)");
  event.stopPropagation(); 
  console.log("1000");
});
}

// =================================================================================================================

$(window).scroll(function () {
  // console.log("Hello");
  let wScroll = $(window).scrollTop();

  if (wScroll > 50) {
    $(".box-navbar-comprehensive").addClass("nav-sticky");

    $(".box-navbar-comprehensive").css({ top: "0" });
    $(".box-navbar-comprehensive").css({ position: "fixed" });

    $(".box-collapse-items").css({ top: "3rem" });
  } else {
    $(".box-navbar-comprehensive").removeClass("nav-sticky");

    $(".box-navbar-comprehensive").css({ top: "-300px" });
    $(".box-navbar-comprehensive").css({ position: "static" });

    $(".box-collapse-items").css({ top: "6rem" });
  }
});

// =====================================
$(document).ready(function () {
  $(".box-Categories-nav").click(function (e) {
    e.stopPropagation();
    if ($(window).width() <= 992) {
      // e.preventDefault();
    }

    if ($(window).width() >= 992) {
      $(".box-collapse-items").css("transform", "translateX(100%)");
      return;
    }
  });

  $(".item-titel h3").click(function (e) {
    // e.stopPropagation();
    if ($(window).width() <= 992) {
      e.preventDefault();
    }
  });
});

// ===============================================
// login
$(document).ready(function () {
  $("#phone").hide();
  $("#email").hide();
  $("#code").hide();

  $(".btnPhone").click(function () {
    $("#phone").show();

    $("#login").hide();
    $("#email").hide();
    $("#code").hide();
  });

  $(".btnEmail").click(function () {
    $("#email").show();

    $("#login").hide();
    $("#phone").hide();
    $("#code").hide();
  });

  $(".btnSubmitPhoneEmail").click(function () {
    // $("#login").show();
    $("#code").show();

    $("#phone").hide();
    $("#email").hide();
    $("#login").hide();
  });
});


// -----------------------------------------------------
var swiper = new Swiper(".mySwiperCategories", {
  slidesPerView: 1,
  spaceBetween: 10,
  dir:"rtl",

  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,

    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

// document.addEventListener("DOMContentLoaded", function () {
//   var swiperSlides = document.querySelectorAll(".item-Featured-Categories");
//   swiperSlides.forEach((slide, index) => {
//     if (index % 2 === 0) {
//       slide.style.backgroundColor = "#ecffec";
//     } else {
//       slide.style.backgroundColor = "#feefea";
//     }
//   });
// });

// -----------------------------------------------------
var swiper = new Swiper(".mySwiperSells", {
  slidesPerView: 1,
  // spaceBetween: 50,
  loop: true,
  dir:"rtl",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

/*------ Timer Countdown ----*/

// document.addEventListener("DOMContentLoaded", function() {
//   const countdownElements = document.querySelectorAll("[data-countdown]");

//   countdownElements.forEach(function(element) {
//     const finalDate = new Date(element.getAttribute("data-countdown")).getTime();

//     function updateCountdown() {
//       const now = new Date().getTime();
//       const distance = finalDate - now;

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       element.innerHTML =
//         '<span class="countdown-section"><span class="countdown-amount hover-up">' + days + '</span><span class="countdown-period"> days </span></span>' +
//         '<span class="countdown-section"><span class="countdown-amount hover-up">' + hours + '</span><span class="countdown-period"> hours </span></span>' +
//         '<span class="countdown-section"><span class="countdown-amount hover-up">' + minutes + '</span><span class="countdown-period"> mins </span></span>' +
//         '<span class="countdown-section"><span class="countdown-amount hover-up">' + seconds + '</span><span class="countdown-period"> sec </span></span>';

//       if (distance < 0) {
//         clearInterval(interval);
//         element.innerHTML = "EXPIRED";
//       }
//     }

//     updateCountdown();
//     const interval = setInterval(updateCountdown, 1000);
//   });
// });

// ---------------------------------------------------
var swiper = new Swiper(".mySwiperDistinguished", {
  slidesPerView: 1,
  // spaceBetween: 10,
  loop: true,
  dir:"rtl",

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
      // centeredSlides: true,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
// ----------------------------------------------------
// Add to cart
$(document).ready(function () {
  let cartItems = {};

  // Add product to cart
  $(".btn-add-Products-js").on("click", function () {
    const productItem = $(this).closest(".item-product-js");
    const productId = productItem.data("product-item");
    const productTitle = productItem.find(".titel-item-product-js").text();
    const productPrice = parseFloat(
      productItem.find(".price-discount-js").text()
    );
    const productImage = productItem.find(".img-item-product").attr("src");

    if (!cartItems[productId]) {
      cartItems[productId] = {
        id: productId,
        title: productTitle,
        price: productPrice,
        image: productImage,
        quantity: 1,
      };

      $(".box-item-product-aside-cart").append(`
              <li class="item-product-aside-cart" data-product-id="${productId}">
                  <div class="d-flex gap-2 align-items-center">
                      <a href="#"><img src="${productImage}" alt="" /></a>
                      <div>
                          <a href="#"><h3>${productTitle}</h3></a>
                          <div class="pro-qty">
                              <span class="inc qtybtn increaseButtonNavCart">+</span>
                              <input class="qty-val-nav-cart" type="text" value="1" />
                              <span class="dec qtybtn decreaseButtonNavCart">-</span>
                          </div>
                      </div>
                  </div>
                  <div class="text-end-isp">
                      <button class="btn btn-delete-product"><i class="fa-solid fa-trash"></i></button>
                      <div>
                          <span class="price-item-aside">${productPrice.toFixed(
                            2
                          )} </span><span>S.R</span>
                      </div>
                  </div>
              </li>
          `);

      $(this).addClass("active");
      showCart();
      updateCartCount();
      updateTotal();
    }
  });

  // Increase quantity
  $(document).on("click", ".increaseButtonNavCart", function () {
    const productItem = $(this).closest(".item-product-aside-cart");
    const productId = productItem.data("product-id");

    cartItems[productId].quantity += 1;
    productItem.find(".qty-val-nav-cart").val(cartItems[productId].quantity);
    updateItemTotal(productId);
    updateTotal();
  });

  // Decrease quantity
  $(document).on("click", ".decreaseButtonNavCart", function () {
    const productItem = $(this).closest(".item-product-aside-cart");
    const productId = productItem.data("product-id");

    if (cartItems[productId].quantity > 1) {
      cartItems[productId].quantity -= 1;
      productItem.find(".qty-val-nav-cart").val(cartItems[productId].quantity);
      updateItemTotal(productId);
      updateTotal();
    }
  });

  // Delete product
  $(document).on("click", ".btn-delete-product", function () {
    const productItem = $(this).closest(".item-product-aside-cart");
    const productId = productItem.data("product-id");

    delete cartItems[productId];
    productItem.remove();

    $(
      `.item-product-js[data-product-item=${productId}] .btn-add-Products-js`
    ).removeClass("active");
    updateCartCount();
    updateTotal();
    if (Object.keys(cartItems).length === 0) {
      hideCart();
    }
  });

  function showCart() {
    $(".box-item-product-aside-cart, .box-TOTAL-aside-Cart").show();
    $(".item-count-cart").css("display", "flex");
    $(".box-Empty-cart").hide(); // Hide empty cart message
  }

  function hideCart() {
    $(".box-item-product-aside-cart, .box-TOTAL-aside-Cart").hide();
    $(".item-count-cart").hide();
    $(".box-Empty-cart").show(); // Show empty cart message
  }

  function updateCartCount() {
    const itemCount = Object.keys(cartItems).reduce(
      (count, id) => count + cartItems[id].quantity,
      0
    );
    $(".item-count-cart").text(itemCount);
    if (itemCount > 0) {
      $(".item-count-cart").show();
    } else {
      $(".item-count-cart").hide();
      $(".box-Empty-cart").show(); // Show empty cart message
    }
  }

  function updateItemTotal(productId) {
    const item = cartItems[productId];
    const total = item.price * item.quantity;
    $(
      `.item-product-aside-cart[data-product-id=${productId}] .price-item-aside`
    ).text(total.toFixed(2));
  }

  function updateTotal() {
    const total = Object.keys(cartItems).reduce(
      (sum, id) => sum + cartItems[id].price * cartItems[id].quantity,
      0
    );
    $(".total-aside-Cart").text(total.toFixed(2));
  }

  // Initialize the cart
  hideCart();
});

// ===========================================================================
$(document).ready(function () {
  let favoriteItems = {};

  // Add product to favorites
  $(".btn-Favorite-product-js").on("click", function () {
    const productItem = $(this).closest(".item-product-js");
    const productId = productItem.data("product-item");
    const productTitle = productItem.find(".titel-item-product-js").text();
    const productPrice = parseFloat(
      productItem.find(".price-discount-js").text()
    );
    const productImage = productItem.find(".img-item-product").attr("src");

    if (!favoriteItems[productId]) {
      favoriteItems[productId] = {
        id: productId,
        title: productTitle,
        price: productPrice,
        image: productImage,
        quantity: 1,
      };

      $(".box-item-product-aside-Favorite").append(`
              <li class="item-product-aside-Favorite" data-product-id="${productId}">
                  <div class="d-flex gap-2 align-items-center">
                      <a href="#"><img src="${productImage}" alt="" /></a>
                      <div>
                          <a href="#"><h3>${productTitle}</h3></a>
                          <span class="price-item-aside-Favorite">${productPrice.toFixed(
                            2
                          )} </span><span>S.R</span>
                      </div>
                  </div>
                  <div class="text-end-isp">
                      <button class="btn btn-delete-product"><i class="fa-solid fa-trash"></i></button>
                  </div>
              </li>
          `);

      $(this).addClass("active");
      updateFavoriteCount();
    }
  });

  // Delete product from favorites
  $(document).on("click", ".btn-delete-product", function () {
    const productItem = $(this).closest(".item-product-aside-Favorite");
    const productId = productItem.data("product-id");

    delete favoriteItems[productId];
    productItem.remove();

    $(
      `.item-product-js[data-product-item=${productId}] .btn-Favorite-product-js`
    ).removeClass("active");
    updateFavoriteCount();
  });

  function updateFavoriteCount() {
    const itemCount = Object.keys(favoriteItems).length;
    $(".item-count-Favorite").text(itemCount);

    if (itemCount > 0) {
      // $('.item-count-Favorite').show();
      $(".item-count-Favorite").css("display", "flex");
      $(".box-Favorites-empty").hide(); // Hide empty message
    } else {
      $(".item-count-Favorite").hide();
      $(".box-Favorites-empty").show(); // Show empty message
    }
  }

  // Initialize the favorite count
  updateFavoriteCount();
});

// ======================================================
var swiper = new Swiper(".mySwiper44", {
  slidesPerView: 1,
  loop: true,
  dir:"rtl",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grid: {
    rows: 2,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1224: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// ------------------------------------------

var swiper = new Swiper(".mySwiperFeatureProduct", {
  slidesPerView: 1,
  dir:"rtl",

  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
