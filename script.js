document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  const pageFlipSound = document.getElementById("pageFlip");
  const meowSound = document.getElementById("meow");
  const meowButton = document.getElementById("meowButton");

  // Переход со звуком
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      if (pageFlipSound) {
        pageFlipSound.currentTime = 0;
        pageFlipSound.play();
      }

      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });

  document.body.classList.add("page");

  // Случайное размещение кнопки "Мяу!" строго под рамкой
  if (meowButton) {
    const main = document.querySelector("main");

    if (main) {
      const mainRect = main.getBoundingClientRect();
      const x = Math.floor(Math.random() * (window.innerWidth - 120)); // случайная ширина
      const y = window.scrollY + mainRect.bottom + 20; // строго под рамкой

      meowButton.style.position = "absolute";
      meowButton.style.left = `${x}px`;
      meowButton.style.top = `${y}px`;
    }

    meowButton.addEventListener("click", () => {
      if (meowSound) {
        meowSound.currentTime = 0;
        meowSound.play();
      }
    });
  }
});
