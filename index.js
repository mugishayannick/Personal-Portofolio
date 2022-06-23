if (typeof window !== 'undefined') {
  const navMenuIcon = document.querySelector('.nav-menu-icon');
  const navLinks = document.querySelector('.nav-links');

  navMenuIcon.addEventListener('click', () => {
    navMenuIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    navMenuIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  const menuItem = document.querySelectorAll('.menu-item');
  menuItem.forEach(menu, () => {
    menu.addEventListener('click', () => {
      navMenuIcon.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
});
  }