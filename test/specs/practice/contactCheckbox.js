describe('crm application',async ()=>{
    var randomNum = await Math.round(Math.random()*1000)
      it('create contact',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await expect(browser).toHaveTitleContaining("vtiger CRM 5")
        await console.log( browser.getTitle());
        var username = "admin"
  var password = "root"
  const usernameTxt = await $('//input[@name="user_name"]')
  await usernameTxt.setValue(username)
  const passwordTxt = await $("//input[@name='user_password']")
  await passwordTxt.setValue(password)
  const loginBtn = await $("//input[@id='submitButton']")
  await loginBtn.click()
  await expect(browser).toHaveTitleContaining("Home")
       const contactLnk= await browser.$("//a[text()='Contacts']")
       await contactLnk.click()

       const checkbox1 = $("//input[@id='selectCurrentPageRec']/../../../tr[4]/td//input[@id='23']")
       await checkbox1.click()
       const checkbox2 = $("//input[@id='selectCurrentPageRec']/../../../tr[5]/td//input[@id='24']")
       await checkbox1.click()
      })
    })