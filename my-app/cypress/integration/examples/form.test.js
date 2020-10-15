describe("Forms App", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    const nameInput = () => cy.get('input[name="username"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passInput = () => cy.get('input[name="password"]')
    const tosInput = () => cy.get('[type="checkbox"]')
    const formInput = () => cy.get('#form-id')
    
    it("can type inside of username, email and password fields", ()=>{
        nameInput().type('donnie')
        emailInput().type('ss.sutherland17@gmail.com')
        passInput().type("12345")
    }) 
        
    it("can the check the terms of service box", ()=>{
        tosInput().check()
    })
   it("the proper element exists", ()=>{
        nameInput().should("exist")

    })
     it("form validation is correct", ()=>{
        nameInput().type('donnie').should("have.value",'donnie')
        emailInput().type('ss.sutherland17@gmail.com').should("have.value",'ss.sutherland17@gmail.com' )
        passInput().type("12345").should("have.value", "12345")
        tosInput().check().should("have.value", "true")

    })
    

})