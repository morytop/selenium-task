const { By } = require("selenium-webdriver/lib/by");
const { Key } = require("selenium-webdriver/lib/input");

class FormPage {
    constructor(driver) {
        this.driver = driver;
    }

    async submitFormCheckPayment() {
        await this.driver.findElement(By.id('order_name')).sendKeys('John');
        await this.driver.findElement(By.id('order_address')).sendKeys('292 Browning Lane,Johnson City, NY 13790');
        await this.driver.findElement(By.id('order_email')).sendKeys('test@test.com');
        await this.driver.findElement(By.id('order_pay_type')).click();
        await this.driver.findElement(By.css('#order_pay_type option:nth-child(2)')).click();
        await this.driver.findElement(By.css('button.submit')).click();

        let noticeText = await driver.wait(until.elementLocated(By.id('notice')), 10000);
        assert.equal('Thank you for adopting a puppy!', await noticeText.getText());
    }

    async submitFormCreditCardPayment() {
        await this.driver.findElement(By.id('order_name')).sendKeys('John');
        await this.driver.findElement(By.id('order_address')).sendKeys('292 Browning Lane,Johnson City, NY 13790');
        await this.driver.findElement(By.id('order_email')).sendKeys('test@test.com');
        await this.driver.findElement(By.id('order_pay_type')).click();
        await this.driver.findElement(By.css('#order_pay_type option:nth-child(3)')).click();
        await this.driver.findElement(By.css('button.submit')).click();

        let noticeText = await driver.wait(until.elementLocated(By.id('notice')), 10000);
        assert.equal('Thank you for adopting a puppy!', await noticeText.getText());
    }
}

module.exports = FormPage;