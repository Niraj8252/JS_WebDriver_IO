describe('crm application',async ()=>{
    it('create product',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await console.log( browser.getTitle());
    
        // login vtiger
        var username = "admin"
        var password = "admin"
        await  browser.$('//input[@name="user_name"]').setValue(username)
        await  browser.$("//input[@name='user_password']").setValue(password)
        await  browser.$("//input[@id='submitButton']").click()
      
        //create product
            await browser.$("//a[text()='Products']").click()
            await browser.$("//img[@alt='Create Product...']").click()
            var productName = "ecommerce website"
            await browser.$("//input[@name='productname']").setValue(productName)
        
            //dropdown action
             await browser.pause(2000)
             var productCategory=await $("//select[@name='productcategory']")
            await productCategory.selectByVisibleText("Software")
            var glAccount = await $("//select[@name='glacct']")
            await glAccount.selectByVisibleText("306-Internet Sales")
            
            //file upload
                var scroll = await $("//b[text()='Product Image Information:']")
                await scroll.scrollIntoView()
                await browser.pause(2000)
                var filepath = await browser.uploadFile("E:/Testyantra notes/selenium/JDBC.png")
                await browser.$("//input[@id='my_file_element']").setValue(filepath)
            //save and loguot product
                await browser.pause(2000)
                await browser.$("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']").click()
                var actualproductname = await $("//span[@id='dtlview_Product Name']").getText()
                assert.include(actualproductname,productName,"product not created")
                await browser.pause(2000)
                var administration=await browser.$("//img[@src='themes/softed/images/user.PNG']")
                await administration.moveTo()
                await browser.pause(2000)
                await browser.$("//a[text()='Sign Out']").click()
            })

        })
  