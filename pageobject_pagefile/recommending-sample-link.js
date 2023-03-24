const { expect } = require("@playwright/test");
class RecommendingSampleLink{

constructor(page){
this.page=page
this.UnivNameVisible=page.locator(".university-name");
this.Recommendbutton=page.getByRole('button', { name: '+ Recommend' })
this.EnterURL=page.getByPlaceholder('Share any video/article, which benefits your organization!')
this.LearningMin= page.getByPlaceholder('Min')
this.RecommendingSaveButton= page.locator('#popup').getByRole('button', { name: 'Recommend' })
this.LinkOuterCardVerify=page.locator(".tippy").nth(0);
}
async recommendingSampleArticleLink(Url,Min){
    await expect(this.UnivNameVisible).toBeVisible()
    await this.Recommendbutton.click();
    await this.EnterURL.fill(Url);
    await this.page.keyboard.press('Enter');
    await this.LearningMin.fill(Min);
    await this.RecommendingSaveButton.click();
    await expect(this.LinkOuterCardVerify).toContainText("Navigations | Playwright")


}

}
module.exports={RecommendingSampleLink}
