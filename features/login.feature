Feature: The Internet Guinea Pig Website

    Scenario: Login page test
        Given I am on the login page
        Then I login with rahulshettyacademy and learning
        Then I should on home page
        

    Scenario: Add product to cart
        When I move to shop page
        Then I add below products to the cart
            | product        |
            | iphone X       |
            | iphone X       |
            | Samsung Note 8 |
        Then I shell move to cart
        Then I shell validate product, quantity and price
            | product        | quantity | price  | 
            | iphone X       | 2        | 100000 | 
            | Samsung Note 8 | 1        | 85000  |
        Then Total price in cheackout is 285000