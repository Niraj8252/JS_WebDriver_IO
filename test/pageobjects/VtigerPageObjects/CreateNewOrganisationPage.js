class CreateNewOrganisationPage
{
get orgNameTextField(){
    return $("//input[@name='accountname']")
}

get saveLnk(){
    return  $("//input[@title='Save [Alt+S]']")
}

async saveBtn(){
    await this.saveLnk.click()
}

async enterOrganisationTextName(text){
    await this.orgNameTextField.setValue(text)
}
}
module.exports = new CreateNewOrganisationPage()