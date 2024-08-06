const scrn = document.getElementById("scrn");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.value == "=") {
        if (scrn.value == ""){
            scrn.value = "0";
        }
      scrn.value = eval(scrn.value);
    } else if (
      btn.value == "+" ||
      btn.value == "-" ||
      btn.value == "*" ||
      btn.value == "/"
    ) {
      if (
        !scrn.value.endsWith("+") &&
        !scrn.value.endsWith("-") &&
        !scrn.value.endsWith("*") &&
        !scrn.value.endsWith("/")
      ) {
        scrn.value += btn.value;
      }
    } else {
      scrn.value += btn.value;
    }
  });
});
document.getElementById("clear").addEventListener("click", function () {
  scrn.value = "";
});
document.getElementById("del").addEventListener("click", function () {
  scrn.value = scrn.value.slice(0, -1);
});
