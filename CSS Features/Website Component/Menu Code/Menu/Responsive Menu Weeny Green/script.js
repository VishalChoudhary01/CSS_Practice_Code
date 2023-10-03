const navslide = () => {
  const navMobile = document.querySelector(".nav-mobile");
  const navBar = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  navMobile.addEventListener("click", () => {
    navBar.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 2s ease-in forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    navMobile.classList.toggle('closeNav')
  });
};

navslide();
