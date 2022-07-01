const { assert } = require("chai");

class OrgInformationPage
{
    get headerText(){
       return $("//span[@class='dvHeaderText']")
    }

    async waitTillDisplay(){
        await this.headerText.waitForDisplayed({ timeout: 19000 });
    }

    get fetchActualData(){
       return $("//span[@id='dtlview_Organization Name']")
    }
    async createdOrgData(){
        await this.fetchActualData.getText()
    }

    async assertOrgCreatedCondition(){
        var actualorganisationName = await this.fetchActualData.getText()
        await assert.include(actualorganisationName,"tyss","organisation not created")
    }
} 

module.exports = new OrgInformationPage()