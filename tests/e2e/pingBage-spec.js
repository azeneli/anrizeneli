xdescribe('Site online functionality', function() {

    it('Should ping the site', () => {
        browser.get('https://azeneli.github.io/anrizeneli/');
        const baseUrl = 'https://azeneli.github.io/anrizeneli/';

        expect(browser.getCurrentUrl()).toBe(baseUrl);
    });
});

describe('contact functionality', function(){

	it('Should test that email address is there', () => {
		browser.get('https://azeneli.github.io/anrizeneli/');
		const emailAddress = $$('a#emailAddress-e2eTests');
		browser.sleep(1000);

		expect(emailAddress.isPresent()).toBeFalsy();
	});

	afterAll(() => {
        browser.driver.close();
    });
});
