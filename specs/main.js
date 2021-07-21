const loginPage = require('../pageobjects/login.page');
const signupPage = require('../pageobjects/signup.page')
const mainPage = require('../pageobjects/main.page');
const createaccPage = require('../pageobjects/createacc.page');
const searchPage = require('../pageobjects/search.page');
const enterprisePage = require('../pageobjects/enterprise.page');
const careersPage = require('../pageobjects/careers.page');
const { randomizeAndSet, click, waitForClickableAndClick, waitForDisplayedInVP, inputSetValue } = require('../utils/helper');


describe('Github Testing', () => {
    it('Test Case #1, Enter random credentials, verify', async () => {
        await mainPage.open()
        await randomizeAndSet(mainPage.emailInput,'@gmail.com')
        await click(mainPage.signupBtn)
        await waitForClickableAndClick(signupPage.emailBtn)
        await randomizeAndSet(signupPage.passwordInput)
        await waitForClickableAndClick(signupPage.passwordBtn)
        await randomizeAndSet(signupPage.loginInput)
        await waitForClickableAndClick(signupPage.loginBtn)
        await randomizeAndSet(signupPage.newsletterInput)
        await waitForClickableAndClick(signupPage.newsletterBtn)
        await waitForDisplayedInVP(signupPage.verifyLabel)
    });

    it('Test case #2, Sign in to acc and verify', async () => {
        await loginPage.open()
        await inputSetValue(loginPage.loginInput,"yinesoh320@herrain.com")
        await inputSetValue(loginPage.passInput,"oldyellowbricks1337")
        await click(loginPage.signinBtn)
        await loginPage.assertLogIn()
        await browser.deleteCookies()
    });

    it('Test case #3, Hover elements and verify dropdown menus were displayed', async () => {
        await mainPage.open()
        await mainPage.hoverWhygitBtn()
        await mainPage.clickWhygitBtnIfNotDisplayed()
        await mainPage.assertWhygitMenuIsDisplayed()
        await mainPage.hoverExploreBtn()
        await mainPage.clickExploreBtnIfNotDisplayed()
        await mainPage.assertExploreMenuIsDisplayed()
        await mainPage.hoverPricingBtn()
        await mainPage.clickPricingBtnIfNotDisplayed()
        await mainPage.assertPricingMenuIsDisplayed()
    });

    it('Test case #4, Open Plans, press join for free, enter creds', async () => {
        await mainPage.open()
        await mainPage.hoverPricingBtn()
        await mainPage.clickPricingBtnIfNotDisplayed()
        await click(mainPage.plansBtn)
        await click(createaccPage.joinBtn)
        await randomizeAndSet(createaccPage.loginInput)
        await randomizeAndSet(createaccPage.emailInput,'@gmail.com')
        await randomizeAndSet(createaccPage.passwordInput)
    });

    it('Test case #5, Open explore github, press topics, verify that text showed up', async () => {
        await mainPage.open()
        await mainPage.hoverExploreBtn()
        await mainPage.clickExploreBtnIfNotDisplayed()
        await click(mainPage.exploreLink)
        await click(mainPage.topicsBtn)
        await mainPage.assertTopicsLabelIsDisplayed()
    });

    it('Test case #6, Write webdriverio, click on first result, verify that url containing webdriverio', async () => {
        await mainPage.open()
        await inputSetValue(mainPage.searchInput,"webdriverio")
        await browser.keys('Enter')
        await click(searchPage.tsBtn)
        await click(searchPage.firstLink)
        await expect(browser).toHaveUrlContaining('webdriverio')
    });

    it.only('Test case #7, Enter creds at enterprise options', async () => {
        await mainPage.open()
        await click(enterprisePage.enterpriseBtn)
        await click(enterprisePage.startrialBtn)
        await click(enterprisePage.cloudBtn)
        await randomizeAndSet(createaccPage.loginInput)
        await randomizeAndSet(createaccPage.emailInput,"@gmail.com")
        await randomizeAndSet(createaccPage.passwordInput)
        await browser.back()
        await click(enterprisePage.serverBtn)
        await randomizeAndSet(enterprisePage.nameInput)
        await randomizeAndSet(enterprisePage.companyInput)
        await randomizeAndSet(enterprisePage.workemailInput,"@gmail.com")
        await click(enterprisePage.deployservRadioBtn)
        await click(enterprisePage.yesRadioBtn)
        await inputSetValue(enterprisePage.questionsInput, 'Some text right here')
        await click(enterprisePage.checkbox)
    });

    it('Test case #8, Print out text from careers page', async () => {
        await mainPage.open()
        await click(mainPage.careersBtn)
        await click(careersPage.openposBtn)
        await careersPage.printOutPositions()
    });

});