import defaultPage from "../Pages/default.page"
import loginPage from "../Pages/login.page"
import { urls } from "../data/urls"

describe('Login',()=>{
    it('login pass',()=>{
        cy.visit('https://www.saucedemo.com/')
        loginPage.setvalueToUserName('standard_user')
        loginPage.setvalueToUserPassword('secret_sauce')
        loginPage.clickLoginButton()
        defaultPage.checkPageUrl(urls.defaultPage)
        defaultPage.checkVisibilityOfLogo()
        /*
         cy.get('.bot_column').should('have.css','float').and('eq', 'right').then(cy.log)
        cy.get('.bot_column').should('have.css','background').should('contain','no-repeat')
        cy.get('.bot_column').should('have.css','background').should('contain','url("https://www.saucedemo.com/static/media/Login_Bot_graphic.20658452.png")').then(cy.log)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include','inventory.html')
        cy.get('.app_logo').should('be.visible')
        */
        })
})