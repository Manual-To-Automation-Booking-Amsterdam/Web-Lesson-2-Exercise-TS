// @ts-check
export {};
const { test, expect } = require('@playwright/test');

test('has title', async ({ page } : { page:any }) => {
  var name = "Automation Tester";
  var email = "tester@automation.com";
  var subject = "Contact Subject Line";
  var message = "This is a message contacting support for help.";

  await page.goto('http://browserstacktraining.site');

  await page.locator("#contactButton").click();

  await page.locator("#name").fill(name);
  await page.locator("#email").fill(email);
  await page.locator("#subject").fill(subject);
  await page.locator("#message").fill(message);

  await page.locator("#submit").click();

  // Expect a title "to contain" a substring.
  await expect(page.locator("#successMessage")).toBeVisible();
});