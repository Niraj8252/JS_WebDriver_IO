describe('create vendor',async ()=>{

it('pass details', async ()=>{
    await browser.url('http://localhost:8888/')
     await browser.maximizeWindow()
    await console.log( browser.getTitle())  
        
    //login 
    var username = "admin"
    var password = "root"
    const usernameTxt = await $('//input[@name="user_name"]')
    usernameTxt.setValue(username)
    const passwordTxt = await $("//input[@name='user_password']")
    passwordTxt.setValue(password)
    const loginBtn = await $("//input[@id='submitButton']")
    loginBtn.click()
        // fill deatails

        var element = await $("//a[text()='More']")
        await element.moveTo()
        await browser.$("//a[@name='Vendors']").click()
        await browser.$("//img[@alt='Create Vendor...']").click()
        var vendorname = "flipkart"
        await browser.$("//input[@name='vendorname']").setValue(vendorname)
        //save and logout
        await browser.$("//input[@title='Save [Alt+S]']").click()
        var vendor = await browser.$('//span[@id="dtlview_Vendor Name"]').getText()
           assert.include(vendor,vendorname,"vendor not not created")
        await browser.pause(2000)
        var administration = await browser.$("//img[@src='themes/softed/images/user.PNG']")
        administration.moveTo()
      await browser.$("//a[text()='Sign Out']").click()
})
})