class OrgWindowPage
{
    get orgElemet(){
        return $("//td[@class='moduleName']")
    }
    async waitTillOrgDisplay(){
        await this.orgElemet.waitForDisplayed({ timeout: 16000 });
    }
    get searchCreatedOrg(){
        return $("//input[@id='search_txt']")
    }
   
    get searchLnk(){
        return $("//input[@name='search']")
    }
   
    // get orgSearched(){
    //     return $("//a[text()='"+actualorganisationName+"']")
    // }
    // async clickEnterElement(){
    //     await this.orgSearched.click()
    // }
    async searchOrganisation(text){
        await this.searchCreatedOrg.setValue(text)
        await this.searchLnk.click()
       
        await $("//a[text()='"+text+"']").click()
    }
}

module.exports = new OrgWindowPage()