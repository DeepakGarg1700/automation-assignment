// assignment 9
// Image/audio/video/doc should be uploaded successfully in the selected album and with the selected privacy only

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo','demo')
      .assert.visible('.logout') // logout must be visivle after logged in
      .url('http://demo.rtcamp.com/rtmedia/members/demo/media/') // url for media upload
      .pause(1000)
      .click('#rtm-media-options span#rtm_show_upload_ui') // click on upload button
      .pause(2000)
      .click('.rtm-url-import-tab') // click on url import
      .setValue('#rtmedia_url_upload_input','https://static.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg') //  copy the url in given space
      .pause(20000)
      .click('.start-media-upload') // click on start upload
      .pause(10000)


      .end();
  }
};
