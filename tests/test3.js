// assignment 3
// User should get error message,should not get logged in

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .url('http://demo.rtcamp.com/rtmedia')
      .waitForElementVisible('body', 1000)
      .assert.title('rtMedia Demo Site')
      .setValue('#bp-login-widget-user-login', 'demo_invalid_login_detail') // invalid id
      .setValue('input[id="bp-login-widget-user-pass"]', 'demo')
      .pause(100)
      .click('#bp-login-widget-submit')
      .pause(5000)
    //  .assert.elementNotPresent('.logout')
      .assert.visible('#login_error')  // error message
      .end();
  }
};
