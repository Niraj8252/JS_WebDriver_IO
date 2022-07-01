class ContactPage
{
    get createContactIcon(){
        return $("//img[@alt='Create Contact...']")
    }

    async clickCreateContactIcon(){
        await this.createContactIcon.click()
    }
}
module.exports = new ContactPage()