const img = document.querySelectorAll(".sliderLine img");
const sliderLine = document.querySelector(".sliderLine");
const dots = document.querySelectorAll(".all__tchk .tchk");
const title_a = document.querySelectorAll(".section__row__up li");
const grid_info = document.querySelectorAll(".grid__info");

let count = 0;
let width;
let baseData = {
  0: {
    city: "Rostov-on-Don <br> LCD admiral",
    apartment_area: "81 m2",
    repair_time: "3.5 months",
    repair_cost: "Upon request",
  },
  1: {
    city: "Sochi <br> Thieves",
    apartment_area: "105 m2",
    repair_time: "4 months",
    repair_cost: "Upon request",
  },
  2: {
    city: "Rostov-on-Don <br> Patriotic",
    apartment_area: "93 m2",
    repair_time: "3 months",
    repair_cost: "Upon request",
  },
};

// ---------------------------------
function handleNextButtonClick() {
  count++;
  if (count >= img.length) {
    count = 0;
  }
  connect();
}

function handlePreviousButtonClick() {
  count--;
  if (count < 0) {
    count = img.length - 1;
  }
  connect();
}

(function add_span() {
  let nameClass = 1;
  grid_info.forEach((item) => {
    let span = document.createElement("span");
    item.append(span);
    span.className = `class${nameClass++}`;
  });
})();

function updateGridInfo(index) {
  let span1 = document.querySelector(".class1");
  span1.innerHTML = baseData[index].city;
  let span2 = document.querySelector(".class2");
  span2.innerHTML = baseData[index].apartment_area;
  let span3 = document.querySelector(".class3");
  span3.innerHTML = baseData[index].repair_time;
  let span4 = document.querySelector(".class4");
  span4.innerHTML = baseData[index].repair_cost;
}

// ---------------------

function init() {
  updateGridInfo(count);
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * img.length + "px";
  img.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "430px";
  });
  stepSlider();
}

function dot(index) {
  dots.forEach((item) => item.classList.remove("tchk-activ"));
  dots[index].classList.add("tchk-activ");
  title_a.forEach((item) => item.classList.remove("a-activ"));
  title_a[index].classList.add("a-activ");
}

function stepSlider() {
  sliderLine.style.transform = `translate(-${count * width}px)`;
}

function connect() {
  stepSlider();
  dot(count);
  updateGridInfo(count);
}

// ------------------Event_beginning-----------------

window.addEventListener("resize", init);
init();

document
  .querySelector(".button-next")
  .addEventListener("click", handleNextButtonClick);

document
  .querySelector(".button-previous")
  .addEventListener("click", handlePreviousButtonClick);

dots.forEach((dot_all, index) => {
  dot_all.addEventListener("click", () => {
    count = index;
    connect();
  });
});

title_a.forEach((dot_all, index) => {
  dot_all.addEventListener("click", () => {
    count = index;
    connect();
  });
});

// ------------------Event_end-----------------