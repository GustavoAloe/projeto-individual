// Carrossel Imagens Sobre
let count = 1;
var checkbox = document.getElementById("radio1");
if (checkbox) {
  checkbox.checked = true;
}

setInterval(function () {
  nextImage();
}, 9000);

function nextImage() {
  count++;
  if (count > 6) {
    count = 1;
  }

  var nextCheckbox = document.getElementById("radio" + count);
  if (nextCheckbox) {
    nextCheckbox.checked = true;
  }
}

// Carrossel Camp
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("left-arrow");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });

    items[currentItem].classList.add("current-item");
  });
});
