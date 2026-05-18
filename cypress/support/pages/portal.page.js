const SIGNUP_LOGIN = 'a[href="/login"]'

class portal{

    acessarLogin(){
        cy.get(SIGNUP_LOGIN).click()
    }
}

export default new portal()