describe('amazone launch', async()=>{
    it('scroll', async ()=>{
        await browser.url('https://www.amazon.in/')
        await browser.maximizeWindow() 

        const helpLnk = $("//a[text()='Help']")
        await helpLnk.scrollIntoView()
        console.log("window scrolled");
        await expect(browser).toHaveTitleContaining("gmiger CRM 5")
    })
})