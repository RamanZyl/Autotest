import { checkVisibilityOfElementByElement } from "../Actions/mainActions";
import MainPage from "./main.page";

class defaultPage extends MainPage{
    get headerLogo(){
        return cy.get('.app_logo')
    }

    checkVisibilityOfLogo(){
        checkVisibilityOfElementByElement(this.headerLogo)
    }
} export default new defaultPage