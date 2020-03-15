import {defineStep} from 'cypress-cucumber-preprocessor/steps';


defineStep('I want to wait \'{int}\' milliseconds', time => {
    cy.wait(time)
})

defineStep('Title contains {string} text', text => {
    cy.title().should('include', text)
})

defineStep('And I want to reload the page', ()=>{
    cy.reload()
})