module.exports ={
    '@tags': ['ebay'],
    'ebay'(browser){
        const category = 'Cell phones & accessories';
        const categoryTitle = 'Cell Phones, Smart Watches & Accessories';
        const sideCategory = 'Cell Phones & Smartphones';
        const page = browser.page.ebay();
        // const resultQueryFieldSelector = `#searchform input[name="q"][value="${mainQuery}"]`
        const resultLanguageSelector = '[aria-label="Telusuri halaman berbahasa Italia"]'
        const resultLastUpdateSelector = '[aria-label=" Sebulan terakhir"]'

        page
            .navigate()
            .isOnEbayHomePage()
            .selectCategory(category)
            .isOnCategoryPage(categoryTitle)
            .selectSideCategory(sideCategory)
            .isOnCategoryPage(sideCategory)
            .click('@moreRefinementButton')
            .validateFilterFormDisplayed()
            .selectFilterTab("Screen Size")
            .selectCheckBoxFilter("6 in or More")
            .selectFilterTab("Price")
            .setValue('@minimumValueTextField', '3000000')
            .setValue('@maximumValueTextField', '7000000')
            .selectFilterTab('Item Location')
            .selectRadioFilter('Asia')
            .click('@applyButton');

        // browser
        //     .assert.urlContains('as_q=elon+musk', 'Query is elon musk')
        //     .assert.urlContains('lr=lang_it', 'Language is Italian')
        //     .assert.urlContains('as_qdr=m', 'Last update is last month');

        // browser.assert.visible(resultQueryFieldSelector, 'elon musk')
        // browser.assert.containsText(resultLanguageSelector, 'Telusuri halaman berbahasa Italia')
        // browser.assert.containsText(resultLastUpdateSelector, 'Sebulan terakhir')
        // browser.saveScreenshot('tests_output/google.png');   

                // browser
        //     .url('https://www.google.com/advanced_search')
        //     .useXpath()
        //     .waitForElementVisible('//div[@class="appbar"]/label')
        //     .assert.containsText('//div[@class="appbar"]/label', 'Penelusuran Lanjutan')
        //     .useCss()
        //     .setValue(mainInputQuerySelector, mainQuery)
        //     .click(languageDropdownOpenerSelector)
        //     .click(languageDropdownValueSelector)
        //     .click(lastUpdateDropdownOpenerSelector)
        //     .click(lastUpdateDropdownValueSelector)
        //     .click(submitButtonSelector)
    }
}