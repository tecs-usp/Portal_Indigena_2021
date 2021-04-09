function openMenu() {
  var navbar = document.getElementsByClassName("navbar")[0];
  navbar.style.left = "0";
  window.navigator.vibrate(50);
}

function closeMenu() {
  var navbar = document.getElementsByClassName("navbar")[0];
  navbar.style.left = "-80%";
  window.navigator.vibrate(50);
}

function onResize() {
  var navbar = document.getElementsByClassName("navbar")[0];
  navbar.style.transition = "left 0s";
  if (window.innerWidth >= 768) {
    navbar.style.left = "0";
  } else {
    navbar.style.left = "-80%";
  }

  setTimeout(function () {
    navbar.style.transition = "left 1s";
  }, 500);
}

function changeLang(lang) {
  const regex = new RegExp(/(\/[a-z]n)/, 'i');
  let path = window.location.pathname;
  const match = regex.exec(path);
  if (match) {
    if (match[0] != lang) {
      path = path.replace(regex, `${lang}`);
      console.log("o match foi esse = ", path.match(regex))
      console.log("ir paraaa ", path);
    }
  }
  else {
    if (lang) {
      path = lang + path;
    console.log("ir paraafsfea ", path);
    }
  }
  window.location.assign(path);
}

function closeLanguage() {
  var language = document.getElementById("language-selector-options");
  language.style.height = "0";
  language.style.boxShadow = "unset"
  window.navigator.vibrate(50);
}

function openLanguage() {
  var language = document.getElementById("language-selector-options");
  if (language.style.height == "0px" || language.style.height == 0) {
    language.style.height = "150px";
    language.style.boxShadow = "0 0 8px 2px rgba(0, 0, 0, 0.3)";
    window.navigator.vibrate(50);
  }
  else closeLanguage();
}
window.addEventListener("resize", onResize);
