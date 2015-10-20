// upload url

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
      .pause(2000)
      .click('.rtm-url-import-tab')
      .setValue('#rtmedia_url_upload_input','https://static.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg')
      .pause(10000)
      .click('.start-media-upload')
      .pause(20000)


      .end();
  }
};
