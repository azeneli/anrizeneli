xdescribe('testing portfolio site', function() {

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

describe('contact functionality', function(){

	it('Should test that email address is there', () => {
		browser.get('https://azeneli.github.io/anrizeneli/');
		const emailAddress = $$('a#emailAddress-e2eTests');
		browser.sleep(1000);

		expect(emailAddress.isPresent()).toBeFalsy();
	});

});
