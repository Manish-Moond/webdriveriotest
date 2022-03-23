class CommonPage {
  LoginPage() {
    browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    const browserTitle = browser.getTitle();
  }
  //   verfiyPageHeading = async () => {}
}
export default new CommonPage();
