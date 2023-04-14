const { test,expect } = require("@playwright/test");
class TakeawaysFormattingOptions{
    constructor(page){
        this.page=page;
        this.TakeawayTextArea=page.locator("[contenteditable='true']").nth(0);
        this.DoneButtonFirstTakeaway=page.locator("//button[text()='Done' and @class='btn-cta done']");
        this.ChoosingGivenTakeaway=page.getByText("sample").nth(0);
        this.TextEditor= page.locator('.ql-editor');
        this.BoldFormat=page.locator(".ql-bold");
        this.FormattingToolTip=page.locator(".ql-tooltip");
        this.BoldText=page.locator("p strong");
        this.ItalicsFormat=page.locator(".ql-italic");
        this.ItalicText=page.locator("p em");
        this.UnderlineFormat=page.locator(".ql-underline");
        this.UnderlineText=page.locator("div p u");
        this.BoldAndItalicText=page.locator("p strong em");
        this.BoldAndUnderlined=page.locator("p strong u");
        this.ItalicsAndUnderlinedText=page.locator("p em u");
        this.BoldItalicsAndUnderlinedText=page.locator("p strong em u");
        this.BulletPointFormat=page.locator(".ql-list").nth(1);
        this.BulletFormatText=page.locator("[value='bullet']");
        this.NumberedFormat=page.locator(".ql-list").nth(0);
        this.NumberedFormatText=page.locator("div ol li");
        this.EmbedLink=page.locator(".embed-description");
        this.HyperlinkFormattingOption=page.getByPlaceholder("https://quilljs.com");
        this.HyperlinkToolTipOption=page.locator(".ql-link");
        this.SaveButton=page.getByRole("button", { name: "Save" });
        this.SampleTextSelect=page.getByRole("link",{ name:"sample",exact:true});
        this.PopupClose=page.locator(".popup-close");
        this.LearningMinaccumulated=page.locator(".done-status");


    }
    async sampleTakeawayInput(){
        await this.TakeawayTextArea.fill("sample");
    }
    async clickDoneSavingSampleTakeaway(){
        await this.DoneButtonFirstTakeaway.click();
    }
    async closingPayitforwardPopup(){
        await this.PopupClose.click();
    }
    async learningMinAccumulatedStatusVerify(){
        await expect(this.LearningMinaccumulated).toBeVisible();
    }

    async clickingSampleTakeaway(){
        await this.ChoosingGivenTakeaway.click();
    }
    async selectingSampleTakeaway(){
        await this.TextEditor.press('Shift+ArrowLeft');
    }
    async verifyingToolTipVisisble(){
       const tooltip= await this.FormattingToolTip.isVisible()
        if(tooltip===true){
            console.log("tooltip is visible")
        }
        else{
            await this.TextEditor.press('Shift+ArrowLeft');
            await expect(this.FormattingToolTip).toBeVisible()
        }  

    }
    async boldFormatClick(){
        await this.BoldFormat.click();
    }
    async boldFormatVisible(){
        await expect(this.BoldText).toBeVisible();
    }
    async italicsFormatClick(){
        await this.ItalicsFormat.click();
    }
    async italicsFormatVisible(){
        await expect(this.ItalicText).toBeVisible();
    }
    async underlineFormatClick(){
        await this.UnderlineFormat.click();
    
    }
    async underlineFormatVisible(){
        await expect(this.UnderlineText).toBeVisible();
    }
    async boldAndItalicsTextVerify(){
        await expect(this.BoldAndItalicText).toBeVisible();
    }
    async boldAndUnderlinedTextVerify(){
        await expect(this.BoldAndUnderlined).toBeVisible();
    }
    async italicsAndUnderlinedTextVerify(){
        await expect(this.ItalicsAndUnderlinedText).toBeVisible();
    }
    async boldItalicsAndUnderlinedTextVerify(){
        await expect(this.BoldItalicsAndUnderlinedText).toBeVisible();
    }
    async bulletPointFormattingClick(){
        await this.BulletPointFormat.click();
    }
    async bulletPointFormatTextVerify(){
        await expect(this.BulletFormatText).toHaveClass("ql-list ql-active")
    }
    async numberedFormatClick(){
        await this.NumberedFormat.click();
    }
    async numberedFormatTextverify(){
        await expect(this.NumberedFormatText).toBeVisible();
    }
    async embedLinkClick(){
        await this.EmbedLink.click();
    }
    async waitForNavigationAndVerify() {
        const page2 = await this.page.waitForEvent('popup');
        await expect(page2.getByRole('heading', { name: 'Playwright Solutions' })).toBeVisible();
        return page2;
      }

     
    async selectingWholeSampleText(){
        await this.TextEditor.press('Shift+ArrowLeft+ArrowLeft+ArrowLeft+ArrowLeft+ArrowLeft+ArrowLeft');
    }
    async hyperlinkFormattingOptionClick(){
        await this.HyperlinkToolTipOption.click();
    }
    async hyperlinkLinkInput(){
        await this.HyperlinkFormattingOption.type("https://www.google.com/",{delay:10});
        await this.page.keyboard.press("Enter");
    }
    async saveButtonClick(){
        await this.SaveButton.click();
    }
    async saveButtonNotVisibleVerify(){
        await expect(this.SaveButton).not.toBeVisible();
    }
    async  hyperLinkClickAndwaitForRedirectionAndVerify(){
    const page2promise = this.page.waitForEvent('popup');
    await this.SampleTextSelect.waitFor({state:"attached"})
    await this.SampleTextSelect.click();
    const page3= await page2promise;
    await expect(page3.getByAltText("Google")).toBeVisible();
   
    }

}
module.exports={TakeawaysFormattingOptions}


 
   
   
  
   
 