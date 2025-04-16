import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get ("#navbarAccount");
  }

  static get loginButton(){
    return cy.get ("#navbarLoginButton");
  }
  
  static get userProfileMenuButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchField(){
    return cy.get("#searchQuery input");
  }

  static get productBox() {
    return cy.get("mat-card");
  }
  static get productBoxContent() {
    return cy.get("mat-dialog-content");
  }

  static get closeCard() {
    return cy.get("[aria-label='Close Dialog']");
  }

  static get expandRequestButton(){
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get reviewText(){
    return cy.get(".review-text");
  }

  static get typeReviewField(){
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get submitReview(){
    return cy.get("#submitButton");
  }

  static get validateNum(){
    return cy.get("[aria-label='Items per page:']");
  }

  static get changeNum(){
    return cy.get("mat-option");
  }

  static get addToBasket(){
    return cy.get("[aria-label='Add to Basket']");
  }

  static get showBasket(){
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static get showBasket(){
    return cy.get("[aria-label='Show Orders and Payment Menu']");
  }
  
  
  
}
