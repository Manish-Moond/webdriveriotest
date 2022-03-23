import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page";
import CommonPage from "../pageobjects/common.page";
import ShopPage from "../pageobjects/shop.page";

Given(/^I am on the login page$/, async () => {
  CommonPage.LoginPage();
});

Then(/^I login with rahulshettyacademy and learning$/, async () => {
  await browser.$("//input[@id='username']").setValue("rahulshettyacademy");
  await browser.$("//input[@id='password']").setValue("learning");
  await browser.$("//input[@id='terms']").click();
  await browser.$("//input[@id='signInBtn']").click();
  // await LoginPage.loginAccount();
});

Then(/^I should on home page$/, async () => {
  var er = await browser.getUrl();
  console.log(er, "manish");
});
