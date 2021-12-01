

// -------------------sticky navbar----------------//

const header = document.querySelector(".menu-btns");
const header_icons = document.querySelector(".responsive-btns");
const header_icons_responsive = document.querySelector(".responsive-btns-flex");

window.onscroll = function () {
  var top = window.scrollY;
  // console.log(top);
  if (top >= 100) {
    header.classList.add("active");
    header_icons.classList.add("active");
    header_icons_responsive.classList.add("active");
  } else {
    header.classList.remove("active");
    header_icons.classList.remove("active");
    header_icons_responsive.classList.add("active");
  }
};

//-------------------project toggler---------------------//

const projectOne = document.querySelector(".project1");
const projectTwo = document.querySelector(".project2");
const projectThree = document.querySelector(".project3");

const navProjectOne = document.querySelector(".title1");
const navProjectTwo = document.querySelector(".title2");
const navProjectThree = document.querySelector(".title3");

navProjectOne.addEventListener("click", (e) => {
  e.preventDefault();
  navProjectOne.classList.add("selected");
  navProjectTwo.classList.remove("selected");
  navProjectThree.classList.remove("selected");

  projectOne.classList.add("project-selected");
  projectTwo.classList.remove("project-selected");
  projectThree.classList.remove("project-selected");
});

navProjectTwo.addEventListener("click", (e) => {
  e.preventDefault();
  navProjectOne.classList.remove("selected");
  navProjectTwo.classList.add("selected");
  navProjectThree.classList.remove("selected");

  projectOne.classList.remove("project-selected");
  projectTwo.classList.add("project-selected");
  projectThree.classList.remove("project-selected");
});

navProjectThree.addEventListener("click", (e) => {
  e.preventDefault();
  navProjectOne.classList.remove("selected");
  navProjectTwo.classList.remove("selected");
  navProjectThree.classList.add("selected");

  projectOne.classList.remove("project-selected");
  projectTwo.classList.remove("project-selected");
  projectThree.classList.add("project-selected");
});

// -----------------------------email popup---------------------//

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
});

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
};

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
};

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
});


// ----------------------------resume popup------------------------//


function openModal(resume) {
  if (resume == null) return
  resume.classList.add('active')
  overlay.classList.add('active')
};

function closeModal(resume) {
  if (resume == null) return
  resume.classList.remove('active')
  overlay.classList.remove('active')
};

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.resume.active')
  modals.forEach(resume => {
    closeModal(resume)
  })
});
