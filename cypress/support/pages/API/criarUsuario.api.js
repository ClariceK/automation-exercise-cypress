const payload = {
      name: Cypress.env('firstName') + ' ' + Cypress.env('lastName'),
      email: `qa_${Date.now()}@test.com`,
      password: Cypress.env('password'),
      title: "Mrs",
      birth_date: "10",
      birth_month: "05",
      birth_year: "1990",
      firstname: Cypress.env('firstName'),
      lastname: Cypress.env('lastName'),
      company: "Company Test",
      address1: Cypress.env('address'),
      address2: "Apto 10",
      country: Cypress.env('country'),
      zipcode: Cypress.env('zipCode'),
      state: Cypress.env('state'),
      city: Cypress.env('city'),
      mobile_number: Cypress.env('mobileNumber')
    }


class criarUsuario{

    requisicaoCriarUsuario(){
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            form: true,
            body: payload
        }).as('response')
    }

    validarStatusCriacao(){
        cy.get('@response').its('status').should('eq', 200)
    }

    validarResponse(){
    
    cy.get('@response').then((response) => {

    const body = typeof response.body === 'string'
      ? JSON.parse(response.body)
      : response.body;

      expect(body).to.have.property('responseCode', 201);
      expect(body).to.have.property('message', 'User created!');


  });


    }

}

export default new criarUsuario;