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
      .pause(5000)
      .setValue('textarea[id="whats-new"]',"this is a demo post to check privacy")
      .pause(3000)
      .click("#rtSelectPrivacy option[value='20']")  //logged in user
      .pause(3000)
      .click('#whats-new-submit')
      .pause(3000)
      .end()
  }
};