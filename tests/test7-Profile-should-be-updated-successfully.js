// assignment 7
// Profile should be updated successfully


module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo','demo')
      .assert.visible('.logout')
      .url('http://demo.rtcamp.com/rtmedia/members/demo/profile/edit/') // url for profile update
      .clearValue('#field_1') // clearing previous
      .setValue('#field_1','testdemo') // name update
      .pause(1000)
      .click('input[type="submit"]') // click on save chnanges
      .pause(4000)
      .assert.visible('#message') // after updating changes saved shold be visible


  .end();


  }
};
