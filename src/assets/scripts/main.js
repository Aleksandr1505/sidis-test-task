const main = document.querySelector('.main');
const burgerMenuBtn = document.querySelector('.burger-menu-button');
const sidebar = document.querySelector('.sidebar');
burgerMenuBtn.addEventListener('click', handleOpenCloseSidebar);

function stopBodyScroll() {
  if (document.body.style.overflow !== 'hidden') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
}

function handleOpenCloseSidebar() {
  const isOpenClassAdded = sidebar.classList.contains('is-open');
  const isMainSlided = main.classList.contains('is-slide');

  if (isOpenClassAdded && isMainSlided) {
    sidebar.classList.remove('is-open');
    main.classList.remove('is-slide');
  } else {
    sidebar.classList.add('is-open');
    main.classList.add('is-slide');
  }
  stopBodyScroll();
}
