const assert = require('assert');

class MainPage {
    
    get website () {return ('https://github.com/')}
    get emailInput () {return $('#user_email')}
    get signupBtn () {return $('[class*="btn-mktg btn-primary-mktg w"]')}
    get whygitBtn () {return $('li:nth-child(1) [class*="HeaderMenu-s"]')}
    get whygitMenu () {return $('li:nth-child(1) [class*="dropdown"]')}
    get exploreBtn () {return $('li:nth-child(4) [class*="HeaderMenu-s"]')}
    get exploreMenu () {return $('li:nth-child(4) [class*="dropdown"]')}
    get pricingBtn () {return $('li:nth-child(6) [class*="HeaderMenu-s"]')}
    get pricingMenu () {return $('li:nth-child(6) [class*="dropdown"]')}
    get plansBtn() {return $('[class*="pb-2 l"]')}
    get exploreLink() {return $('[href="/explore"]')}
    get topicsBtn() {return $('a:nth-child(3)[class*="js-selected"]')}
    get topicsLabel() {return $('[class="h1"]')}
    get searchInput () {return $('label [class*="form-control"]')}
    get careersBtn() {return $('[href="/about/careers"]')}

    async open(){
        await browser.url(this.website)
    }

    async assertWhygitMenuIsDisplayed() {
        assert (await (await this.whygitMenu).isDisplayedInViewport()===true) 
    }

    async assertExploreMenuIsDisplayed() {
        assert (await (await this.exploreMenu).isDisplayedInViewport()===true) 
    }

    async assertPricingMenuIsDisplayed() {
        assert (await (await this.pricingMenu).isDisplayedInViewport()===true) 
    }

    async hoverWhygitBtn() {
        await (await this.whygitBtn).moveTo() 
    }

    async hoverExploreBtn() {
        await (await this.exploreBtn).moveTo() 
    }

    async hoverPricingBtn() {
        await (await this.pricingBtn).moveTo() 
    }

    async assertTopicsLabelIsDisplayed() {
        assert (await (await this.topicsLabel).isDisplayedInViewport()===true) 
    }

    async clickWhygitBtnIfNotDisplayed() {
        while (await (await this.whygitMenu).isDisplayedInViewport()===false) {
            await (await this.whygitBtn).click()   
            await browser.pause(1000) 
        }
    }

    async clickExploreBtnIfNotDisplayed() {
        while (await (await this.exploreMenu).isDisplayedInViewport()===false) {
            await (await this.exploreBtn).click()   
            await browser.pause(1000) 
        }
    }

    async clickPricingBtnIfNotDisplayed() {
        while (await (await this.pricingMenu).isDisplayedInViewport()===false) {
            await (await this.pricingBtn).click()   
            await browser.pause(1000) 
        }
    }
}

module.exports = new MainPage();
