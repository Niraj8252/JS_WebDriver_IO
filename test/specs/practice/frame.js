const { assert } = require("chai")

describe('frame handling', async ()=>{
    it('frame', async ()=>{
        await browser.url("https://chercher.tech/practice/frames")
        await browser.maximizeWindow()

        await expect(browser).toHaveTitleContaining('Frame')
        const frame1 = await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)
        const topicText = await $("//input")
        const fetchtext = await $("//input")
        await topicText.setValue("assignment")
       var result  =  await fetchtext.getValue()
        await assert.equal(result,"assign","not pass the value")

        const frame3 = await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        const chechbox = await $("//input")
        await chechbox.click()
       
        await browser.switchToFrame(null)

        const frame2 = await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)

        const animaldrop =await $("//select[@id='animals']")
        await animaldrop.selectByVisibleText("Avatar")
        console.log(result);

    })
})