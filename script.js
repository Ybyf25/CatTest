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

  // Случайное размещение кнопки "Мяу!"
  if (meowButton) {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    meowButton.style.left = `${x}px`;
    meowButton.style.top = `${y}px`;

    meowButton.addEventListener("click", () => {
      if (meowSound) {
        meowSound.currentTime = 0;
        meowSound.play();
      }
    });
  }
});
