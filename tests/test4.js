// assignment 4
// Post should be published on profile with text
module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .url('http://demo.rtcamp.com/rtmedia')
      .waitForElementVisible('body', 1000)
      .assert.title('rtMedia Demo Site')
      .setValue('input[id="bp-login-widget-user-login"]', 'demo') // id demo
      .setValue('input[id="bp-login-widget-user-pass"]', 'demo') // password demo
      .pause(100)
      .click('#bp-login-widget-submit') // login button
      .pause(5000)
      .assert.visible('.logout') // logout must be visivle after logged in
      .setValue('#whats-new','this a demo post') // text demo post
      .pause(1000)
      .click('#aw-whats-new-submit') // post update
      .pause(5000)
      .end();
  }
};
