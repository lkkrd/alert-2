const agreeBtns = document.querySelectorAll(".btn");

agreeBtns.forEach((agreeBtn) => {
  agreeBtn.addEventListener("click", () => {
    let alert = document.getElementById("alert-positioner");
    alert.style.display = "none";
    console.log(alert);
  });
});
