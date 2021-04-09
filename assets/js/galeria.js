let imagens = document.querySelectorAll(".small-img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector("#modal-img");
let btClose = document.querySelector("#bt-close");
let backgroundClose = document.querySelector("#modal-background");
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("click", function () {
    srcVal = imagens[i].getAttribute("src");
    modalImg.setAttribute("src", srcVal);
    modal.classList.toggle("modal-active");
  });
}

btClose.addEventListener("click", function () {
  modal.classList.toggle("modal-active");
});

backgroundClose.addEventListener("click", function () {
  modal.classList.toggle("modal-active");
});
