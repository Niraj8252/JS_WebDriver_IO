describe('practice automation your loga',async ()=>{
    
    it('add to cart',async ()=>{
        await browser.url("http://automationpractice.com/")
        await browser.maximizeWindow()

        var mouseoverWomen= await $("//a[text()='Women']").click()
        // mouseoverWomen.moveTo()
        // await browser.$("(//a[text()='Casual Dresses'])[1]").click()
        var scroll = await $("//div[contains(text(),'Showing')]")
        await scroll.scrollIntoView()
        await browser.$("//img[@alt='Printed Dress']").click()
        var windowid = await browser.getWindowHandles()
        windowid.switchToWindow(windowid)
        await browser.$("//i[@class='icon-plus']").click()
        var dropdown = await $("//select[@id='group_1']")
        dropdown.selectByVisibleText("M")
        await browser.$("//span[text()='Add to cart']").click()
    })
})