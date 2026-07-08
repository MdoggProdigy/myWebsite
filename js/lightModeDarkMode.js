var modeVar = 1;
const filename = document.location.pathname.split("/").pop();
console.log(filename)

function modeButton() {
  if (modeVar == 1) {
    darkMode();
    modeVar = 0;
  }
  else {
    lightMode();
    modeVar = 1;
  }
}

function darkMode() {
  if (filename === "index.html" || filename === "") {
    document.getElementById("style").href = "css/darkMode.css";
  } else {
    document.getElementById("style").href = "../css/darkMode.css";
  }
}

function lightMode() {
  if (filename === "index.html" || filename === "") {
    document.getElementById("style").href = "css/lightMode.css";
  } else {
    document.getElementById("style").href = "../css/lightMode.css";
  }
}
