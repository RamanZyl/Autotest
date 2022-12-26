import { clickElementByElement, setValueToElementByElement } from "../Actions/mainActions"
import MainPage from "./main.page"

class loginPage extends MainPage{
    get userName() {
        return cy.get('#user-name')
    }

    get userPassword() {
        return cy.get('#password')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    setvalueToUserName(value){
        setValueToElementByElement(value, this.userName)
    }

    setvalueToUserPassword(value){
        setValueToElementByElement(value, this.userPassword)
    }

    clickLoginButton(){
        clickElementByElement(this.loginButton)
    }

} export default new loginPage()