import puppeteer, { Browser, Page } from 'puppeteer';
import fs, { write } from 'fs'

/**
 * @returns {Browser}
 */
async function main() {
    /**
     * @type {Browser}
     */
    const browser = await puppeteer.launch({
        headless: false
    });

    /**
     * @type {Page}
     */
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://developer.chrome.com/');

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });
    writeConfig("Config")
    setTimeout(async browser => await browser.close(), 10000, browser);
}

/**
 * 
 * @param {String} str 
 * @returns { Boolean }
 */
function writeConfig(str) {
    try {
        fs.writeFileSync("./config", str, { encoding: "utf-8" });
    }
    catch (err) {
        if (err) return false
    }
    return true
}


main();