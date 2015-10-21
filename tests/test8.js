// assignment 8
// Image/audio/video/doc should be uploaded in the selected album and with the selected privacy only successfully

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
      .url('http://demo.rtcamp.com/rtmedia/members/demo/media/')
      .pause(1000)
      .click('#rtm-media-options span#rtm_show_upload_ui')
      .pause(5000)
      .setValue('input[type="file"]', require('path').resolve('img.jpg'))
      .pause(20000)
      .click('.start-media-upload')
      .pause(30000)
          .end();
  }
};
