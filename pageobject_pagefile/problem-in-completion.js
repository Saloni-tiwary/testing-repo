const { test,expect } = require("@playwright/test");

class ProblemInCompletion{
    constructor(page){
        this.page = page;
        this.TakeawayDoneButton=page.locator("button.btn-cta.done");
        this.ProblemSubmitURL=page.locator("button.btn.problem-submit");
        this.ErrorMessageBox=page.locator(".voice-box.warning");
        this.TakeawayTextArea=page.locator(".ql-editor");
        this.ProblemInCompletionPopup=page.locator(".popup-content");
        this.ProblemInCompletionInputField=page.locator(".confirmation-input");
        this.ProblemInCompletionPopupDoneButton=page.locator(".popup-action button");
        this.PayItForwardPopupClose=page.locator(".popup-close");
        this.DoneStatus=page.locator(".done-status");
        this.LinkName=page.locator(".link-name");
        this.UserName=page.locator(".user-name");
        this.Popupclose=page.locator(".popup-close");

    }
    async takeawayDoneButtonClick(){

        await this.LinkName.waitFor();
        await this.UserName.waitFor();
        await this.TakeawayDoneButton.click({delay:250});
        await this.ProblemSubmitURL.waitFor();
    }
    async problemInCompletionURLVisisbleVerify(){
        await expect(this.ProblemSubmitURL).toContainText("Problem");
    }
    async clickProblemInCompletionURL(){
        await this.ProblemSubmitURL.click();

    }
    async emptyTakeawayWarningVerify(){
        await expect(this.ErrorMessageBox).toContainText("Complete the takeaway");
    }
    async givingValidTakeaway(){
        await this.TakeawayTextArea.fill("testing problem in completion");
    }
    async problemInCompletionPopupVisibleVerify(){
        await expect(this.ProblemInCompletionPopup).toContainText("Problem Completing");
    }
    async givingInputInProblemInCompletionPopup(){
        await this.ProblemInCompletionInputField.fill("testing problem in completion");
    }
    async givingSingleCharInputInProblemInCompletionPopup(){
        await this.ProblemInCompletionInputField.fill("a");
    }
    
    async problemInCompletionPopupDoneButtonClick(){
        await this.ProblemInCompletionPopupDoneButton.click();
    }
    async giveValidReasonErrorMessageVerify(){
        await expect((this.ErrorMessageBox).nth(1)).toContainText("Please provide the problem you are facing");
    }
    async closePayItForwardPopup(){
        await this.PayItForwardPopupClose.click();
    }
    async learningMinutesAccumulatedVerify(){
        await expect(this.DoneStatus).toContainText("Great, you have accumulated");
    }
    async closeProbInCompletionPopup(){
        await this.Popupclose.click()
    }
}
module.exports = {ProblemInCompletion};










 