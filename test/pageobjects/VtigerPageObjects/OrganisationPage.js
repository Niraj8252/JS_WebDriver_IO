class OrganisationPage
{
    get createOrganisation(){
        return $("//img[@alt='Create Organization...']")
    }

    async createOrganisationIcon(){
        await this.createOrganisation.click()
    }
}

module.exports = new OrganisationPage()