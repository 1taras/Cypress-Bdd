const URL = "https://www.charleskeith.com/";

const SEARCHFIELD = "input.header_search-field";
const SIGNINICON = "span.header_login-msg";
const WISHLIST = "a.wishlist_btn";
const MINICART = "span.minicart-quantity";
const XBUTTON = "[class='close pull-right']";
const AGREE = "[class='affirm btn btn-primary closePopup']";



class mainPage {
    static visitPage(){
        cy.visit(URL)        
    } 

    static clickX(){
        cy.get(XBUTTON)
        .click()
    } 

    static clickAgree(){
        cy.get(AGREE)
        .click()
    } 
   
    static clickSignInIcon(){
        cy.get(SIGNINICON)
        .click()
    } 

    static enterValueToEmailField(){
        cy.title("Sign in").should('be.visible')
    }

    
}

export default mainPage