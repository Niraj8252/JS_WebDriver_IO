const { assert } = require("chai")

describe('crm application',async ()=>{
    it('create product',async ()=>{
        await browser.url('http://localhost:8888/')
        await expect(browser).toHaveTitleContaining("vtiger CRM 5")
        await browser.maximizeWindow()
        await console.log( browser.getTitle());
    
        // login vtiger
        var username = "admin"
            var password = "root"
            const usernameTxt =  $('//input[@name="user_name"]')
            await usernameTxt.setValue(username)
            const passwordTxt =  $("//input[@name='user_password']")
            await passwordTxt.setValue(password)
            const loginBtn = await $("//input[@id='submitButton']")
            await loginBtn.click()
            
            await expect(browser).toHaveUrlContaining("index&module")
      
        //create product
           const productLnk = $("//a[text()='Products']")
           await productLnk.click()
            const createProductIcon = $("//img[@alt='Create Product...']")
            await createProductIcon.click()
            await expect(browser).toHaveUrlContaining("EditView&return_action")
            var productName = "ecommerce website"
           const productText = $("//input[@name='productname']")
           await productText.setValue(productName)
        
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
               
               const saveBtn = $("//b[text()='Description Information']/../../following-sibling::tr/following-sibling::tr/following-sibling::tr/td/div//input[@title='Save [Alt+S]']")
               await saveBtn.click()
               await expect(browser).toHaveUrlContaining("Products&record")
                var actualproductname = await $("//span[@id='dtlview_Product Name']").getText()
                assert.include(actualproductname,productName,"product not created")
               
                var administration=await browser.$("//img[@src='themes/softed/images/user.PNG']")
                await administration.moveTo()
                
                const logoutLnk = $("//a[text()='Sign Out']")
                await logoutLnk.click()
                await expect(browser).toHaveUrlContaining("Login&module")
            })

        })
  