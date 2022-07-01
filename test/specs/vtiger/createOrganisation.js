const { assert } = require("chai")
const CreateNewOrganisationPage = require("../../pageobjects/VtigerPageObjects/CreateNewOrganisationPage")
const HomePage = require("../../pageobjects/VtigerPageObjects/HomePage")
const LoginPage = require("../../pageobjects/VtigerPageObjects/LoginPage")
const organisationPage = require("../../pageobjects/VtigerPageObjects/OrganisationPage")
const OrgInformationPage = require("../../pageobjects/VtigerPageObjects/OrgInformationPage")
const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync("test/genericLibrary/commonData.json"))

describe('crm application',async ()=>{
  var randomNum = await Math.round(Math.random()*1000)
  credentials.forEach(({userName,password,organisationName}) => {
    it('create organisation',async ()=>{
    
        await browser.maximizeWindow()
        await LoginPage.open()
        await console.log( browser.getTitle());
        await expect(browser).toHaveTitleContaining("vtiger CRM 5")
        await LoginPage.login(userName,password)

       await HomePage.clickOrganizationsLnk()

        await organisationPage.createOrganisationIcon()
     
        // var organisationname = "tyss"+randomNum
        await CreateNewOrganisationPage.enterOrganisationTextName(organisationName)
      
      await CreateNewOrganisationPage.saveBtn()
      await OrgInformationPage.assertOrgCreatedCondition()
      
        // var createdorganisationName = await browser.$("//span[@id='dtlview_Organization Name']")
        // var actualorganisationName = createdorganisationName.getText()
        //     assert.include(actualorganisationName,organisationname,"organisation not created")
        // await browser.pause(2000)
     await OrgInformationPage.waitTillDisplay()
      await HomePage.clickLogoutLnk()
    })
})
})