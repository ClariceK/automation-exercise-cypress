import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Portal from "../pages/portal.page"

Given('que acessei o portal automation exercise' , () => {
    cy.visit('/');
})

And('acessei o login', () => {
    Portal.acessarLogin()
})