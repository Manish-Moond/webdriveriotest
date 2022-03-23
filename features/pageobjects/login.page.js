class LoginPage {
  // webElement selector
  get UserNameInput() {
    return $("#username");
  }
  get PasswordInput() {
    return $("#password");
  }
  get Checkbox() {
    return $("#terms");
  }
  get SignBtn() {
    return $("#signInBtn");
  }
  // Actions
  loginAccount = async () => {
    await browser.$("//input[@id='username']").setValue("rahulshettyacademy");
    await browser.$("//input[@id='password']").setValue("learning");
    await browser.$("//input[@id='terms']").click();
    await browser.$("//input[@id='signInBtn']").click();
  };
}
export default new LoginPage();
