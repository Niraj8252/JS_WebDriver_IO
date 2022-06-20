describe('crm application',async ()=>{

    it('vtiger application launching',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
     console.log(await browser.getTitle());
     
      await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })

    
    it('login v tiger',async ()=>{
        await  browser.$('//input[@name="user_name"]').setValue("admin")
        await browser.pause(2000)
        await  browser.$("//input[@name='user_password']").setValue('root')
        await browser.pause(2000)
        await  browser.$("//input[@id='submitButton']").click()
    })
})