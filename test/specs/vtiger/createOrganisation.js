describe('crm application',async ()=>{
  var randomNum = await Math.round(Math.random()*1000)
    it('create organisation',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await console.log( browser.getTitle());
        var username = "admin"
        var password = "root"
        const usernameTxt = await $('//input[@name="user_name"]')
        usernameTxt.setValue(username)
        const passwordTxt = await $("//input[@name='user_password']")
        passwordTxt.setValue(password)
        const loginBtn = await $("//input[@id='submitButton']")
        loginBtn.click()
        await browser.$("//td[@class='tabUnSelected']//a[text()='Organizations']").click()
        await browser.$("//img[@alt='Create Organization...']").click()
        var organisationname = "tyss"+randomNum
        await browser.$("//input[@name='accountname']").setValue(organisationname)
        await browser.$("//input[@title='Save [Alt+S]']").click()
        var actualorganisationName = await browser.$("//span[@id='dtlview_Organization Name']").getText()
            assert.include(actualorganisationName,organisationname,"organisation not created")
        await browser.pause(2000)
        var administration= await $("//img[@src='themes/softed/images/user.PNG']")
        await administration.moveTo()

      await browser.$("//a[text()='Sign Out']").click()
    })
})
