let image01 = document.getElementById("side_tiny_img01");
let image02 = document.getElementById("side_tiny_img02");
let imageMain = document.getElementById("main_photo_img");

image01.onclick = function () {
  image01.classList.add('selected')
  image02.classList.remove('selected')
  imageMain.src = image01.src;
}

image02.onclick = function () {
  image02.classList.add('selected')
  image01.classList.remove('selected')
  imageMain.src = image02.src;
}