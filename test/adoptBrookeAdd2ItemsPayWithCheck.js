require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const FormPage = require('../pageobjects/formPage');

describe('Adopt Brooke, add a Chewy Toy and a Travel Carrier, pay with Check', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on Google', async function() {
        await driver.get('https://spartantest-puppies.herokuapp.com/');
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.css('input#toy')).click();
        await driver.findElement(By.css('input#carrier')).click();
        await driver.findElement(By.css('input.rounded_button')).click();

        let formPage = new FormPage(driver);
        formPage.submitForm(driver);

        let noticeText = await driver.wait(until.elementLocated(By.id('notice')), 10000);
        assert.equal('Thank you for adopting a puppy!', await noticeText.getText());
    });

    after(() => driver && driver.quit());
})