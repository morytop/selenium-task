require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const FormPage = require('../pageobjects/formPage');

describe('Adopt 2 Random Dogs, add a Collar & Leash to each, pay with Credit Card', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Adopt Maggie Mae', async function() {
        await driver.get('https://spartantest-puppies.herokuapp.com/');
        await driver.findElement(By.css("form[action='/puppies/1']")).click();
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.css('.cart_buttons form:nth-child(2)')).click();
    });

   it('Adopt Twinkie', async function() {
        await driver.findElement(By.css('.pagination a:nth-child(4)')).click();
        await driver.findElement(By.css('input.rounded_button')).click();
        await driver.findElement(By.className('button_to')).click();
        await driver.findElement(By.css('input#collar')).click();
        await driver.findElement(By.css('input#toy')).click();
        await driver.findElement(By.css('input#vet')).click();
        await driver.findElement(By.css('.cart_buttons form:nth-child(1)')).click();

        let formPage = new FormPage(driver);
        formPage.submitFormCreditCardPayment(driver);
    });

    after(() => driver && driver.quit()); 
})