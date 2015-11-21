// assignment 4
// Post should be published on profile with text
module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo','demo')
      .assert.visible('.logout') // logout must be visivle after logged in
      .setValue('#whats-new','this a demo post') // text demo post
      .pause(1000)
      .click('#aw-whats-new-submit') // post update
      .pause(5000)
      .assert.visible('#activity-stream') // after text post updated it should be visible
      .end();
  }
};
