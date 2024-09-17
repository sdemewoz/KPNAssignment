describe("Order a Simyo subscription", function()
{
    before(function() {
        cy.fixture('userData').then((data) => {
            this.data = data;
        }) 

        cy.fixture('legitimationInfo').then((data) => {
            this.legitimationData = data;
        })

        cy.visit('www.simyo.nl')
    })
   
    it('Order iPhone 13 subscription', function() {
        cy.get('#js-cookie-btn-accept').click()
    
        cy.clickOnMenu()
        cy.selectTelefoonOption()
        cy.selectBrandDropdownMenu()
        cy.selectPhotoType() 
        cy.selectiPhone13()
        
        cy.acceptDefaultSimAndImportNumber()
        
        cy.addUserInfo(this.data.gender, this.data.initials, this.data.firstname, this.data.lastname, this.data.dateofbirth, this.data.phonenumber, this.data.zipcode, this.data.housenumber, this.data.email)
        cy.addIncomeAndExpense()
        cy.legitimation(this.legitimationData.documentNumber, this.legitimationData.issueDate, this.legitimationData.expirationDate)
        cy.paymentMethod()
        
        //tryin to verify that I am in the right payment page but couldnt access third party redirect
        // cy.wait(100000)
        // cy.url().should('contain', 'ing')
    })})
