function acordionJS() {
  const btnTitles = Array.from(document.querySelectorAll(".title-acordion"));

  btnTitles.forEach((btnTitle) => {
    btnTitle.addEventListener("click", () => {
      if (btnTitle.className == "title-acordion active") {
        removerClaseActive();
      } else {
        removerClaseActive();
        btnTitle.classList.add("active");
      }
    });
  });

  function removerClaseActive() {
    btnTitles.forEach((element) => {
      element.classList.remove("active");
    });
  }
}
acordionJS();
