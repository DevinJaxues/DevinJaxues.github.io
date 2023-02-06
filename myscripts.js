const numOfStars = 300;
const twinklePercentage = 100;

for (let i = 0; i < numOfStars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.floor(Math.random() * 100) + "vw";
  star.style.top = Math.floor(Math.random() * 100) + "vh";
  star.style.width = Math.floor(Math.random() * 3) + 1 + "px";
  star.style.height = star.style.width;
  if (Math.random() * 300 < twinklePercentage) {
    star.style.animation = "twinkle 3s ease-in-out infinite";
  } else {
    star.style.animation = "none";
  }
  document.querySelector(".stars").appendChild(star);
}
