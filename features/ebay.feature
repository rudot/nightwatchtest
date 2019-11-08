@ebay
Feature: Ebay

@ebay1
Scenario: Filter Item with Category on Ebay Page
  Given user open ebay home page
  When user select "Cell phones & accessories" category
  Then user see search result with filters "Cell Phones, Smart Watches & Accessories"
  When user select "Cell Phones & Smartphones" category in side menu
  And user click more refinements button
  And user select "6 in or More" for screen size filter
  And user fill "3000000" and "7000000" for price range filter
  And user select "Asia" for location filter
  And user click apply button on filter form
  Then user see listing container

@ebay2
Scenario: Search Item on Ebay Page
  Given user open ebay home page
  When user search "MacBook" keyword on home page
  And user select search category "Computers/Tablets & Networking" and click search on home page
  Then user see search result for "MacBook" keyword
