module.exports={
    url: 'https://www.google.com/advanced_search',
    elements: {
        titleText: {
            selector: '//div[@class="appbar"]/label',
            locateStrategy: 'xpath'
        },
        mainInputQuery: 'input[name="as_q"]',
        languageDropdown: '#lr_button',
        lastUpdateDropdown: '#as_qdr_button',
        submitButton: '.jfk-button[type="submit"]'
    },
    commands: [{
        selectFilter(selector, value){
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },
        setQuery(value){
            return this
                .setValue('@mainInputQuery', value)
        },
        search(){
            return this
                .click('@submitButton');
        },
        isOnGoogleAdvancedSearchPage(){
            return this
                .waitForElementVisible('@titleText')
                .assert.containsText('@titleText', 'Penelusuran Lanjutan');
        }
    }]
}