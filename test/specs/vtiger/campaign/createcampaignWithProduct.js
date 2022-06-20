const { assert } = require("chai")

describe('crm application',async ()=>{
    var randomNum = await Math.round(Math.random()*1000)
    it('create compaign',async ()=>{
        await browser.url('http://localhost:8888/')
        await expect(browser).toHaveTitleContaining("vtiger CRM 5")
        await browser.maximizeWindow()
        await console.log( browser.getTitle());
        //login vtiger
            var username = "admin"
            var password = "root"
            const usernameTxt =  $('//input[@name="user_name"]')
            await usernameTxt.setValue(username)
            const passwordTxt =  $("//input[@name='user_password']")
            await passwordTxt.setValue(password)
            const loginBtn = await $("//input[@id='submitButton']")
            await loginBtn.click()
            
            // await expect(browser).toHaveUrlContaining("Home&action")
            await expect(browser).toHaveTitleContaining("Home")
        //create product
        const productLnk =  $("//a[text()='Products']")
        await productLnk.click()
       const createProductIcon =  $("//img[@alt='Create Product...']")
       await createProductIcon.click()
       await expect(browser).toHaveUrlContaining("EditView&return_action")
       var productName = "ecommerce website"
        const productTxtField = $("//input[@name='productname']")
        await productTxtField.setValue(productName)
        const saveproductBtn = $("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']")
        await saveproductBtn.click()
        var actualproductname = await $("//span[@id='dtlview_Product Name']").getText()
        assert.include(actualproductname,productName,"product not created")
        //create campaign
            var element = await $("//a[text()='More']")
            await element.moveTo()
            const campaignLnk = $("//a[@name='Campaigns']")
            await campaignLnk.click()
            await expect(browser).toHaveUrlContaining("Campaigns&action")
            const createcampaignIcon= $("//img[@alt='Create Campaign...']")
            await createcampaignIcon.click()
            var campaignname = "software services"
            const campaignTxtField = $("//input[@name='campaignname']")
            await campaignTxtField.setValue(campaignname)
            const addProductIcon = $("//img[@src='themes/softed/images/select.gif']")
            await addProductIcon.click()
            var sessionid = await browser.getWindowHandles()
            await browser.switchToWindow(sessionid[1])
           const searchProduct = $("//input[@id='search_txt']")
           await searchProduct.setValue(actualproductname)
           const searchBtn = $("//input[@name='search']")
           await searchBtn.click()
          
       // await browser.pause(2000)
       const selectProductname = $("//a[text()='"+actualproductname+"']")
       await selectProductname.click()
           async ()=>{
            var searchelement= await $("//a[text()='"+actualproductname+"']")
            await searchelement.waitForClickable({ timeout: 3000 });
           }
          
            await browser.switchToWindow(sessionid[0])
        //save and logout
            var scroll=await $("//b[text()='Description Information']")
             await scroll.scrollIntoView()
             const saveCampaignBtn = $("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']")
            await saveCampaignBtn.click()
            await expect(browser).toHaveUrlContaining("Campaigns&record")
            //  await browser.pause(2000)
            // await actualcampaignName.waitForDisplayed({ timeout: 3000 });
             var actualcampaignName = await $("//span[@id='dtlview_Campaign Name']").getText()
             assert.include(actualcampaignName,campaignname,"campaign not created")
             var administrator=await $("//img[@src='themes/softed/images/user.PNG']")
             await administrator.moveTo()
             const logoutLnk = $("//a[text()='Sign Out']")
             await logoutLnk.click()
             await expect(browser).toHaveUrlContaining("Login&module")
    })
})