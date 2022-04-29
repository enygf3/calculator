//function that manages the theme
export default function getTheme() {
  if (localStorage.getItem("theme") === "0") {
    document.body.style.background = "#A3A3A3";
    document.querySelector(".app-theme-btn").src = "./sun.webp";
  } else if (localStorage.getItem("theme") === "1") {
    document.body.style.background = "#E9E9E9";
    document.querySelector(".app-theme-btn").src = "./moon.webp";
  } else {
    localStorage.setItem("theme", "0");
    document.querySelector(".app-theme-btn").src = "./sun.webp";
    document.body.style.background = "#A3A3A3";
  }

  //handling click on theme button
  document.querySelector(".app-theme-btn").onclick = function () {
    //reversing the theme value
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "0" ? "1" : "0"
    );

    //changing image source
    document.querySelector(".app-theme-btn").src =
      localStorage.getItem("theme") === "0" ? "./sun.webp" : "./moon.webp";

    //calling the theme function
    localStorage.getItem("theme") === "0" ? dark() : light();
  };

  //calling the theme function on window load
  localStorage.getItem("theme") === "0" ? dark() : light();
}

//light theme function
export function light() {
  document.body.style.background = "#E9E9E9";
  Array.from(document.getElementsByTagName("h3"))
    .concat(Array.from(document.querySelectorAll(".changeable")))
    .forEach((element) => {
      element.style.color = "#000";
    });

  Array.from(document.getElementsByTagName("button")).forEach((element) => {
    !element.className.includes("green-bg")
      ? (element.style.background = "white")
      : (element.style.background = "#029402");
  });
}

//dark theme function
export function dark() {
  document.body.style.background = "#393939";
  Array.from(document.getElementsByTagName("h3"))
    .concat(Array.from(document.querySelectorAll(".changeable")))
    .forEach((element) => {
      element.style.color = "#fff";
    });

  Array.from(document.getElementsByTagName("button")).forEach((element) => {
    !element.className.includes("green-bg")
      ? (element.style.background = "#424141")
      : (element.style.background = "#029402");
  });
}
