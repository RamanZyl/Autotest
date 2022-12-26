function setValueToElementByElement(value, element){
    element.type(value)
}

function clickElementByElement(element){
    element.click()
}

function checkVisibilityOfElementByElement(element){
    element.should('be.visible')
}
export {
    setValueToElementByElement,
    clickElementByElement,
    checkVisibilityOfElementByElement
}