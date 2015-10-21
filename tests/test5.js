// assignment 5
// Post should be published on profile with image /audio/video

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
      .click('#bp-login-widget-submit') // login button
      .pause(5000)
      .setValue('textarea[id="whats-new"]',"this is a demo post") // text post
      .setValue('input[type="file"]', require('path').resolve('img.jpg')) // media post(image)
      .pause(5000)
      .click('#aw-whats-new-submit') // post submit
      .pause(20000)
      .end();
  }
};
