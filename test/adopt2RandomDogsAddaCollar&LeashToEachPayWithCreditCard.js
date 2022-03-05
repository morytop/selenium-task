require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const FormPage = require('../pageobjects/formPage');

describe('Adopt 2 Random Dogs, add a Collar & Leash to each, pay with Credit Card', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Adopt Hanna', async function() {
        await driver.get('https://spartantest-puppies.herokuapp.com/');
        await driver.findElement(By.css('.list_line_even div:nth-child(4)')).click();
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.css('.cart_buttons form:nth-child(2)')).click();
    });

    it('Adopt Spud', async function() {
        await driver.findElement(By.className('next_page')).click();
        await driver.findElement(By.css('.list_line_even div:nth-child(4)')).click();
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.css('input#collar')).click();
        await driver.findElement(By.xpath('/html/body/div/div[1]/div[3]/table/tbody/tr[9]/td[2]/input')).click();
        await driver.findElement(By.css('input.rounded_button')).click();

        let formPage = new FormPage(driver);
        formPage.submitFormCreditCardPayment(driver);
    });

    after(() => driver && driver.quit());
})