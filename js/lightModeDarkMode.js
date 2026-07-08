if (typeof (Storage) !== "undefined") {
  var modeVar = 1;
  
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
    document.getElementById("style").href = "../css/darkMode.css";
  }

  function lightMode() {
    document.getElementById("style").href = "../css/lightMode.css";
  }
} else {
  alert('Sorry! No Web Storage support..');
}
