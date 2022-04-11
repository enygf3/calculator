export default function getTheme() {
  if (localStorage.getItem("theme") === "0") {
    document.body.style.background = "#A3A3A3";
    document.querySelector(".app-theme-btn").src = "./sun.ico";
  } else if (localStorage.getItem("theme") === "1") {
    document.body.style.background = "#E9E9E9";
    document.querySelector(".app-theme-btn").src = "./moon.png";
  } else {
    localStorage.setItem("theme", "0");
    document.querySelector(".app-theme-btn").src = "./sun.ico";
    document.body.style.background = "#A3A3A3";
  }

  document.querySelector(".app-theme-btn").onclick = function () {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "0" ? "1" : "0"
    );

    document.querySelector(".app-theme-btn").src =
      localStorage.getItem("theme") === "0" ? "./sun.ico" : "./moon.png";

    localStorage.getItem("theme") === "0" ? dark() : light();
  };

  localStorage.getItem("theme") === "0" ? dark() : light();
}

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
