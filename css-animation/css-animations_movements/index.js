/*  -----------------------------------------------------------
            Challenge 1: Card Background Fade
---------------------------------------------------------------- */

const changeColorButton = document.querySelector("[data-js=changeColorButton]");
const colorChangeCard = document.querySelector("[data-js=colorChangeCard]");
const colors = ["#e0f7fa", "#ffe0b2", "#c8e6c9", "#ffccbc", "#d1c4e9"]; // Light pastel colors
let currentColorIndex = 0;

changeColorButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  colorChangeCard.style.background = colors[currentColorIndex];
  colorChangeCard.textContent = "Color Changed!";
  // Add your solution below
});

/*  -----------------------------------------------------------
            Challenge 2: Button Hover Size Change
---------------------------------------------------------------- */

// No JavaScript needed as CSS :hover pseudo-class handles the animation.
// We included a basic click active state for completeness.

/*  -----------------------------------------------------------
            Challenge 3: Loading Spinner Toggle
---------------------------------------------------------------- */
const toggleLoaderButton = document.querySelector(
  "[data-js=toggleLoaderButton]"
);
const loaderContainer = document.querySelector("[data-js=loaderContainer]");
let loaderActive = false;

toggleLoaderButton.addEventListener("click", () => {
  const isActive = loaderContainer.classList.toggle("active");
  toggleLoaderButton.setAttribute("aria-pressed", String(isActive))
  toggleLoaderButton.textContent = isActive ? "Hide Loader" : "Toggle Loader";
  // Add your solution below
});

/*  -----------------------------------------------------------
            Challenge 4: Slide-in Div
---------------------------------------------------------------- */
const slideInButton = document.querySelector("[data-js=slideInButton]");
const slideInBox = document.querySelector("[data-js=slideInBox]");

slideInButton.addEventListener("click", () => {
  const isActive = slideInBox.classList.toggle("active");
  slideInButton.textContent = isActive ? "Slide out" : "Toggle Slide-in Div";
  
  // Add your solution below
});
