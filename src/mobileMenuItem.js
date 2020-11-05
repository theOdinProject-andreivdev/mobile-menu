export default class mobileMenuItem {
  constructor(_element) {
    console.log("mobile menu item created");
    this.element = _element;
    this.setHidden();
  }

  setHidden() {
    this.element.style.display = "none";
  }

  setVisible() {
    this.element.style.display = "flex";
  }
}
