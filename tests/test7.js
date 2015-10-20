// assignment edit profile


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
      .assert.visible('.logout')
      .url('http://demo.rtcamp.com/rtmedia/members/demo/profile/edit/')
      .clearValue('#field_1')
      .setValue('#field_1','testdemo')
      .pause(1000)
      .click('input[type="submit"]')
      .pause(4000)
      .assert.valueContains("#message p", "Changes saved.")

  }
};
