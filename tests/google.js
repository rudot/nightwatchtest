module.exports ={
    '@tags': ['google'],
    'Google advanced search elon musk'(browser){
        const mainQuery = 'elon musk';
       
        const page = browser.page.googleAdvancedSearch();
        const resultQueryFieldSelector = `#searchform input[name="q"][value="${mainQuery}"]`
        const resultLanguageSelector = '[aria-label="Telusuri halaman berbahasa Italia"]'
        const resultLastUpdateSelector = '[aria-label=" Sebulan terakhir"]'

        page
            .navigate()
            .isOnGoogleAdvancedSearchPage()
            .setQuery('elon musk')
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search()

        browser
            .assert.urlContains('as_q=elon+musk', 'Query is elon musk')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Last update is last month');

        browser.assert.visible(resultQueryFieldSelector, 'elon musk')
        browser.assert.containsText(resultLanguageSelector, 'Telusuri halaman berbahasa Italia')
        browser.assert.containsText(resultLastUpdateSelector, 'Sebulan terakhir')
        browser.saveScreenshot('tests_output/google.png');   

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