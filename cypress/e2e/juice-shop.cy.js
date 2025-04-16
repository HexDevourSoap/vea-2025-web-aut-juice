import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const emailNumber = Math.floor(Math.random() * 101);
      const email = "email_" + emailNumber.toString() + "@ebox.com";
      const password = "randomPassword123#";
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);

      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.menuOptions.contains("Your favorite book?").click();
      // Fill in answer
      RegistrationPage.answerField.type("ABC123");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productBoxContent.should("contain.text", "Sour but full of vitamins.");
    });

    
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Create scenario - Search 500ml and validate Lemon, while having multiple cards
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productBoxContent.should("contain.text", "Sour but full of vitamins.");


    });
    
    
    
   

      // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productBoxContent.should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      HomePage.closeCard.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productBoxContent.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeCard.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productBoxContent.should("contain.text", "Sweet & tasty!");


    });
    

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productBox.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandRequestButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewText.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");

    });
    

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchField.type(" Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.typeReviewField.click();
      HomePage.typeReviewField.type("Tastes like metal");
      // Click Submit
      HomePage.submitReview.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandRequestButton.click();
      // Validate review -  "Tastes like metal"
      HomePage.reviewText.should("contain.text", "Tastes like metal");


    }); 
    

    it("Validate product card amount", () => {
      // Create scenario - Validate product card amount

      // Validate that the default amount of cards is 12

      HomePage.productBox.should("have.length", 12);
      HomePage.validateNum.type(12);
      // Change items per page (at the bottom of page) to 24
      HomePage.changeNum.contains(24).click();

      //HomePage.productBox.should("have.length", 24);

      // Validate that the amount of cards is 24
      
      //HomePage.validateNum.type(24).click();
      // Change items per page (at the bottom of page) to 36

      // Validate that the amount of cards is 35


    }); 
    

    it("Buy Girlie T-shirt", () => {
      // Create scenario - Buy Girlie T-shirt
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchField.type(" Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasket.click();
      // Click on "Your Basket" button
      HomePage.showBasket.click();
      // Create page object - BasketPage

      // Click on "Checkout" button
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      // Click Continue button
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      // Click Continue button
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      // Click Continue button
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"



    }); 
    

    it.only("Add address", () => {
      // Create scenario - Add address
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.showBasket.click();
      // Click on My saved addresses
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      // Click Submit button
      // Validate that previously added address is visible



    }); 
    

    it("Add payment option", () => {
      // Create scenario - Add payment option

      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      // Click on My payment options
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      // Fill in Name
      // Fill in Card Number
      // Set expiry month to 7
      // Set expiry year to 2090
      // Click Submit button
      // Validate that the card shows up in the list



    }); 
    
  });
});
