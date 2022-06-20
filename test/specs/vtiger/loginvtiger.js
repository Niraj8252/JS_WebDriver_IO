describe('crm application',async ()=>{

    it('vtiger application launching',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
     console.log(await browser.getTitle());
      await  browser.$('//input[@name="user_name"]').setValue("admin")
      await  browser.$("//input[@name='user_password']").setValue('root')
      await  browser.$("//input[@id='submitButton']").click()
      
    })
})