let closeBtns = document.querySelectorAll('.close-btn');
let menuBar = document.querySelector('.menu-bar');
let nav = document.querySelector('.nav');

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.classList.remove('active');
  })
})
menuBar.addEventListener('click', () => {
  nav.classList.add('active');
})
let accountBtn = document.querySelector('header .icons .account');
let loginRegister = document.querySelector('.login-register');
accountBtn.addEventListener('click', () => {
  loginRegister.classList.add('active');
})
// Swipers
let homeSwiper = new Swiper('.home-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true
})
let teacherSwiper = new Swiper('.teacher-swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
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
  }
})
let reviewSwiper = new Swiper('.review-swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    }
  }
})

// Load More Button in Course Page
if (document.title.toLowerCase() == 'courses') {
  document.querySelector('.courses .load-more .main-btn').onclick = function (event) {
    event.preventDefault();
    document.querySelectorAll('.courses .container .toggle').forEach(item => {
      item.classList.toggle('hide');
    })
    if (this.textContent == 'back') this.textContent = 'load more';
    else this.textContent = 'back';
  }


}