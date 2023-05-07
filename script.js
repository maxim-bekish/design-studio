let img = document.querySelectorAll(".sliderLine img");
let sliderLine = document.querySelector(".sliderLine-mobi");
let dots = document.querySelectorAll(".all__tchk .tchk");

let count = 0;
let width;
function init() {

  width = document.querySelector(".slider").offsetWidth;
    console.log(img.length);
  sliderLine.style.width = width * img.length + "px";
  img.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "430px";
  });
  stepSlider();
}
window.addEventListener("resize", init);
init();
document.querySelector(".button-next").addEventListener("click", function () {
  count++;

  if (count >= img.length) {
    count = 0;
  }

  stepSlider();
  // dot(count);
});

document
  .querySelector(".button-previous")
  .addEventListener("click", function () {
    count--;

    if (count < 0) {
      count = img.length - 1;
    }

    stepSlider();
    // dot(count);
  });

function stepSlider() {
  sliderLine.style.transform = `translate(-${count * width}px)`;
}

function dot(index) {
  dots.forEach((item) => item.classList.remove("tchk-activ"));
  dots[index].classList.add("tchk-activ");
}
