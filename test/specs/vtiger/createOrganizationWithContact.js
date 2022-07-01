const { assert } = require("chai")
const ContactPage = require("../../pageobjects/VtigerPageObjects/ContactPage")
const createNewContactPage = require("../../pageobjects/VtigerPageObjects/CreateNewContactPage")
const createNewOrganisationPage = require("../../pageobjects/VtigerPageObjects/CreateNewOrganisationPage")
const HomePage = require("../../pageobjects/VtigerPageObjects/HomePage")
const LoginPage = require("../../pageobjects/VtigerPageObjects/LoginPage")
const OrganisationPage = require("../../pageobjects/VtigerPageObjects/OrganisationPage")
const OrgInformationPage = require("../../pageobjects/VtigerPageObjects/OrgInformationPage")
const OrgWindowPage = require("../../pageobjects/VtigerPageObjects/OrgWindowPage")
const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync("test/genericLibrary/commonData.json"))

describe('crm application',async ()=>{
    var randomNum = await Math.round(Math.random()*1000)
    credentials.forEach(({userName,password}) => {
    it('create organisation with contact',async ()=>{
    await LoginPage.open()
        await browser.maximizeWindow()
        await expect(browser).toHaveTitleContaining("vtiger CRM 5")
        await console.log( browser.getTitle());
   
        //login vtiger
      await LoginPage.login(userName,password)
await expect(browser).toHaveTitleContaining("Home")
        //create orgaisation

        await HomePage.clickOrganizationsLnk()
        
        await OrganisationPage.createOrganisationIcon()
            var organisationName = "tyss"+randomNum
        
        await createNewOrganisationPage.enterOrganisationTextName(organisationName)
          await createNewOrganisationPage.saveBtn()
       await OrgInformationPage.waitTillDisplay()
       
        // var actualorganisationName = await OrgInformationPage.createdOrgData()
           var actualorganisationName = await browser.$("//span[@id='dtlview_Organization Name']").getText()
        //     assert.include(actualorganisationName,organisationName,"organisation not created")
        
    //create contact
   
    await HomePage.clickContactsLnk()
await ContactPage.clickCreateContactIcon()

    var contactname = "testyantra"+randomNum

await createNewContactPage.enterDataCreateTextField(contactname)
await createNewContactPage.clickAddOrgIcon()

    var sessionid = await browser.getWindowHandles()
    await browser.switchToWindow(sessionid[1])

        await OrgWindowPage.waitTillOrgDisplay()
    // await browser.switchWindow('Accounts&action')

await OrgWindowPage.searchOrganisation(actualorganisationName)

//     await browser.switchWindow('Contacts&action')
    await browser.switchToWindow(sessionid[0])
    await createNewContactPage.clickSaveBTn()

    var actualcontactname = await $("//span[@id='dtlview_Last Name']").getText()
    assert.include(actualcontactname,contactname,"contact not created")
       
    //logout from vtiger

        await HomePage.clickLogoutLnk()  
      await expect(browser).toHaveUrlContaining('Login&module')
        })
    })
})
