let sliderLine_mobil = document.querySelector(".sliderLine-mobil");
let img_mobil = document.querySelectorAll(".sliderLine-mobil img");
let button_previous_mobil = document.querySelector(".button-previous-mobil");
let button_next_mobil = document.querySelector(".button-next-mobil");
let width_mobil;
let count_mobil = 0;
window.addEventListener("resize", init_mobil);
init_mobil();
function init_mobil() {
  width_mobil = document.querySelector(".slider-mobil").offsetWidth;

  sliderLine_mobil.style.width = width_mobil * img_mobil.length + "px";
  img_mobil.forEach((item) => {
    item.style.width = width_mobil + "px";
    item.style.height = "350px";
  });

  stepSlider_mobil();
}

function stepSlider_mobil() {
  console.log(width_mobil);
  sliderLine_mobil.style.transform = `translate(-${
    count_mobil * width_mobil
  }px)`;
}

button_next_mobil.addEventListener("click", function () {
  count_mobil++;
  if (count_mobil >= img_mobil.length) {
    count_mobil = 0;
  }
  stepSlider_mobil();
});

button_previous_mobil.addEventListener("click", function () {
  count_mobil--;
  if (count_mobil < 0) {
    count_mobil = img_mobil.length - 1;
  }
  stepSlider_mobil();
});
