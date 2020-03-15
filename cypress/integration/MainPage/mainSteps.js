/// <reference types="cypress" />
import {Given, When, Then, defineStep} from 'cypress-cucumber-preprocessor/steps';

import mainPage from './mainPage';

defineStep('I open the main page', () => {
   mainPage.visitPage();
})

 When('I click x button', () => {
     mainPage.clickX();
 })

 And('I click agree button', () => {
    
    mainPage.clickAgree();
})

And('I click signIn icon', () => {
    
    mainPage.clickSignInIcon();
    
 })

 And('I enter', () => {
    
    mainPage.enterValueToEmailField();
    
 })


