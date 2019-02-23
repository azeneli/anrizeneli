xdescribe('Site online functionality', function() {

    it('Should ping the site', () => {
        browser.get('https://azeneli.github.io/anrizeneli/');
        const baseUrl = 'https://azeneli.github.io/anrizeneli/';

        expect(browser.getCurrentUrl()).toBe(baseUrl);
    });
});

xdescribe('contact functionality', function(){
	it('Should test that email address is there', () => {
		browser.get('https://azeneli.github.io/anrizeneli/');
		const emailAddress = $$('a#emailAddress-e2eTests');
		browser.sleep(1000);

		expect(emailAddress.isPresent()).toBeFalsy();
	});

	it('Should test that the profile images exists', () => {
		const profileImage = $$('img#profile-img');
		
		browser.sleep(1000);
		expect(profileImage.isPresent()).toBeFalsy();
	});

	afterAll(() => {
        browser.driver.close();
    });
});


describe('social media links', function(){

	it('Should Test that LinkedIn social media icon exists', async () => {
		browser.get('https://azeneli.github.io/anrizeneli/');
		browser.sleep(3000);
		//const linkedIn = $('#linkedin-icon-1');
		//browser.sleep(3000);

		expect(element(by.id('linkedin-icon-1')).isPresent()).toBe(true);
		// first step - go to the site
		// second step - click on element
		// third step - takes you to link after element clic
	});

});