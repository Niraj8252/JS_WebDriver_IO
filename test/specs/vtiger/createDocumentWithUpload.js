describe('create document',async ()=>{

it('pass details', async ()=>{
    await browser.url('http://localhost:8888/')
     await browser.maximizeWindow() 
    await console.log( browser.getTitle())    

//login and fill document detail
var username = "admin"
var password = "root"
const usernameTxt = await $('//input[@name="user_name"]')
usernameTxt.setValue(username)
const passwordTxt = await $("//input[@name='user_password']")
passwordTxt.setValue(password)
const loginBtn = await $("//input[@id='submitButton']")
loginBtn.click()
        await browser.$("//a[@href='index.php?module=Documents&action=index']").click()
        await browser.$("//img[@alt='Create Document...']").click()
        var documentname = "offer letter"
         await browser.$("//input[@name='notes_title']").setValue(documentname)
         await browser.switchToFrame(0)
         var notes = "this is niraj" 
         await browser.$("//body[@class='cke_show_borders']").setValue(notes)
         await browser.keys(['Control', 'a'])
        //  await browser.keys(['Control', 'c'])
         await browser.pause(2000)
         await browser.switchToParentFrame()
         await browser.$("//a[@class='cke_off cke_button_bold']").click()
         await browser.pause(2000)
         await browser.$("//a[@class='cke_off cke_button_italic']").click()
         await browser.pause(2000)
         await browser.$("//a[@class='cke_off cke_button_underline']").click()
        var element = await $("//b[text()='File Information']")
        await element.scrollIntoView();
       var FilePath = await browser.uploadFile("E:/test.txt")
        await browser.$("//input[@id='filename_I__']").setValue(FilePath)

    //logout from vtiger
        await browser.$("//b[text()='Basic Information']/../../../tr/td//input[@title='Save [Alt+S]']").click()
        await browser.pause(2000)
        var administration=await browser.$("//img[@src='themes/softed/images/user.PNG']")
        administration.moveTo()
        await browser.pause(2000)
      await browser.$("//a[text()='Sign Out']").click()
    })
})