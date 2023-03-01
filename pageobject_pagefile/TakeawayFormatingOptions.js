const { expect } = require("@playwright/test");
class TakeawayFormattingOptions{
    constructor(page){
        this.page=page;

    }
}
await page.goto('https://my.staging.adaptiveu.app/')
    await page.locator(".challenge-image").nth(0).click();
    await page.locator(".review-edit").click();
    await page.getByText("sample").click({button:"right"});
  
  const element = await page.getByText("sample"); // get the slider element
  const elementBoundingBox = await element.boundingBox(); // get the bounding box of the element
  const sliderHandle = { x: elementBoundingBox.x + elementBoundingBox.width, y: elementBoundingBox.y + elementBoundingBox.height / 2 }; // calculate the handle position on the right side of the element
  await page.mouse.move(sliderHandle.x, sliderHandle.y); // move the mouse to the handle position
  await page.mouse.down(); // simulate a mouse button down event
  await page.mouse.move(elementBoundingBox.x, sliderHandle.y, { steps: 10 }); // move the mouse to the left side of the element, with 10 intermediate steps
  await page.mouse.up({clickCount:8});
  await expect(page.locator(".ql-tooltip")).toBeVisible(); // simulate a mouse button up event
  //await page.locator(".ql-tooltip").waitFor(); 
await page.locator(".ql-bold").click();
await expect(page.locator("p strong")).toBeVisible();
