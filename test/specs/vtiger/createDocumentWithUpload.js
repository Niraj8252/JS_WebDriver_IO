const { assert } = require("chai")

describe('create document',async ()=>{

it('pass details', async ()=>{
    await browser.url('http://localhost:8888/')
    await expect(browser).toHaveTitleContaining("vtiger CRM 5")
     await browser.maximizeWindow() 
    await console.log( browser.getTitle())    


//login and fill document detail
var username = "admin"
var password = "root"
const usernameTxt = $('//input[@name="user_name"]')
await usernameTxt.setValue(username)
const passwordTxt = $("//input[@name='user_password']")
await passwordTxt.setValue(password)
const loginBtn = $("//input[@id='submitButton']")
await loginBtn.click()
        await expect(browser).toHaveTitleContaining("Home")

        const documentValue = await browser.$("//a[text()='Documents']")
        await documentValue.click()
       
        const createDocumentIcon=await $("//img[@alt='Create Document...']")
        await createDocumentIcon.click()
        await expect(browser).toHaveUrlContaining("EditView&return_action")
        var documentname = "offer letter"
        const documentTxtField= await $("//input[@name='notes_title']")
        await documentTxtField.setValue(documentname)
         await browser.switchToFrame(0)
         var notes = "this is niraj" 
         const notesTextField = await $("//body[@class='cke_show_borders']")
        await notesTextField.setValue(notes)
         await browser.keys(['Control', 'a'])
        //  await browser.keys(['Control', 'c'])
        //  await browser.pause(2000)
         await browser.switchToParentFrame()
        const boldIcon = await $("//a[@class='cke_off cke_button_bold']")
        await boldIcon.click()
        //  await browser.pause(2000)
         const italicIcon = await $("//a[@class='cke_off cke_button_italic']")
         await italicIcon.click()
        //  await browser.pause(2000)
         const underlineIcon = await $("//a[@class='cke_off cke_button_underline']")
         await underlineIcon.click()
        var element = await $("//b[text()='File Information']")
        await element.scrollIntoView();
       var FilePath = await browser.uploadFile("E:/test.txt")
        const uploadTxt = await $("//input[@id='filename_I__']")
        await uploadTxt.setValue(FilePath)
    //logout from vtiger
       const saveBtn =  await $("//b[text()='Basic Information']/../../../tr/td//input[@title='Save [Alt+S]']")
       await saveBtn.click()
       await expect(browser).toHaveUrlContaining("Marketing&record")
        await browser.pause(2000)
        var administration=await browser.$("//img[@src='themes/softed/images/user.PNG']")
        administration.moveTo()
        await browser.pause(2000)
      const logoutLnk = await $("//a[text()='Sign Out']")
      await logoutLnk.click()
      await expect(browser).toHaveUrlContaining("Login&module")
    })
})