const { assert } = require("chai")

describe('crm application',async ()=>{
    var randomNum = await Math.round(Math.random()*1000)
    it('create compaign',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await console.log( browser.getTitle());
        //login vtiger
            var username = "admin"
            var password = "root"
            const usernameTxt = await $('//input[@name="user_name"]')
            usernameTxt.setValue(username)
            const passwordTxt = await $("//input[@name='user_password']")
            passwordTxt.setValue(password)
            const loginBtn = await $("//input[@id='submitButton']")
            loginBtn.click()
        //create product
        await browser.$("//a[text()='Products']").click()
        await browser.$("//img[@alt='Create Product...']").click()
        var productName = "ecommerce website"
        await browser.$("//input[@name='productname']").setValue(productName)
        await browser.$("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']").click()
        var actualproductname = await $("//span[@id='dtlview_Product Name']").getText()
        assert.include(actualproductname,productName,"product not created")
        //create campaign
            var element = await $("//a[text()='More']")
            await element.moveTo()
           
            await browser.$("//a[@name='Campaigns']").click()
            await browser.$("//img[@alt='Create Campaign...']").click()
            var campaignname = "software services"
            await browser.$("//input[@name='campaignname']").setValue(campaignname)
            await browser.$("//img[@src='themes/softed/images/select.gif']").click()
            var sessionid = await browser.getWindowHandles()
            await browser.switchToWindow(sessionid[1])
            await browser.$("//input[@id='search_txt']").setValue(actualproductname)
            await browser.$("//input[@name='search']").click()
          
       // await browser.pause(2000)
       await $("//a[text()='"+actualproductname+"']").click()
           async ()=>{
            var searchelement= await $("//a[text()='"+actualproductname+"']")
            await searchelement.waitForClickable({ timeout: 3000 });
           }
          
            await browser.switchToWindow(sessionid[0])
        //save and logout
            var scroll=await $("//b[text()='Description Information']")
             await scroll.scrollIntoView()
             await browser.$("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']").click()
            //  await browser.pause(2000)
            // await actualcampaignName.waitForDisplayed({ timeout: 3000 });
             var actualcampaignName = await $("//span[@id='dtlview_Campaign Name']").getText()
             assert.include(actualcampaignName,campaignname,"campaign not created")
             var administrator=await $("//img[@src='themes/softed/images/user.PNG']")
             await administrator.moveTo()
             await browser.$("//a[text()='Sign Out']").click()
    })
})