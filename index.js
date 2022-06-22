const navMenuIcon = document.querySelector('.nav-menu-icon');
const navLinks = document.querySelector('.nav-links');

navMenuIcon.addEventListener("click", () => {
    navMenuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
})

const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener("click", () => {
    navMenuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
})

const menuItem = document.querySelectorAll('.menu-item');
menuItem.forEach(menu => {
    menu.addEventListener("click", () => {
        navMenuIcon.classList.toggle("active");
        navLinks.classList.toggle("active");
}) 
})

// const workSection = document.querySelector('#append');

// const portofolio = [
//     {
//         heading: "Multi-Post Stories",
//         highlight: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//         image: "images/ImgPlaceholder.png",
//         skill1: "css",
//         skill2: "Html",
//         skill3: "bootstrap",
//         skill4: "Ruby",

//     }
// ];

// // create card
// for (let i = 0; i < 6; i++){
// let article = document.createElement('article');
// article.classList = 'down';
// workSection.appendChild(article);

// let div = document.createElement('div');
// div.classList = 'box-1 row__rev';
// article.appendChild(div);

// // create image of card
// let img = document.createElement('img');
// img.src = (portofolio[0].image);
// div.appendChild(img);

// let box = document.createElement('div');
// box.classList = 'box-2';
// div.appendChild(box);


// // create title of card

// let h1 = document.createElement('h1');
// h1.innerHTML = portofolio[0].heading;
// box.appendChild(h1);

// //create text of card
// let p = document.createElement('p');
// p.innerHTML = portofolio[0].highlight;
// box.appendChild(p);

// let ul = document.createElement('ul');
// box.appendChild(ul);

// let li1 = document.createElement('li');
// li1.innerHTML = portofolio[0].skill1;

// }