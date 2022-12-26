export default class MainPage {
    checkPageUrl(url){
        cy.url().should('include', url, {timeout :10000})
    }
}  