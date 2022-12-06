const sitenav = document.querySelector(".sitenav");
const toggleBtn = document.querySelector(".toggele-btn");
const toggleBtnImg = document.querySelector(".toggele-btn img");

toggleBtn.addEventListener("click", () => {
  sitenav.classList.toggle("hidden");

  if (sitenav.classList.contains("hidden")) {
    toggleBtnImg.src = "../images/svg/hamburger-icon.svg";
  } else {
    toggleBtnImg.src = "../images/svg/close-icon.svg";
  }
});
