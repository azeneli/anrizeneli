exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/pingBage-spec.js'],

  onPrepare: function(){
  	// Auto-Pilot is non-angular app
    browser.ignoreSynchronization = true;

    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(
        new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            colors: {
    			success: 'green',
    			failure: 'red',
    			pending: 'yellow'
  			},	
      		prefixes: {
        		success: '✓ ',
    			failure: '✗ ',
    			pending: '* '
    		}
        })
    );

  }, 
  jasmineNodeOpts: {
   print: function() {}
  }
};
