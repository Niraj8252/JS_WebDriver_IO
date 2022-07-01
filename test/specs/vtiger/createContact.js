const { assert } = require("chai")
const ContactPage = require("../../pageobjects/VtigerPageObjects/ContactPage")
const createNewContactPage = require("../../pageobjects/VtigerPageObjects/createNewContactPage")
const HomePage = require("../../pageobjects/VtigerPageObjects/HomePage")
const LoginPage = require("../../pageobjects/VtigerPageObjects/LoginPage")
const fs = require('fs')
const contactInformationPage = require("../../pageobjects/VtigerPageObjects/contactInformationPage")
const credentials = JSON.parse(fs.readFileSync("test/genericLibrary/commonData.json"))


describe('crm application',async ()=>{
  var randomNum = await Math.round(Math.random()*1000)
  credentials.forEach(({userName,password}) => {
    it('create contact',async ()=>{
     
      await browser.maximizeWindow()
      await LoginPage.open()
      await expect(browser).toHaveTitleContaining("vtiger CRM 5")
      await console.log( browser.getTitle());
      await LoginPage.login(userName,password)
     

await expect(browser).toHaveTitleContaining("Home")
   
     await HomePage.clickContactsLnk()
      await ContactPage.clickCreateContactIcon()
      await expect(browser).toHaveUrlContaining('EditView&return_action')
      var contactname = "tyss"+randomNum

      await createNewContactPage.enterDataCreateTextField(contactname)

       await createNewContactPage.clickSaveBTn()
//       //wait until
     await contactInformationPage.waitTillCreatedContactDisplay()
     await contactInformationPage.assertCondition()
      // var createdcontactname = await $("//span[@id='dtlview_Last Name']")
      // var actualcontactname = createdcontactname.getText()
      // var actualcontactname = await contactInformationPage.getCreatedContact()
    //  assert.include(actualcontactname,contactname,"contact not created")
//       // await browser.pause(2000)
    
       await HomePage.clickLogoutLnk()

      await expect(browser).toHaveUrlContaining('Login&module')
});    
})
})
