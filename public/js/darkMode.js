// Variables
const toggle = document.querySelector(".switch__input");
const body = document.querySelector("body");
let theme = localStorage.getItem("darkTheme");

// Function: enableDarkTheme
// No params
function enableDarkTheme() {
  // add class darkTheme to body
  body.classList.add("darkTheme");
  // Set local storage for darkTheme
  localStorage.setItem("darkTheme", "enabled");
}

// Function: disableDarkTheme
// No params
function disableDarkTheme() {
  // remove class darkTheme to body
  body.classList.remove("darkTheme");
  // Set local storage for darkTheme
  localStorage.removeItem("darkTheme");
}

// On page load, check if the dark theme is applied
if (theme === "enabled") {
  // if it is, enable dark theme
  enableDarkTheme();
  // set switch input to true
  toggle.checked = true;
}

// Event listener for toggle button
toggle.addEventListener("click", () => {
  // refresh local storage
  theme = localStorage.getItem("darkTheme");
  // check current theme
  if (theme !== "enabled") {
    // if not theme applied, enable dark theme
    enableDarkTheme();
  } else {
    // disable dark theme
    disableDarkTheme();
  }
});