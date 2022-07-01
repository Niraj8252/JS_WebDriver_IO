const { assert } = require("chai")
const LoginPage = require("../pageobjects/LoginPage")



describe('crm application',async ()=>{
  var randomNum = await Math.round(Math.random()*1000)
    it('create contact',async ()=>{
      // await browser.maximizeWindow()
      // await LoginPage.open()
      // await LoginPage.loginAction("admin","root")
      
      await expect(browser).toHaveTitleContaining("vtiger CRM 5")
      await console.log( browser.getTitle());
     
await expect(browser).toHaveTitleContaining("Home")
     const contactLnk= await browser.$("//a[text()='Contacts']")
     await contactLnk.click()
      const createcontactIcon =await $("//img[@alt='Create Contact...']")
      await createcontactIcon.click()
      await expect(browser).toHaveUrlContaining('EditView&return_action')
      var contactname = "tyss"+randomNum
     const contactTextField =  await $("//input[@name='lastname']")
     await contactTextField.setValue(contactname)
      const saveBtn = await $("//input[@title='Save [Alt+S]']")
      await saveBtn.click()
      //wait until
      async ()=>{
        const informationpage = await $("//span[@class='dvHeaderText']")
        await informationpage.waitForDisplayed({ timeout: 3000 });
      }
      var createdcontactname = await $("//span[@id='dtlview_Last Name']")
      var actualcontactname = createdcontactname.getText()
    //  assert.equal(actualcontactname,contactname,"contact not created")
      // await browser.pause(2000)
     var administration= await browser.$("//img[@src='themes/softed/images/user.PNG']")
      administration.moveTo()
     const logoutLink =  await browser.$("//a[text()='Sign Out']")
     await logoutLink.click()

      await expect(browser).toHaveUrlContaining('Login&module')
    })
})
