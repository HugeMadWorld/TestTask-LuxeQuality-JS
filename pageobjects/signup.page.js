class SignupPage {

    get emailBtn () {return $('#email-container [class*="js-continue-b"]')}   
    get passwordInput () {return $('#password')}
    get passwordBtn () {return $('#password-container [class*="js-continue-b"]')}   
    get loginInput () {return $('#login')}
    get loginBtn () {return $('#username-container [class*="js-continue-b"]')}    
    get newsletterInput () {return $('#opt_in')}
    get newsletterBtn () {return $('#opt-in-container [class*="js-continue-b"]')}
    get verifyLabel (){return $("[class*='text-mono text-b']")}

}

module.exports = new SignupPage();
