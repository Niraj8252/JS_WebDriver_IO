const { assert } = require("chai")

describe('crm application',async ()=>{
    var randomNum = await Math.round(Math.random()*1000)
    it('create organisation with contact',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await expect(browser).toHaveTitleContaining("vtiger CRM 5")
        await console.log( browser.getTitle());
   
        //login vtiger
        var username = "admin"
var password = "root"
const usernameTxt = await $('//input[@name="user_name"]')
await usernameTxt.setValue(username)
const passwordTxt = await $("//input[@name='user_password']")
await passwordTxt.setValue(password)
const loginBtn = await $("//input[@id='submitButton']")
await loginBtn.click()
await expect(browser).toHaveTitleContaining("Home")
        //create orgaisation

            const organisationLnk = $("//td[@class='tabUnSelected']//a[text()='Organizations']")
            await organisationLnk.click()
            const createOrganisationIcon = $("//img[@alt='Create Organization...']")
            await createOrganisationIcon.click()
            var organisationName = "tyss"+randomNum
             const organisationTextField = $("//input[@name='accountname']")
             await organisationTextField.setValue(organisationName)
          
            const saveOrgBtn =await browser.$("//input[@title='Save [Alt+S]']")
            await saveOrgBtn.click()
            await browser.pause(2000)
           var actualorganisationName = await browser.$("//span[@id='dtlview_Organization Name']").getText()
            assert.include(actualorganisationName,organisationName,"organisation not created")
        
    //create contact
    //    console.log(organisationName);
    await browser.pause(2000)
   const contactLnk = $("//a[text()='Contacts']")
   await contactLnk.click()
    await browser.pause(2000)
    const createContactIcon = $("//img[@alt='Create Contact...']")
    await createContactIcon.click()
    var contactname = "testyantra"+randomNum
    const contactTextField = $("//input[@name='lastname']")
    await contactTextField.setValue(contactname)
    const addorgIcon = $("//input[@name='account_name']/..//img[@src='themes/softed/images/select.gif']")
    await addorgIcon.click()
    var sessionid = await browser.getWindowHandles()
    await browser.switchToWindow(sessionid[1])
    await browser.pause(2000)
    // await browser.switchWindow('Accounts&action')
   const searchorganisation = $("//input[@id='search_txt']")
   await searchorganisation.setValue(actualorganisationName)
   const searchBtn = $("//input[@name='search']")
   await searchBtn.click()
    await browser.pause(2000)
    await browser.$("//a[@id='1']").click()
    // await browser.switchWindow('Contacts&action')
    await browser.switchToWindow(sessionid[0])
   const saveContactBtn = $("//input[@title='Save [Alt+S]']")
   await saveContactBtn.click()
    var actualcontactname = await $("//span[@id='dtlview_Last Name']").getText()
    assert.include(actualcontactname,contactname,"contact not created")
       
    //logout from vtiger
      await browser.pause(2000)
      var administration = await browser.$("//img[@src='themes/softed/images/user.PNG']")
      administration.moveTo()
      const logoutLnk = $("//a[text()='Sign Out']")
      await logoutLnk.click()
      await expect(browser).toHaveUrlContaining('Login&module')
        })
})
