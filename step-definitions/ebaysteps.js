const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^user open ebay home page$/, () => {
  const page = client.page.ebay();
  
  return page
    .navigate()
    .isOnEbayHomePage();
});

When(/^user select "([^"]*)" category$/, category => {
  const page = client.page.ebay();

  return page
    .selectCategory(category);
});

When(/^user select "([^"]*)" category in side menu$/, category => {
  const page = client.page.ebay();

  return page
    .selectSideCategory(category)
    .isOnFilteredPage(category);
});

When(/^user click more refinements button$/, () => {
  const page = client.page.ebay();

  return page
    .click('@moreRefinementButton')
    .validateFilterFormDisplayed();
});

When(/^user select "([^"]*)" for screen size filter$/, filter => {
  const page = client.page.ebay();

  return page
    .selectFilterTab("Screen Size")
    .selectCheckBoxFilter(filter);
});

When(/^user fill "([^"]*)" and "([^"]*)" for price range filter$/, (min, max)  => {
  const page = client.page.ebay();
  
  return page
    .selectFilterTab("Price")
    .setValue('@minimumValueTextField', min)
    .setValue('@maximumValueTextField', max);
});

When(/^user select "([^"]*)" for location filter$/, location  => {
  const page = client.page.ebay();
  
  return page
    .selectFilterTab("Item Location")
    .selectRadioFilter(location);
});

When(/^user click apply button on filter form$/, ()  => {
  const page = client.page.ebay();
  
  return page
    .click('@applyButton');
});

Then(/^user see search result with filters "([^"]*)"$/, filters  => {
  const page = client.page.ebay();

  return page
    .isOnFilteredPage(filters);
});

Then(/^user see listing container$/, ()  => {
  const page = client.page.ebay();
  
  return page
    .waitForElementVisible('@resultContainer')
    .assert.visible('@resultContainer');
});

When(/^user search "([^"]*)" keyword on home page$/, keyword  => {
  const page = client.page.ebay();
  
  return page
    .fillTextField('@searchTextField', keyword);
});

When(/^user select search category "([^"]*)" and click search on home page$/, category  => {
  const page = client.page.ebay();
  
  return page
    .selectFilter('@searchCategoryDropDown', category)
    .click('@searchButton');
});

Then(/^user see search result for "([^"]*)" keyword$/, keyword  => {
  const page = client.page.ebay();
  
  return page
    .isOnSearchResultPage()
    .validateResultItem(keyword);
});


