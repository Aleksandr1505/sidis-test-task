const mainSection = document.querySelector('.main-section');
const burgerMenuBtn = document.querySelector('.burger-menu-button');
const sidebar = document.querySelector('.sidebar');
burgerMenuBtn.addEventListener('click', handleOpenCloseSidebar);

function stopBodyScroll() {
  if (document.body.style.overflow !== 'hidden') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
};

function handleOpenCloseSidebar() {
  const isOpenClassAdded = sidebar.classList.contains('is-open');
  const isSlideClassAdded = mainSection.classList.contains('is-slide');
  if (isOpenClassAdded && isSlideClassAdded) {
    sidebar.classList.remove('is-open');
    mainSection.classList.remove('is-slide');
  } else {
    sidebar.classList.add('is-open');
    mainSection.classList.add('is-slide');
  }
  stopBodyScroll();
};
