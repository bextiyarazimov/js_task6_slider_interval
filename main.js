const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const image = document.querySelectorAll("img");

const images = document.querySelector(".images");


let currentImg =1 ;

let timeout;

next.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prev.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > image.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = image.length;
  }
  images.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
