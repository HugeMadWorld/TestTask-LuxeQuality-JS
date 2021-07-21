class EnterprisePage {

    get enterpriseBtn () {return $('li:nth-child(3) [href="/enterprise"]')}
    get startrialBtn () {return $('div.col-9-max [class*="btn-mktg btn-t"]')}
    get cloudBtn (){return $("//*[contains(text(),'Leave the hosting')and @style]")}
    get serverBtn () {return $('//*[contains(text(),"Deploy to your own")and @style]')}
    get nameInput () {return $('[name="contact_request[name]"]')}
    get companyInput (){return $("#contact_request_organization_name")}
    get workemailInput () {return $('#contact_request_email')}
    get deployservRadioBtn () {return $('#contact_request_instance_type_onprem')}
    get yesRadioBtn (){return $("#questions_yes")}
    get questionsInput () {return $('#questions-list')}
    get checkbox () {return $('#contact_request_agreed_to_terms')}
}

module.exports = new EnterprisePage();
