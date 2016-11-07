define(['jquery',
	    'util/eventHandler',
        'command/addCnlEntryCommand',
        'command/exampleCommand'], function($, eventHandler, addCnlEntryCommand, exampleCommand) {	
			(function initialise() {
				eventHandler.bind('exampleEvent', function() {
					exampleCommand.execute().fail(function(jqXHR, textStatus, errorThrown) {
						var errors = JSON.parse(jqXHR.responseText);
						alert('ajax call failed');
					});
				});
				
				eventHandler.bind('addCnlEntryEvent', function() {
					addCnlEntryCommand.execute();
				});
			})(); 
		}
);