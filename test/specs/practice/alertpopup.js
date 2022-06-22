describe('alert popup handling', async ()=>{
    it('alertpopup', async ()=>{
        await browser.url("E:/WEBDRIVER_IO/test/specs/practice/createAlert.html")
        
        // get alert msg
        var alertmsg = await browser.getAlertText()
        console.log("alert msg is =====> "+alertmsg);

        // click ok in alert
        await browser.acceptAlert()

        var alertmsg2 = await browser.getAlertText()
        console.log("alert msg is =====> "+alertmsg2);

        // send data in alert popup
        await browser.sendAlertText("handled")
        await browser.acceptAlert()

    })
})