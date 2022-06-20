const { assert } = require("chai")

describe('crm application',async ()=>{
    var randomNum = await Math.round(Math.random()*1000)
    it('create compaign',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await expect(browser).toHaveTitleContaining("vtiger CRM 5")
        await console.log( browser.getTitle());
    
        //login vtiger
        var username = "admin"
        var password = "root"
        const usernameTxt = $('//input[@name="user_name"]')
        await  usernameTxt.setValue(username)
        const passwordTxt = $("//input[@name='user_password']")
        await  passwordTxt.setValue(password)
        const loginBtn = $("//input[@id='submitButton']")
        await  loginBtn.click()
     
        await expect(browser).toHaveTitleContaining("Home")
        //create campaign
            var element = await $("//a[text()='More']")
            await element.moveTo()
            const campaignLnk = await $("//a[@name='Campaigns']")
            await campaignLnk.click()
            // await browser.pause(2000)
            const createcampaignIcon=await $("//img[@alt='Create Campaign...']")
            await createcampaignIcon.click()
            await expect(browser).toHaveUrlContaining("EditView&return_action")
            var campaignname = "software services"
            const campaignTextField = await $("//input[@name='campaignname']")
            await campaignTextField.setValue(campaignname)

      
        //save and logout
            var scroll=await $("//b[text()='Description Information']")
             await scroll.scrollIntoView()
             const saveBtn =await $("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']")
            await saveBtn.click()
            await expect(browser).toHaveUrlContaining("Campaigns&record")
             var actualcampaignName = await $("//span[@id='dtlview_Campaign Name']").getText()
             assert.include(actualcampaignName,campaignname,"campaign not created")
             await browser.pause(2000)
             var administrator=await $("//img[@src='themes/softed/images/user.PNG']")
             await administrator.moveTo()
             const logoutLnk = await $("//a[text()='Sign Out']")
             await logoutLnk.click()
             await expect(browser).toHaveUrlContaining("Login&module")
        })
    })