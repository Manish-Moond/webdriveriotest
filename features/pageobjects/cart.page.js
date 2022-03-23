class CartPage {
    moveToCartPage = async () => {
        browser.navigateTo(
          "https://rahulshettyacademy.com/angularpractice/shop"
        );
    }
}
export default new CartPage();