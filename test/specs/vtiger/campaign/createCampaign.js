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
     

        //create campaign
            var element = await $("//a[text()='More']")
            await element.moveTo()
            await browser.pause(2000)
            await browser.$("//a[@name='Campaigns']").click()
            await browser.pause(2000)
            await browser.$("//img[@alt='Create Campaign...']").click()
            var campaignname = "software services"
            await browser.$("//input[@name='campaignname']").setValue(campaignname)

      
        //save and logout
            var scroll=await $("//b[text()='Description Information']")
             await scroll.scrollIntoView()
             await browser.$("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']").click()
             var actualcampaignName = await $("//span[@id='dtlview_Campaign Name']").getText()
             assert.include(actualcampaignName,campaignname,"campaign not created")
             await browser.pause(2000)
             var administrator=await $("//img[@src='themes/softed/images/user.PNG']")
             await administrator.moveTo()
             await browser.$("//a[text()='Sign Out']").click()
        })
    })