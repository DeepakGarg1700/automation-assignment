// assignment 8
// Image/audio/video/doc should be uploaded in the selected album and with the selected privacy only successfully

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo','demo') // lo
      .assert.visible('.logout') // logout must be visivle after logged in
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
