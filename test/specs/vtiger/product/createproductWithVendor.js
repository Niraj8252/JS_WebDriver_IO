const { assert } = require("chai")

describe('create vendor',async ()=>{

    it('create product with vendor', async ()=>{
        await browser.url('http://localhost:8888/')
         await browser.maximizeWindow()

        await console.log( browser.getTitle())  
            
        //login 
             var username = "admin"
            var password = "root"
            const usernameTxt =  $('//input[@name="user_name"]')
            await usernameTxt.setValue(username)
            const passwordTxt =  $("//input[@name='user_password']")
            await passwordTxt.setValue(password)
            const loginBtn = await $("//input[@id='submitButton']")
            await loginBtn.click()
            
            await expect(browser).toHaveUrlContaining("index&module")
            // fill deatails
            var element = await $("//a[text()='More']")
            await element.moveTo()
           const vendorLink = $("//a[@name='Vendors']")
           await vendorLink.click()
           const createVendorIcon = $("//img[@alt='Create Vendor...']")
           await createVendorIcon.click()
            await expect(browser).toHaveUrlContaining("EditView&return_action")
            var vendorname = "flipkart"
            const vendorNameField = $("//input[@name='vendorname']")
            await vendorNameField.setValue(vendorname)
            //save 
           const saveVendorBtn = $("//input[@title='Save [Alt+S]']")
           await saveVendorBtn.click()
            await expect(browser).toHaveUrlContaining("Vendors&record")
            var vendor = await browser.$('//span[@id="dtlview_Vendor Name"]').getText()
           assert.include(vendor,vendorname,"vendor not not created")
            //create product
           const productLnk = $("//a[text()='Products']")
           await productLnk.click()
            const createProductIcon = $("//img[@alt='Create Product...']")
            await createProductIcon.click()
            await expect(browser).toHaveUrlContaining("EditView&return_action")
            var productName = "ecommerce website"
            const productNameField = $("//input[@name='productname']")
            await productNameField.setValue(productName)
           const addvendorIcon = $('//img[@src="themes/softed/images/select.gif"]')
           await addvendorIcon.click()
            var sessionid = await browser.getWindowHandles()
            await browser.switchToWindow(sessionid[1])
           const searchvendor = $("//input[@id='search_txt']")
           await searchvendor.setValue(vendor)
            const searchBtn = $("//input[@name='search']")
            await searchBtn.click()
           const clickSearchItem = $("//a[text()='"+vendorname+"']")
           await clickSearchItem.click()
            await browser.switchToWindow(sessionid[0])
          const saveProductBtn = $("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']")
          await saveProductBtn.click()
            await expect(browser).toHaveUrlContaining("Products&record")
            var actualproductname = await $("//span[@id='dtlview_Product Name']").getText()
            assert.include(actualproductname,productName,"product not created")
            var administration=await browser.$("//img[@src='themes/softed/images/user.PNG']")
            await administration.moveTo()
            await browser.pause(2000)
            const logoutLnk = $("//a[text()='Sign Out']")
            await logoutLnk.click()
            await expect(browser).toHaveUrlContaining("Login&module")
    })

})