const { assert } = require("chai");

class ContactInformationpage
{
    get createdContact(){
        return $("//span[@id='dtlview_Last Name']")
    }
    async getCreatedContact(){
        await this.createdContact.getText()
    }
    
      get contactHeaderText(){
        return $("//span[@class='dvHeaderText']")
      }
      async waitTillCreatedContactDisplay(){
        
        await this.contactHeaderText.waitForDisplayed({ timeout: 3000 });
      }
      async assertCondition(){
         var actualcontactname = await this.contactHeaderText.getText()
      
      await assert.include(actualcontactname,"tyss","contact not created")
      }
}
     

module.exports = new ContactInformationpage()