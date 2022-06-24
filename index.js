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
  menuItem.forEach((menu) => {
    menu.addEventListener('click', () => {
      navMenuIcon.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  });
}


const contactForm = document.querySelector('.contact-form');
const name = document.getElementById('name');
const text = document.getElementById('text');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
contactForm.addEventListener('submit', (e) => {
alert('Message sent successfully');
e.preventDefault();
const name = document.querySelector('#name').value;
const text = document.querySelector('#text').value;
const email = document.querySelector('#email').value;
const textarea = document.querySelector('#textarea').value;
  if (name.length == 0) {
    document.querySelector('.error-name').innerHTML = 'Please enter a name';
    document.querySelector('.error-name').style.color = 'red';
  } else if (text.length === 0) {
    document.querySelector('.error-text').innerHTML =
      'Please enter your Last name';
    document.querySelector('.error-text').style.color = 'red';
  } else if (email.length === 0) {
    document.querySelector('.error-email').innerHTML =
      'Please enter a valid email';
    document.querySelector('.error-email').style.color = 'red';
  } else if (textarea.length === 0) {
    document.getElementById('#error_textarea').innerHTML =
      'Please enter a query';
    document.querySelector('#error_textarea').style.color = 'red';
  } else {
    // contactForm.submit();
    // add data to localstorage
  var messageObject = {
    visitorname: name,
    visitorlastname: text,
    visitoremail: email,
    message: textarea,
  };
  if (localStorage.getItem('messages')) {
      // append
      const mymessages = JSON.parse(localStorage.getItem('messages')) || [];
      mymessages.push(messageObject);
      localStorage.setItem('messages', JSON.stringify(mymessages));
    } else {
    // set localstorage key and value
      localStorage.setItem('messages', JSON.stringify(messageObject));
    }
  }
});