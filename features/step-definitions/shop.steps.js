import { When, Then } from "@wdio/cucumber-framework";
import ShopPage from "../pageobjects/shop.page";
import CartPage from "../pageobjects/cart.page";

When(/^I move to shop page$/, async () => {
  await ShopPage.moveToShopPage();
});

Then(/^click on checkout button$/, async () => {
  // await CartPage.moveToCartPage();
})

Then(/^I add below products to the cart$/, async (table) => {
  await ShopPage.addProdcutsToCart(table);
});

Then(/^I shell move to cart$/, async () => {
  await ShopPage.moveToCart();
});

Then(/^I shell validate product, quantity and price$/, async (table) => {
  await ShopPage.cartValidate(table);
});

Then(/^Total price in cheackout is 285000$/, async () => {
  await ShopPage.checkTotalPrice();
});
