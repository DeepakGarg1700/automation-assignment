// assignment 6
// 	Post should be visible according to privacy settings

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo','demo')
      .assert.visible('.logout') // logout must be visivle after logged in
      .setValue('textarea[id="whats-new"]',"this is a demo post to check privacy") // privacy check post
      .pause(3000)
      .click("#rtSelectPrivacy option[value='20']")  //logged in user
      .pause(3000)
      .click('#whats-new-submit') // click on post updates
      .pause(3000)
      .end()
  }
};
