class HomePage
{
    get contactLnk(){
        return $("//a[text()='Contacts']")
    }

    async clickContactsLnk(){
        await this.contactLnk.click()
    }

    get organizationLnk(){
        return $("//a[text()='Organizations']")
    }
    async clickOrganizationsLnk(){
        await this.organizationLnk.click()
    }



    get administratorIcon(){
        return $("//img[@src='themes/softed/images/user.PNG']")
    }
    

    get logoutLnk(){
        return $("//a[text()='Sign Out']")
    }

    async clickLogoutLnk(){
        await this.administratorIcon.moveTo()
        await this.logoutLnk.click()
    }
}
module.exports = new HomePage()