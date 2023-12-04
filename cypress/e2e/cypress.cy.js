/// <reference types="cypress"/>

describe('template spec', () => {

  it('Caso de Teste: Login com user e senha', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    let senha = getHours(0) + getHours(1) + getHours(2)
    let user = 'user' + getHours(2)
    login(user, senha)
  })

  
  it('Caso de Teste: Login com user e senha espaços', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    login(' ',' ')
  })

  it('Caso de Teste: Comprou um Samsung Galaxy S6', () =>{
    let info = getInfo()
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type(info[0])
    cy.get('#country').type(info[1])
    cy.get('#city').type(info[2])
    cy.get('#card').type(info[3])
    cy.get('#month').type(info[4])
    cy.get('#year').type(info[5])
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.lead').should('contain.text', info[0])
  })
})  

it('Caso de Teste: Comprou um Samsung Galaxy S6 sem endereço', () =>{
  let info = getInfo()
  cy.visit('https://www.demoblaze.com/index.html')
  cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
  cy.get('.col-sm-12 > .btn').click()
  cy.get('#cartur').click()
  cy.get('.col-lg-1 > .btn').click()
  cy.get('#name').type(info[0])
  cy.get('#card').type(165470742)
  cy.get('#month').type(info[4])
  cy.get('#year').type(info[5])
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('.lead').should('contain.text', info[0])
})

it('Caso de Teste: Comprou um Samsung Galaxy S6 sem nome', () =>{
  let info = getInfo()
  cy.visit('https://www.demoblaze.com/index.html')
  cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
  cy.get('.col-sm-12 > .btn').click()
  cy.get('#cartur').click()
  cy.get('.col-lg-1 > .btn').click()
  cy.get('#country').type(info[1])
  cy.get('#city').type(info[2])
  cy.get('#card').type(info[3])
  cy.get('#month').type(info[4])
  cy.get('#year').type(info[5])
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('.lead').should('contain.text', info[0])
}) 

function login(user, senha){
  cy.get('#signin2').click()
  cy.get('#sign-username').type(user)
  cy.get('#sign-password').type(senha)
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}

function getHours(){
  let hours = new Date().getHours().toString()
  let minutes = new Date().getMinutes().toString()
  let seconds = new Date().getSeconds().toString()
  let x = [hours, minutes, seconds]
  return x
}

function getInfo(){
  let hours = getHours()
  let name = ('Pedro' + hours[0])
  let country = 'Hungria'
  let city = 'Miskolc'
  let creditCard = hours[1] + hours[0] + hours[2]
  let month = new Date().getMonth().toString()
  let year = new Date().getYear().toString()
  let x = [name,country,city,creditCard,month,year]
  return x
}