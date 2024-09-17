// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickOnMenu', () => {
    cy.get('.js-btn-menu').click()
})   

Cypress.Commands.add('selectTelefoonOption', () => {
    cy.get('.main-slide-bar__items').find('.main-slide-bar__link').contains('Telefoons').click()
    cy.get('.navbar-2__tab__content__button').contains('Telefoon bestellen').click({force:true});
})

Cypress.Commands.add('selectBrandDropdownMenu', () => {
    cy.get('[data-id="brands"]').click()
})

//phone type could be parameterised
Cypress.Commands.add('selectPhotoType', (phoneType) => {
    cy.get('[data-slug="apple"]').click()
})

//iphone-13 should be parameterised in order to reuse the method for other phones as well
Cypress.Commands.add('selectiPhone13', () => {
    cy.get('[data-id="iphone-13"] a.btn.btnType01').click()
})


Cypress.Commands.add('addUserInfo', (gender, initials, firstname, lastname, dateofbirth, phonenumber, zipcoe, housenumber, email) => {  
    cy.get('[type="radio"]').check(gender, {force:true}) //inorder to interact with hidden elements
    cy.get('#details-initials').type(initials)
        cy.get('#details-first-name').type(firstname)
        cy.get('#details-last-name').type(lastname)
        cy.get('#details-birth-date').type(dateofbirth)
        cy.get('#details-phone-number').type(phonenumber)
        cy.get('#details-zipcode').type(zipcoe)
        cy.get('#details-house-number').type(housenumber)
        cy.get('#details-email').type(email)
        cy.get('#details-email-repeat').type(email)
        cy.get('.phone-checkout-details__control').contains('Verder').click()

    })

    Cypress.Commands.add('addIncomeAndExpense', () => {
        cy.get('#credits-family-composition').select('1').contains('Alleenstaand zonder kinderen')
        cy.get('#credits-income').type(80000)
        cy.get('input[value="rent"]').check({force:true}) 
        cy.get('#credits-costs').type(2000)
        cy.get('#credits-special-costs').type(2000)
        cy.get('[data-id="credits-car-owner"]').find('input[value="true"]').check({force:true})
        cy.get('[data-id="credits-terms"]').find('[type="checkbox"]').check({force:true})
        cy.get('.phone-checkout-credit__control').contains('Verder').click()
    })

    Cypress.Commands.add('legitimation', (documentNumber, issueDate, expirationDate) => {
        cy.get('[data-id="driver-license"]').contains('rijbewijs').click()
        cy.get('input[id="identification-document-number"]').type(documentNumber)
        cy.get('input[id="identification-issue-date"]').type(issueDate)
        cy.get('input[id="identification-expiration-date"]').type(expirationDate)
        cy.get('.phone-checkout-identification__details__form__control').contains('Verder').click()  
    })

    Cypress.Commands.add('paymentMethod', () => {
        cy.get('#control-bank').select('INGBNL2A')
        cy.get('input[id="control-terms"]').check({force:true})
        cy.get('input[id="control-subscribe"]').uncheck({force:true})
        cy.get('button[value="payment"]').click()
    })

    Cypress.Commands.add('acceptDefaultSimAndImportNumber', () => {
        cy.get('.phone-sticky-receipt__collapsed__controls').contains('Verder').click() 
        cy.get('.phone-checkout-esim__control').contains('Verder').click() 
        cy.get('.phone-checkout-numberporting__control').contains('Verder').click()
    })