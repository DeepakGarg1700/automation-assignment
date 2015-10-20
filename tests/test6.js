// post update with media

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
      .setValue('textarea[id="whats-new"]',"this is a demo post")
      .setValue('input[type="file"]', require('path').resolve('img.jpg'))
      .pause(5000)
      .click('#aw-whats-new-submit')
      .pause(20000)
      .end();
  }
};
