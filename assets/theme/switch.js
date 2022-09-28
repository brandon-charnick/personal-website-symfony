(function () {
  let light_switch = document.getElementById("light-switch");
  if (!light_switch) {
    return;
  }

  function darkMode() {
    document.querySelectorAll(".bg-light").forEach((element) => {
      element.className = element.className.replace(/-light/g, "-dark");
    });

    document.body.classList.add("bg-dark");

    if (document.body.classList.contains("text-dark")) {
      document.body.classList.replace("text-dark", "text-light");
    } else {
      document.body.classList.add("text-light");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      tables[i].classList.add("table-dark");
    }

    if (!light_switch.checked) {
      light_switch.checked = true;
    }
    localStorage.setItem("light_switch", "dark");
  }

  function lightMode() {
    document.querySelectorAll(".bg-dark").forEach((element) => {
      element.className = element.className.replace(/-dark/g, "-light");
    });

    document.body.classList.add("bg-light");

    if (document.body.classList.contains("text-light")) {
      document.body.classList.replace("text-light", "text-dark");
    } else {
      document.body.classList.add("text-dark");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains("table-dark")) {
        tables[i].classList.remove("table-dark");
      }
    }

    if (light_switch.checked) {
      light_switch.checked = false;
    }
    localStorage.setItem("light_switch", "light");
  }

  function onToggleMode() {
    if (light_switch.checked) {
      darkMode();
    } else {
      lightMode();
    }
  }

  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    }
    return "light";
  }

  function setup() {
    var settings = localStorage.getItem("light_switch");

	if (settings === null) {
		light_switch.checked = true;
	  	localStorage.setItem("light_switch", "dark");
    }
    if (settings === "dark") {
		light_switch.checked = true;
	  	localStorage.setItem("light_switch", "dark");
    }

    light_switch.addEventListener("change", onToggleMode);
    onToggleMode();
  }

  setup();
})();
