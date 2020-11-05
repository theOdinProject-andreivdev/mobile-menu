export default class mobileMenu {
  constructor(_element) {
    console.log("mobile menu created");
    this.element = _element;
    this.items = [];

    this.addHandlers();
  }

  addHandlers() {
    this.element.addEventListener(
      "mouseover",
      function () {
        this.items.forEach((item) => {
          item.setVisible();
        });
      }.bind(this)
    );

    this.element.addEventListener(
      "mouseout",
      function () {
        this.items.forEach((item) => {
          item.setHidden();
        });
      }.bind(this)
    );
  }

  addItem(item) {
    this.items.push(item);
  }
}
