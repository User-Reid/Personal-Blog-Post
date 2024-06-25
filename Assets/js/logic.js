const storedMode = localStorage.getItem("mode");
if (storedMode) {
  document.body.classList.add(storedMode);
}

document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const mode = document.body.classList.contains("dark-mode") ? "dark-mode" : "";
  localStorage.setItem("mode", mode);
});
