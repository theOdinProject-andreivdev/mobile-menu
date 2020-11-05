import mobileMenu from "./mobileMenu";
import mobileMenuItem from "./mobileMenuItem";

let menu = new mobileMenu(document.querySelector(".mobileMenu"));

document.querySelectorAll(".mobileMenuItem").forEach((element) => {
  menu.addItem(new mobileMenuItem(element));
});
