const { assert } = require("chai")

describe('crm application',async ()=>{
    var randomNum = await Math.round(Math.random()*1000)
    it('create organisation with contact',async ()=>{
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

        //create orgaisation

            await browser.$("//td[@class='tabUnSelected']//a[text()='Organizations']").click()
            await browser.$("//img[@alt='Create Organization...']").click()
            var organisationName = "tyss"+randomNum
             await browser.$("//input[@name='accountname']").setValue(organisationName)
          
            await browser.$("//input[@title='Save [Alt+S]']").click()
            await browser.pause(2000)
           var actualorganisationName = await browser.$("//span[@id='dtlview_Organization Name']").getText()
            assert.include(actualorganisationName,organisationName,"organisation not created")
        
    //create contact
    //    console.log(organisationName);
    await browser.pause(2000)
    await browser.$("//a[text()='Contacts']").click()
    await browser.pause(2000)
    await browser.$("//img[@alt='Create Contact...']").click()
    var contactname = "testyantra"+randomNum
    await browser.$("//input[@name='lastname']").setValue(contactname)
    await browser.$("//input[@name='account_name']/..//img[@src='themes/softed/images/select.gif']").click()
    var sessionid = await browser.getWindowHandles()
    await browser.switchToWindow(sessionid[1])
    await browser.pause(2000)
    // await browser.switchWindow('Accounts&action')
    await browser.$("//input[@id='search_txt']").setValue(actualorganisationName)
    await browser.$("//input[@name='search']").click()
    await browser.pause(2000)
    await browser.$("//a[@id='1']").click()
    // await browser.switchWindow('Contacts&action')
    await browser.switchToWindow(sessionid[0])
    await browser.$("//input[@title='Save [Alt+S]']").click()
    var actualcontactname = await $("//span[@id='dtlview_Last Name']").getText()
    assert.include(actualcontactname,contactname,"contact not created")
       
    //logout from vtiger
      await browser.pause(2000)
      var administration = await browser.$("//img[@src='themes/softed/images/user.PNG']")
      administration.moveTo()
      await browser.$("//a[text()='Sign Out']").click()
        })
})
