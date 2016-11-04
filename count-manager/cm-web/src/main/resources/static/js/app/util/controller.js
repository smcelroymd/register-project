define(['jquery',
	    'util/eventHandler',
        'command/exampleCommand'], function($, eventHandler, exampleCommand) {	
			(function initialise() {
				eventHandler.bind('exampleEvent', function() {
					exampleCommand.execute().fail(function(jqXHR, textStatus, errorThrown) {
						var errors = JSON.parse(jqXHR.responseText);
						alert('ajax call failed');
					});
				});				
			})(); 
		}
);