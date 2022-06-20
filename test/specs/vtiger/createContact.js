describe('crm application',async ()=>{
  var randomNum = await Math.round(Math.random()*1000)
    it('create contact',async ()=>{
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
      await browser.$("//a[text()='Contacts']").click()
      await browser.$("//img[@alt='Create Contact...']").click()
      var contactname = "tyss"+randomNum
      await browser.$("//input[@name='lastname']").setValue(contactname)
      await browser.$("//input[@title='Save [Alt+S]']").click()
      var actualcontactname = await $("//span[@id='dtlview_Last Name']").getText()
    assert.include(actualcontactname,contactname,"contact not created")
      await browser.pause(2000)
     var administration= await browser.$("//img[@src='themes/softed/images/user.PNG']")
      administration.moveTo()
      await browser.$("//a[text()='Sign Out']").click()
      
    })
})
