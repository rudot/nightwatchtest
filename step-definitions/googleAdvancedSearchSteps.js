const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open Google Advanced Search page$/, () => {
  const page = client.page.googleAdvancedSearch();
  
  return page
    .navigate();
});

Then(/^I is on Google Advanced Search page$/, () => {
  const page = client.page.googleAdvancedSearch();

  return page
    .isOnGoogleAdvancedSearchPage();
});

// Then(/^the Hacker News search form exists$/, () => {
//   return client.assert.visible('input[name="q"]');
// });