describe('launch jquery' , async ()=>{

    it('radio button', async ()=>{
        await browser.url('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        await browser.maximizeWindow() 
        // await browser.pause(3000)

       async () => {
        const checkboxBtn = await $("//label[@for='radio-choice-0b']")
        await checkboxBtn .waitForDisplayed({ timeout: 3000 });
    }
    const checkboxBtn = $("//label[@for='radio-choice-0b']")
        await checkboxBtn.click()
      await checkboxBtn.isSelected()

    })
})