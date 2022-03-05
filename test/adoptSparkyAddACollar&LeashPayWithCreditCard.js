require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const FormPage = require('../pageobjects/formPage');

describe('Adopt Sparky, add a Collar & Leash, pay with Credit Card', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Adopt Sparky', async function() {
        await driver.get('https://spartantest-puppies.herokuapp.com/');
        await driver.findElement(By.className('next_page')).click();
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.css('input#collar')).click();;
        await driver.findElement(By.css('input.rounded_button')).click();

        let formPage = new FormPage(driver);
        formPage.submitFormCreditCardPayment(driver);
    });

    after(() => driver && driver.quit());
})