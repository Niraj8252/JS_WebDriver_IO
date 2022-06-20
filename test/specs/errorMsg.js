// browser.pause

// describe('crm application',async ()=>{

//     it('fetch error msg',async ()=>{
//         await browser.url('http://localhost:8888/')
//         await browser.maximizeWindow()
//      console.log(await browser.getTitle());
//       const username=await  browser.$('//input[@name="user_name"]').setValue("admin")
//       await browser.pause(2000)
//       await  browser.$("//input[@name='user_password']").setValue('ttt')
//       await browser.pause(2000)
//       await  browser.$("//input[@id='submitButton']").click()
//       var errMsg=await browser.$("//div[@class='errorMessage']")
//       console.log(errMsg.getText());
//       await expect(errMsg).toHaveTextContaining('valid')
//     })
// })


//==================================================
// waituntil method

describe('crm application',async ()=>{

    it('fetch error msg',async ()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
     console.log(await browser.getTitle());
      const username=await  browser.$('//input[@name="user_name"]').setValue("admin")
      await browser.pause(2000)
      await  browser.$("//input[@name='user_password']").setValue('ttt')
      await browser.pause(2000)
      await  $("//input[@id='submitButton']").click()
      var errMsg=await browser.$("//div[@class='errorMessage']")
      await browser.waitUntil(
        async () => await $('.errorMessage').getAttribute('class')=== 'You must specify a valid username and password.',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        })
    //   var errMsg=await browser.$("//div[@class='errorMessage']")
      console.log(errMsg.getText());
      await expect(errMsg).toHaveTextContaining('You must specify')
    })
})