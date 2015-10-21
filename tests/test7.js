// assignment 7
// Profile should be updated successfully


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
      .click('#bp-login-widget-submit') // click on loggin button
      .pause(5000)
      .assert.visible('.logout')
      .url('http://demo.rtcamp.com/rtmedia/members/demo/profile/edit/') // url for profile update
      .clearValue('#field_1') // clearing previous
      .setValue('#field_1','testdemo') // name update
      .pause(1000)
      .click('input[type="submit"]') // click on save chnanges
      .pause(4000)
      .assert.valueContains("#message p", "Changes saved.") // after updating changes saved shold be visible


  }
};
