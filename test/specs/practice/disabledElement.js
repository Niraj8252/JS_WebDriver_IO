describe('alert popup handling', async ()=>{
    it('alertpopup', async ()=>{
        await browser.url("E:/WEBDRIVER_IO/test/specs/practice/disableElement.html")

        const fnameTextFld = await $("//input[@id='fname']")
        await fnameTextFld.setValue("niraj")

        const fnameValue = await fnameTextFld.getValue()
        console.log("=====================fname======"+ fnameValue);

        const lnameTextFld = await $("//input[@id='lname']")
        await browser.execute((lnameValue)=>{
            document.getElementById("lname").setAttribute("value",lnameValue)
        }, "kumar")
        const lnameValue = await lnameTextFld.getValue()
        console.log("========lname===="+ lnameValue);
        // await browser.debug()
    })
})