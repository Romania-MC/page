const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log("Showed entry: ");
      console.log(entry.target);
    } /*else {
      entry.target.classList.remove("show");
      console.log("Hidden entry: ");
      console.log(entry.target);
    }*/
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
