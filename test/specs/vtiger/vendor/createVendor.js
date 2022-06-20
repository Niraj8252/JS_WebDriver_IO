const { assert } = require("chai")

describe('create vendor',async ()=>{

it('pass details', async ()=>{
    await browser.url('http://localhost:8888/')
     await browser.maximizeWindow()
     await expect(browser).toHaveTitleContaining("vtiger CRM 5")
    await console.log( browser.getTitle())  
        
    //login 
    var username = "admin"
    var password = "root"
    const usernameTxt = $('//input[@name="user_name"]')
    await  usernameTxt.setValue(username)
    const passwordTxt = $("//input[@name='user_password']")
    await  passwordTxt.setValue(password)
    const loginBtn = $("//input[@id='submitButton']")
    await  loginBtn.click()
 
    await expect(browser).toHaveTitleContaining("Home")
        // fill deatails

        var element = await $("//a[text()='More']")
        await element.moveTo()
        const vendorLnk = $("//a[@name='Vendors']")
        await vendorLnk.click()
        const createVendorIcon =$("//img[@alt='Create Vendor...']")
        await createVendorIcon.click()
        await expect(browser).toHaveUrlContaining("EditView&return_action")
        var vendorname = "flipkart"
        const vendorTxtField = $("//input[@name='vendorname']")
        await vendorTxtField.setValue(vendorname)
        //save and logout
       const saveBtn =  $("//input[@title='Save [Alt+S]']")
       await saveBtn.click()
        await expect(browser).toHaveUrlContaining("Vendors&record")
        var vendor = await browser.$('//span[@id="dtlview_Vendor Name"]').getText()
           assert.include(vendor,vendorname,"vendor not not created")
        await browser.pause(2000)
        var administration = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        administration.moveTo()
      const logoutLnk = $("//a[text()='Sign Out']")
      await logoutLnk.click()
      await expect(browser).toHaveUrlContaining("Login&module")
})
})