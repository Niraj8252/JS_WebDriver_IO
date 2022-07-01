const LoginPage = require("../../pageobjects/VtigerPageObjects/LoginPage")
const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync("test/genericLibrary/commonData.json"))


describe('crm application',async ()=>{

    credentials.forEach(({userName,password}) => {
        
  
    it('vtiger application launching',async ()=>{
    //     await browser.url('http://localhost:8888/')
    //     await browser.maximizeWindow()
        
    //  console.log(await browser.getTitle());
    //   await  browser.$('//input[@name="user_name"]').setValue("admin")
    //   await  browser.$("//input[@name='user_password']").setValue('root')
    //   await  browser.$("//input[@id='submitButton']").click()
    //   await expect(browser).toHaveTitleContaining("gmiger CRM 5")

    await browser.maximizeWindow()
    await LoginPage.open()
    await LoginPage.login(userName,password)
    })
    it('vtiger application launching',async ()=>{
        //     await browser.url('http://localhost:8888/')
        //     await browser.maximizeWindow()
            
        //  console.log(await browser.getTitle());
        //   await  browser.$('//input[@name="user_name"]').setValue("admin")
        //   await  browser.$("//input[@name='user_password']").setValue('root')
        //   await  browser.$("//input[@id='submitButton']").click()
        //   await expect(browser).toHaveTitleContaining("gmiger CRM 5")
    
        await browser.maximizeWindow()
        await LoginPage.open()
        await LoginPage.login(userName,mast)
        })
        it('vtiger application launching',async ()=>{
            //     await browser.url('http://localhost:8888/')
            //     await browser.maximizeWindow()
                
            //  console.log(await browser.getTitle());
            //   await  browser.$('//input[@name="user_name"]').setValue("admin")
            //   await  browser.$("//input[@name='user_password']").setValue('root')
            //   await  browser.$("//input[@id='submitButton']").click()
            //   await expect(browser).toHaveTitleContaining("gmiger CRM 5")
        
            await browser.maximizeWindow()
            await LoginPage.open()
            await LoginPage.login(ops,password)
            })
            it('vtiger application launching',async ()=>{
                //     await browser.url('http://localhost:8888/')
                //     await browser.maximizeWindow()
                    
                //  console.log(await browser.getTitle());
                //   await  browser.$('//input[@name="user_name"]').setValue("admin")
                //   await  browser.$("//input[@name='user_password']").setValue('root')
                //   await  browser.$("//input[@id='submitButton']").click()
                //   await expect(browser).toHaveTitleContaining("gmiger CRM 5")
            
                await browser.maximizeWindow()
                await LoginPage.open()
                await LoginPage.login(userNamrre,password)
                })
                it('vtiger application launching',async ()=>{
                    //     await browser.url('http://localhost:8888/')
                    //     await browser.maximizeWindow()
                        
                    //  console.log(await browser.getTitle());
                    //   await  browser.$('//input[@name="user_name"]').setValue("admin")
                    //   await  browser.$("//input[@name='user_password']").setValue('root')
                    //   await  browser.$("//input[@id='submitButton']").click()
                    //   await expect(browser).toHaveTitleContaining("gmiger CRM 5")
                
                    await browser.maximizeWindow()
                    await LoginPage.open()
                    await LoginPage.login(userName,passwjvord)
                    })
})
})