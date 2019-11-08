module.exports={
    url: 'https://www.ebay.com/',
    elements: {
        homeTab: {
            selector: '//span[text()="Home"]',
            locateStrategy: 'xpath'
        },
        shopByCategoryButton: 'button#gh-shop-a',
        moreRefinementButton: {
            selector: '//span[text()="More refinements"]/parent::button',
            locateStrategy: 'xpath'
        },
        filterForm: '#x-overlay__form',
        minimumValueTextField: {
            selector: '(//input[@aria-label="Minimum Value"])[2]',
            locateStrategy: 'xpath'
        },
        maximumValueTextField: {
            selector: '(//input[@aria-label="Maximum Value"])[2]',
            locateStrategy: 'xpath'
        },
        applyButton: {
            selector: '//button[text()="Apply"]',
            locateStrategy: 'xpath'
        },
        headerText: 'span.b-pageheader__text', 
        allListingFilterButton: {
            selector: '//h2[text()="Limited Time Deals"]',
            locateStrategy: 'xpath'
        },
        resultContainer: '#w8',
        searchTextField: '.gh-tb.ui-autocomplete-input',
        searchCategoryDropDown: 'div#gh-cat-box',
        searchButton: 'input#gh-btn',
        searchResultCountContainer: 'h1.srp-controls__count-heading'
    },
    commands: [{
        selectCategory(value){
            return this
                .click('@shopByCategoryButton')
                .useXpath()
                .click(`//a[@class="scnd" and text()="${value}"]`);
        },
        selectSideCategory(value){
            return this
                .useXpath()
                .click(`//*[@class="b-textlink b-textlink--parent" and text()="${value}"]`);
        },
        validateFilterFormDisplayed(){
            return this
                .assert.visible('@filterForm');
        },
        selectFilterTab(filter){
            return this
                .useXpath()
                .click(`//*[@class="x-overlay-aspect__label" and text()="${filter}"]`);
        },
        selectCheckBoxFilter(filter){
            return this
                .useXpath()
                .click(`//span[text()="${filter}"]/preceding-sibling::input`);
        },
        selectRadioFilter(filter){
            return this 
                .useXpath()
                .click(`(//input[@data-value="${filter}"])[2]`)
        },
        isOnEbayHomePage(){
            return this
                .waitForElementVisible('@homeTab')
                .assert.containsText('@homeTab', 'Home');
        },
        isOnFilteredPage(filter){
            return this
                .useCss()
                .waitForElementVisible('@headerText')
                .assert.containsText('@headerText', filter);
        },
        fillTextField(element, value){
            return this
                .setValue(element, value);
        },
        selectFilter(locator, value){
            return this
                .click(locator)
                .useXpath()
                .click(`//option[text()="${value}"]`);
        },
        isOnSearchResultPage(){
            return this
               
        },
        validateResultItem(keyword){
            return this
                .useCss()
                .waitForElementVisible('h3.s-item__title')
                .expect.element('h3.s-item__title').text.to.contain(keyword);
        }
    }]
}