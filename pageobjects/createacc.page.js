class CreateAccPage {
    
    get loginInput() {return $('#user_login')}
    get emailInput() {return $('#user_email')}
    get passwordInput() {return $('#user_password')}
    get joinBtn() {return $('[class="d-block btn-mktg btn-outline-mktg"]')}

}

module.exports = new CreateAccPage();
