
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("aberto");

    menuBtn.textContent = menu.classList.contains("aberto")
      ? "✕"
      : "☰";
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("aberto");
      menuBtn.textContent = "☰";
    });
  });
}
