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

projectsDataDetails.map((projectsData, index) => {
  const { title, imgSrc, description, skills } = projectsData;
  const projectIndex = `project_${index}`;
  sessionStorage.setItem(projectIndex, JSON.stringify(projectsData));
  document.getElementById("recent_work_container").insertAdjacentHTML(
    "afterend",
    `
    <div class='box-1'>
      <img src=${imgSrc}>
      <div class='box-2'>
          <h1>${title}</h1>
          <p>${description}</p>
          <ul>
              <li>${skills.skill_1}</li>
              <li>${skills.skill_2}</li>
              <li>${skills.skill_3}</li>
              <li>${skills.skill_4}</li>
          </ul>
          <button class='button' onclick='handleSeeProject("${projectIndex}")'>See Project</button>
      </div>
  </div>
`
  );
});

/* My Recent Work Section Detail Box */

const workSectionDetail = document.getElementById(
  "recent_work_detail_container"
);

const handleSeeProject = (projectIndex) => {
  const projectData = JSON.parse(sessionStorage.getItem(projectIndex));
  workSectionDetail.classList.add("recent_work_box_visible");
  workSectionDetail.innerHTML = `<div class='recent_work_detail_box'>
            <div class='recent_work_detail_content'>
                <button class='recent_work_detail_close_btn' onclick='handleCloseProject()'>
                <i class='fa-solid fa-xmark'></i>
                </button>
                <h1>${projectData.title}</h1>
                <img src=${projectData.imgSrc} alt='Blank square'>

                <p>${projectData.description}</p>
                <ul>
                    <li>${projectData.skills.skill_1}</li>
                    <li>${projectData.skills.skill_2}</li>
                    <li>${projectData.skills.skill_3}</li>
                    <li>${projectData.skills.skill_4}</li>

                </ul>
                <button class='button' onclick=''>See Project</button>
            </div>
        </div>
    `;
};

const handleCloseProject = () =>
  workSectionDetail.classList.remove("recent_work_box_visible");

/* Contact Form Section */

const contactForm = document.querySelector(".contact-form");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#text");
const email = document.querySelector("#email");
const msgBox = document.querySelector("#textarea");

const storedFormData = {
  firstName: "",
  lastName: "",
  email: "",
  msgBox: "",
};

firstName.addEventListener("keydown", () => {
  storedFormData.firstName = firstName.value;
  return storeFormData(storedFormData);
});
lastName.addEventListener("keydown", () => {
  storedFormData.lastName = lastName.value;
  return storeFormData(storedFormData);
});
email.addEventListener("keydown", () => {
  storedFormData.email = email.value;
  return storeFormData(storedFormData);
});
msgBox.addEventListener("keydown", () => {
  storedFormData.msgBox = msgBox.value;
  return storeFormData(storedFormData);
});

const storeFormData = (storedFormData) =>
  localStorage.setItem(formData, JSON.stringify(storedFormData));

const formData = {
  firstName: firstName.value,
  lastName: lastName.value,
  email: email.value,
  msgBox: msgBox.value,
};

const validateForm = ({ firstName, lastName, email, msgBox }) => {
  if (firstName.length === 0) {
    document.querySelector(".error-name").innerHTML = "Please enter a name";
    document.querySelector(".error-name").style.color = "red";
  }
  if (lastName.length === 0) {
    document.querySelector(".error-text").innerHTML =
      "Please enter your Last name";
    document.querySelector(".error-text").style.color = "red";
  }
  if (email.length === 0) {
    document.querySelector(".error-email").innerHTML =
      "Please enter a valid email";
    document.querySelector(".error-email").style.color = "red";
  }
  if (msgBox.length === 0) {
    document.getElementById("#error_textarea").innerHTML =
      "Please enter a query";
    document.querySelector("#error_textarea").style.color = "red";
  }
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm(formData)
    ? alert("Message sent successfully")
    : alert("Message not sent");
});
