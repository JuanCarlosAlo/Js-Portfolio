const darkModeToggle = (darkMode, sun, moon) => {
  document.body.classList.toggle("body-dark");
  if (document.body.classList.contains("body-dark")) {
    darkMode.children[1].src = moon;
    darkMode.children[0].textContent = "LIGHT";
  } else {
    darkMode.children[1].src = sun;
    darkMode.children[0].textContent = "DARK";
  }
};

export { darkModeToggle };
