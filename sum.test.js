const sum = require('./sum');
const {Builder, By, Key, until} = require('selenium-webdriver');


jest.setTimeout(30000);

describe('Example test', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
   
    test('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    test('adds 5 + 2 to equal 7', () => {
        expect(sum(5, 2)).toBe(7);
    });
    
      
    test('google search', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://www.google.com/ncr');
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
              
            const logo = await driver.findElement(By.xpath("//a[@id='logo']"));
            const title = await logo.getAttribute('title');
              
            expect(title).toBe('Go to Google Home');
        } finally {
            await driver.quit();
        }
    });
})