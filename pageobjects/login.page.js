const assert = require('assert');

class LoginPage {
    
    get website () {return ('https://github.com/login')}
    get loginInput () {return $('#login_field')}
    get passInput () {return $('#password')}
    get signinBtn () {return $('[value="Sign in"]')}
    get verify () {return $('[class*="avatar-user "]')}
    
    async open(){
        await browser.url(this.website)
    }

    async assertLogIn(){
        assert(await (await this.verify).getAttribute('alt') === '@obemexx')
    }
}

module.exports = new LoginPage();
