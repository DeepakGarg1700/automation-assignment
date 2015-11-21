// assignment 5
// Post should be published on profile with image /audio/video

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo','demo')
      .assert.visible('.logout') // logout must be visivle after logged in
    //  .setValue('textarea[id="whats-new"]',"this is a demo post") // text post
      .setValue('input[type="file"]', require('path').resolve('img.jpg')) // media post(image)
      .pause(10000)
      .click('#aw-whats-new-submit') // post submit
      .pause(30000)
      .end();
  }
};
