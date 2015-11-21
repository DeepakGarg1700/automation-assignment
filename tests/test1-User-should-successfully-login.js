//Assignment 1
// User should successfully login

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()  // to maximize the window
      .login('http://demo.rtcamp.com/rtmedia','demo'.'demo') // login 
      .assert.visible('.logout') // logout will be present if logged in successfully
      .assert.visible('#ab-pending-notifications') // Successfully pending notification is present

      .end();
  }
};
