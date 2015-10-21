// assignment 2
// User should get successfully logged in

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .url('http://demo.rtcamp.com/rtmedia')
      .waitForElementVisible('body', 1000)
      .assert.title('rtMedia Demo Site')
      .setValue('input[id="bp-login-widget-user-login"]', 'demo') // valid id
      .setValue('input[id="bp-login-widget-user-pass"]', 'demo') // valid password
      .pause(100)
      .click('#bp-login-widget-submit') 
      .pause(5000)
      .assert.visible('.logout') // logout will be present if logged in successfully

      .end();
  }
};
