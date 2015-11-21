exports.command = function() {
var client = this;
var loginurl = url ;

client
   .url(loginurl)
   .pause(500)
   .waitForElementVisible('body', 1000)
   .assert.title('rtMedia Demo Site') // tilte on site
   .setValue('#bp-login-widget-user-login', username) // demo as id
   .setValue('input[id="bp-login-widget-user-pass"]', password) // demo as password
   .pause(100)
   .click('#bp-login-widget-submit') // click on login
   .pause(5000)


return this;
};
