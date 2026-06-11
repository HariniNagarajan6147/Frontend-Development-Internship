const imgs = document.querySelectorAll(".gallery img");
const preview = document.getElementById("pre");
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    preview.src = img.src;
    imgs.forEach((i) => {
      i.classList.remove("active");
    });
    img.classList.add("active","fade-in");
  });
});
