class ShopPage {
  // select comopnent
  get TotalPrice() {
    return $(".text-right");
  }
  get AddCartBtn() {
    return $(".btn.btn-info");
  }

  // Actions
  async moveToShopPage() {
    await browser.navigateTo(
      "https://rahulshettyacademy.com/angularpractice/shop"
    );
  }

  addProdcutsToCart = async (table) => {
    const tableRow = table.hashes();
    console.log(tableRow, "tableRow");
    // var cardTitle = await $$(".card-title");
    // var text = (cardTitle[0].$('a')).getText();
    // console.log(await text, 'txt');
    var cardTitle = await $$(".card-title");
    var addButton = await $$(".btn.btn-info");
    for (const element of tableRow) {
      for (let i = 0; i < 4; i++) {
        var text = (await cardTitle[i].$("a")).getText();
        console.log(await text, ": name of product");
        if (element.product == (await text)) {
          await addButton[i].click();
          console.log("product added to cart");
        }
      }
    }
  };

  moveToCart = async () => {
    var checkOutBtn = await $(".nav-link.btn.btn-primary");
    await checkOutBtn.click();
  };

  cartValidate = async (table) => {
    const tableRow = table.hashes();
    console.log(tableRow, "Validation table");
    var heading = await $$(".media-heading");
    var re = await $$(".col-sm-1.col-md-1.text-center");
    // var text = (await heading[2].$('a')).getText();
    for (const element of tableRow) {
      for (let i = 0; i < 3; i += 2) {
        var text = (await heading[i].$("a")).getText();
        if (element.product == (await text)) {
          console.log(await text, element.product, ": product matches");
        }
      }
      for (let j = 0; j < 3; j += 2) {
        var price = await re[j].getText();
        var priceTo = await re[j + 1].getText();
        if (
          parseInt(price.slice(3, price.length)) * element.quantity ==
          priceTo.slice(3, priceTo.length)
        ) {
          console.log("Done");
        }
      }
    }
  };

  checkTotalPrice = async () => {};
}
export default new ShopPage();
