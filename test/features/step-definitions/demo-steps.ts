import { Given } from '@wdio/cucumber-framework';


Given(/^Google page is opened$/, async () => {
 await browser.url("https://www.google.com/");

 await browser.pause(2000);
}) 