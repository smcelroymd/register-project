define(['jquery',
	    'util/eventHandler',
        'command/updateCnlEntryCommand',
        'command/addCnlEntryCommand',
        'command/exampleCommand'], function($, eventHandler, updateCnlEntryCommand, addCnlEntryCommand, exampleCommand) {	
			(function initialise() {
				eventHandler.bind('exampleEvent', function() {
					exampleCommand.execute().fail(function(jqXHR, textStatus, errorThrown) {
						var errors = JSON.parse(jqXHR.responseText);
						alert('ajax call failed');
					});
				});
				
				eventHandler.bind('addCnlEntryEvent', function(event) {
					addCnlEntryCommand.execute(event);
				});

				eventHandler.bind('updateCnlEntryEvent', function(event) {
					updateCnlEntryCommand.execute(event);
				});
			})(); 
		}
);