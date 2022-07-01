class CreateNewContactPage
{
    get createTextFieldLastName(){
        return $("//input[@name='lastname']")
    }

    async enterDataCreateTextField(text){
        await this.createTextFieldLastName.setValue(text)
    }
    get save(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async clickSaveBTn(){
        await this.save.click()
    }
    get addOrgIcon(){
        return  $("//input[@name='account_name']/..//img[@src='themes/softed/images/select.gif']")
    }
    async clickAddOrgIcon(){
        await this.addOrgIcon.click()
    }
}

module.exports= new CreateNewContactPage()