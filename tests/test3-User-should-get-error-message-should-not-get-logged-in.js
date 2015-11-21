// assignment 3
// User should get error message,should not get logged in

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo_invalid_details','demo')
    //  .assert.elementNotPresent('.logout')
      .assert.visible('#login_error')  // error message
       
      .end();
  }
};
