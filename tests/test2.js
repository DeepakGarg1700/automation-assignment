// assignment 1

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .url('http://demo.rtcamp.com/rtmedia')
      .waitForElementVisible('body', 1000)

      .assert.title('rtMedia Demo Site')

      .setValue('input[id="bp-login-widget-user-login"]', 'demo')
      .setValue('input[id="bp-login-widget-user-pass"]', 'demo')
      .pause(100)
      .click('#bp-login-widget-submit')
      .pause(5000)
  //assert title i am loged in
//??
      .end();
  }
};
