describe('frame handling', async ()=>{
    it('frame', async ()=>{

        await browser.url("https://ui.vision/demo/webtest/frames/")
        await browser.maximizeWindow()

        await expect(browser).toHaveTitleContaining('Frames')

        // frame 1
        const frame1 = await $("//frame[@src='frame_1.html']")
        await browser.switchToFrame(frame1)
        const frame1Text = await $("//input[@name='mytext1']")
        await frame1Text.setValue("niraj kumar")
        await browser.switchToParentFrame()
        //frame 2
        const frame2 = await $("//frame[@src='frame_2.html']")
        await browser.switchToFrame(frame2)
        const frame2Text = await $("//input[@name='mytext2']")
        await frame2Text.setValue("nirbhay")
        await browser.switchToParentFrame()
        // frame 3
     const frame3 = await $("//frame[@src='frame_3.html']")
     await browser.switchToFrame(frame3)
     const frame3Text = await $("//input[@name='mytext3']")
     await frame3Text.setValue("lava")
     //iframe
     const innerframe = await $("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
        await browser.switchToFrame(innerframe)
        const radioBtn = await $("//div[@id='i5']")
        await radioBtn.click()
        //scroll
        const scroll = await $("//span[contains(text(),'How do you plan to use the')]")
        await scroll.scrollIntoView()
        const checkbox = await $("//span[text()='Form Autofilling']")
        await checkbox.click()
        // scroll
        var scroll1 = await $("//span[contains(text(),'Did you know that the IDE')]")
        await scroll1.scrollIntoView()
        const dropdown = await $("//span[text()='Choose']")
        await dropdown.click()
        var text = await $("//div[contains(@class,'ncFHed')]//span[contains(text(),'Well, now I know')]")
        await text.click()
        const nextBtn = await $("//span[text()='Next']")
        await nextBtn.click()
        await browser.switchToFrame(null)
        // frame 4
        const frame4 = await $("//frame[@src='frame_4.html']")
        await browser.switchToFrame(frame4)
        const frame4Text = await $("//input[@name='mytext4']")
        await frame4Text.setValue("sanjay")


    })
})