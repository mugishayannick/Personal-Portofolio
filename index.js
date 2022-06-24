if (typeof window !== "undefined") {
  const navMenuIcon = document.querySelector(".nav-menu-icon");
  const navLinks = document.querySelector(".nav-links");

  navMenuIcon.addEventListener("click", () => {
    navMenuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  const closeIcon = document.querySelector(".close-icon");
  closeIcon.addEventListener("click", () => {
    navMenuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  const menuItem = document.querySelectorAll(".menu-item");
  menuItem.forEach((menu) => {
    menu.addEventListener("click", () => {
      navMenuIcon.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  });
}

const portofolio = [
  {
    heading: "Multi-Post Stories",
    highlight:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "images/ImgPlaceholder.png",
    skill1: "css",
    skill2: "Html",
    skill3: "bootstrap",
    skill4: "Ruby",
    button: "See project",
  },
];

const contactForm = document.querySelector(".contact-form");
const name = document.getElementById("name");
const text = document.getElementById("text");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
contactForm.addEventListener("submit", (e) => {
  console.log("saved");
  alert("Message sent successfully");
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const text = document.querySelector("#text").value;
  const email = document.querySelector("#email").value;
  const textarea = document.querySelector("#textarea").value;
  if (name.length == 0) {
    document.querySelector(".error-name").innerHTML = "Please enter a name";
    document.querySelector(".error-name").style.color = "red";
  } else if (text.length === 0) {
    document.querySelector(".error-text").innerHTML =
      "Please enter your Last name";
    document.querySelector(".error-text").style.color = "red";
  } else if (email.length === 0) {
    document.querySelector(".error-email").innerHTML =
      "Please enter a valid email";
    document.querySelector(".error-email").style.color = "red";
  } else if (textarea.length === 0) {
    document.getElementById("#error_textarea").innerHTML =
      "Please enter a query";
    document.querySelector("#error_textarea").style.color = "red";
  } else {
    //contactForm.submit();
    //add data to localstorage
    var messageObject = {
      visitorname: name,
      visitorlastname: text,
      visitoremail: email,
      message: text,
    };
    console.log(messageObject);
    if (localStorage.getItem("messages")) {
      //append
      var mymessages = JSON.parse(localStorage.getItem("messages")) || [];
      mymessages.push(messageObject);
      localStorage.setItem("messages", JSON.stringify(mymessages));
    } else {
      //set localstorage key and value
      localStorage.setItem("messages", JSON.stringify(messageObject));
    }
    console.log(JSON.parse(localStorage.getItem("messages")));
  }
});

/* My Recent Work Section */

const projectsDataDetails = [
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    imgSrc: "./images/ImgPlaceholder.png",
    skills: {
      skill_1: "css",
      skill_2: "html",
      skill_3: "bootstrap",
      skill_4: "Ruby",
    },
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    imgSrc: "./images/ImgPlaceholder.png",
    skills: {
      skill_1: "css",
      skill_2: "html",
      skill_3: "bootstrap",
      skill_4: "Ruby",
    },
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    imgSrc: "./images/ImgPlaceholder.png",
    skills: {
      skill_1: "css",
      skill_2: "html",
      skill_3: "bootstrap",
      skill_4: "Ruby",
    },
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    imgSrc: "./images/ImgPlaceholder.png",
    skills: {
      skill_1: "css",
      skill_2: "html",
      skill_3: "bootstrap",
      skill_4: "Ruby",
    },
  },
];

projectsDataDetails.map((projectsData) => {
  document.getElementById("recent_work_container").insertAdjacentHTML('afterend', `
  <div class="box-1">
      <img src=${projectsData.imgSrc}>
      <div class="box-2">
          <h1>${projectsData.title}</h1>
          <p>${projectsData.description}</p>
          <ul>
              <li>${projectsData.skills.skill_1}</li>
              <li>${projectsData.skills.skill_2}</li>
              <li>${projectsData.skills.skill_3}</li>
              <li>${projectsData.skills.skill_4}</li>
          </ul>
          <button class="button" onclick="handleSeeProject(projectsData.title, projectsData.imgSrc, projectsData.description, projectsData.skills)">See Project</button>
      </div>
  </div>
`)
});

/* My Recent Work Section Detail Box */

const workSectionDetail = document.getElementById(
  "recent_work_detail_container"
);

const handleSeeProject = (title, imgSrc, description, { skills }) => {
  workSectionDetail.classList.add("recent_work_box_visible");
  workSectionDetail.innerHTML = `<div class="recent_work_detail_box">
            <div class="recent_work_detail_content">
                <button class="recent_work_detail_close_btn" onclick="handleCloseProject()">
                <i class="fa-solid fa-xmark"></i>
                </button>
                <h1>${title}</h1>
                <img src=${imgSrc} alt="Blank square">

                <p>${description}</p>
                <ul>
                    <li>${skills.skill_1}</li>
                    <li>${skills.skill_2}</li>
                    <li>${skills.skill_3}</li>
                    <li>${skills.skill_4}</li>

                </ul>
                <button class="button" onclick="">See Project</button>
            </div>
        </div>
    `;
};

const handleCloseProject = () =>
  workSectionDetail.classList.remove("recent_work_box_visible");





