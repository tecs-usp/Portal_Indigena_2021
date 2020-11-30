function openMenu() {
  var navbar = document.getElementsByClassName("navbar")[0];
  navbar.style.left = "0";
}

function closeMenu() {
  var navbar = document.getElementsByClassName("navbar")[0];
  navbar.style.left = "-80%";
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

window.addEventListener("resize", onResize);
