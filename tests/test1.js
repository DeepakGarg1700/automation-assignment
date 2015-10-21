//Assignment 1
// User should successfully login

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()  // to maximize the window
      .url('http://demo.rtcamp.com/rtmedia') // login site
      .waitForElementVisible('body', 1000)
      .assert.title('rtMedia Demo Site')  // tilte on site
      .setValue('#bp-login-widget-user-login', 'demo') //demo as id
      .setValue('input[id="bp-login-widget-user-pass"]', 'demo') //demo as password
      .pause(100)
      .click('#bp-login-widget-submit') // click on login
      .pause(5000)
      .assert.visible('.logout') // logout will be present if logged in successfully
      .end();
  }
};
