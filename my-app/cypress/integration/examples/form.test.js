describe("Forms App", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    const nameInput = () => cy.get('input[name="username"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passInput = () => cy.get('input[name="password"]')
    const tosInput = () => cy.get('[type="checkbox"]')
    
    it("can type inside of username, email and password fields", ()=>{
        nameInput().type('donnie')
        emailInput().type('ss.sutherland17@gmail.com')
        passInput().type("12345")
    }) 

    it("can the check the terms of service box", ()=>{
        tosInput().check()
    })
    it("can submit form data", ()=>{
        
    })

    it("the proper element exists", ()=>{
        nameInput().should("exist")

    })

})