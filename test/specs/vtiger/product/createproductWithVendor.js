const { assert } = require("chai")

describe('create vendor',async ()=>{

    it('create product with vendor', async ()=>{
        await browser.url('http://localhost:8888/')
         await browser.maximizeWindow()
        await console.log( browser.getTitle())  
            
        //login 
            var username = "admin"
            var password = "root"
            await  browser.$('//input[@name="user_name"]').setValue(username)
            await  browser.$("//input[@name='user_password']").setValue(password)
            await  browser.$("//input[@id='submitButton']").click()
            // fill deatails
            var element = await $("//a[text()='More']")
            await element.moveTo()
            await browser.$("//a[@name='Vendors']").click()
            await browser.$("//img[@alt='Create Vendor...']").click()
            var vendorname = "flipkart"
            await browser.$("//input[@name='vendorname']").setValue(vendorname)
            //save 
            await browser.$("//input[@title='Save [Alt+S]']").click()
            var vendor = await browser.$('//span[@id="dtlview_Vendor Name"]').getText()
           assert.include(vendor,vendorname,"vendor not not created")
            //create product
            await browser.$("//a[text()='Products']").click()
            await browser.$("//img[@alt='Create Product...']").click()
            var productName = "ecommerce website"
            await browser.$("//input[@name='productname']").setValue(productName)
            await browser.$('//img[@src="themes/softed/images/select.gif"]').click()
            var sessionid = await browser.getWindowHandles()
            await browser.switchToWindow(sessionid[1])
            await browser.$("//input[@id='search_txt']").setValue(vendor)
            await browser.$("//input[@name='search']").click()
            await browser.$("//a[@id='1']").click()
            await browser.switchToWindow(sessionid[0])
            await browser.$("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']").click()
            var actualproductname = await $("//span[@id='dtlview_Product Name']").getText()
            assert.include(actualproductname,productName,"product not created")
            var administration=await browser.$("//img[@src='themes/softed/images/user.PNG']")
            await administration.moveTo()
            await browser.pause(2000)
            await browser.$("//a[text()='Sign Out']").click()
    })

})