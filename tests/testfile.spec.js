const{test,expect}=require('@playwright/test')
const computerData = [{
    name: "Comp A",
    manufacture: "Tandy Corporation"
},
{
    name: "Comp B",
    manufacture: "Commodore International"
},
{
    name: "Comp C",
    manufacture: "Thinking Machines"
},
{
    name: "Comp D",
    manufacture: "Nokia"
}
]
for(const data of computerData) {

    test(`Parameterized test ${data.name}`, async ({ page }) => {
        await page.goto("https://computer-database.gatling.io/computers");
        await page.click("#add");
        await page.fill("#name", data.name);
        await page.locator("#company").selectOption( data.manufacture);
        await page.click("input[type='submit']");
        await expect(page.locator("div.alert-message.warning")).toContainText("Done")
    })
}