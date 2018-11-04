describe('testing portfolio site', function() {

    it('Should ping the site', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://azeneli.github.io/anrizeneli/');
        const baseUrl = 'https://azeneli.github.io/anrizeneli/';

        expect(browser.getCurrentUrl()).toBe(baseUrl);
    });


    afterAll(() => {
        browser.driver.close();
    });
});
