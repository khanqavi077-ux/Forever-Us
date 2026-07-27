// Love Letter
const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");
const letter = document.getElementById("letter");

if (openBtn) {
  openBtn.onclick = () => {
    letter.classList.remove("hidden");
    letter.scrollIntoView({ behavior: "smooth" });
  };
}

if (closeBtn) {
  closeBtn.onclick = () => {
    letter.classList.add("hidden");
  };
}

// Music
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {
  musicBtn.onclick = () => {
    if (music.paused) {
      music.play();
      musicBtn.innerHTML = "⏸ Pause";
    } else {
      music.pause();
      musicBtn.innerHTML = "🎵 Music";
    }
  };
}

// Together Counter
const startDate = new Date("2026-01-01T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  const timer = document.getElementById("timer");

  if (timer) {
    timer.innerHTML =
      `${days} Days<br>${hours} Hours<br>${minutes} Minutes<br>${seconds} Seconds`;
  }
}

setInterval(updateTimer, 1000);
updateTimer();

// Moving No Button
const noBtn = document.getElementById("no");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// Yes Button
const yesBtn = document.getElementById("yes");

if (yesBtn) {
  yesBtn.onclick = () => {
    alert("❤️ Yay! I Love You Forever ❤️");
    createBurst();
  };
}

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");

  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.pointerEvents = "none";
  heart.style.transition = "transform 6s linear, opacity 6s linear";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform =
      `translateY(-${window.innerHeight + 200}px)`;
    heart.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    heart.remove();
  }, 6500);
}

setInterval(createHeart, 600);

// Simple Fireworks
function createBurst() {

  for (let i = 0; i < 40; i++) {

    const spark = document.createElement("div");

    spark.innerHTML = "✨";

    spark.style.position = "fixed";

    spark.style.left = window.innerWidth / 2 + "px";

    spark.style.top = window.innerHeight / 2 + "px";

    spark.style.fontSize = "20px";

    spark.style.pointerEvents = "none";

    const angle = Math.random() * Math.PI * 2;

    const distance = Math.random() * 300;

    spark.style.transition = "all 1.2s ease-out";

    document.body.appendChild(spark);

    setTimeout(() => {

      spark.style.left =
        window.innerWidth / 2 +
        Math.cos(angle) * distance + "px";

      spark.style.top =
        window.innerHeight / 2 +
        Math.sin(angle) * distance + "px";

      spark.style.opacity = "0";

    }, 50);

    setTimeout(() => {

      spark.remove();

    }, 1400);

  }

}