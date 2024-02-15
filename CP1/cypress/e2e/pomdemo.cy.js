import { LoginPage } from "./Pages/login_page"


const login = new LoginPage();

// Added this because we can add such things to one place that are used in every test case

//We can place it in support/e2e.js file as well 
beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})


describe('All Login Test Cases', () => {

    //Positive case
    it('Correct Creds', () => {
        //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        login.enterUsername('Admin')
        login.enterPassword('admin123')
        login.clickLogin()
    }) // We can add .skip and .only for respective test cases 


    //Negative case
    it('Wrong Username', () => {
        //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        login.enterUsername('Admin123')
        login.enterPassword('admin123')
        login.clickLogin()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Invalid credentials');
        });
    })
})

//Negative case
it('Wrong Password', () => {
    //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    login.enterUsername('Admin')
    login.enterPassword('admin127773')
    login.clickLogin()

    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Invalid credentials');
    });
})