// assignment 2
// User should get successfully logged in

module.exports = {
  'login to rtmedia demo' : function (client) {
    client
      .maximizeWindow()
      .login('http://demo.rtcamp.com/rtmedia','demo','demo') // login
      .assert.visible('.logout') // logout will be present if logged in successfully
      .assert.visible('#ab-pending-notifications') // Successfully pending notification is present
      .end();
  }
};
