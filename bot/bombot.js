// path chrome default "C:\Users\andre\AppData\Local\Google\Chrome\User Data\Default"

const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
// option.addArguments("--user-data-dir=C:/Users/andre/AppData/Local/Google/Chrome/User Data") //
//option.addArguments("--start-fullscreen"); // full scren
const helper = require("./helpers/helper");

const init = async _ => {
    let driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(option).build();
    await driver.get("https://codepen.io/cconceicao/full/PBQawy")

    await helper.sleep(8000);

    /*

    let position = await driver.findElement(webdriver.By.xpath('//*[@jscontroller="vZr2rb"]')).getRect();
    console.log(position);
    
    await helper.sleep(1000);

    await driver.actions().move({
        x: parseInt(position.x), y: parseInt(position.x)
    }).click().perform()
    console.log("MOVEUU!!!");
    */
    // exemplo para arrastar e soltar

    // fazer teste aqui:
    // https://www.w3schools.com/html/html5_draganddrop.asp


    let position = await driver.findElement(webdriver.By.id('div2')).getRect();
    console.log(position);


    await driver.actions().move({x:650, y:328}).press().perform();
    // Performs release event on target element
    await driver.actions().move({x:500, y:328}).release().perform();
    
    // .click().perform()
    await helper.sleep(2000);

    console.log("ACABOU!!!");
    
}

init()