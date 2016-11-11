define(['jquery',
	    'util/eventHandler',
        'command/updateCnlEntryCommand',
        'command/addCnlEntryCommand',
        'command/deleteCnlEntriesCommand',
        'command/issueBallotPaperCommand',
        'command/updateFullRegistryEntryCommand',
        'command/exampleCommand'], function($, eventHandler, 
        		                               updateCnlEntryCommand, 
        		                               addCnlEntryCommand, 
        		                               deleteCnlEntriesCommand, 
        		                               issueBallotPaperCommand,
        		                               updateFullRegistryEntryCommand,
        		                               exampleCommand) {	
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
				
				eventHandler.bind('deleteCnlEntriesEvent', function(event) {
					deleteCnlEntriesCommand.execute(event);
				});
				
				eventHandler.bind('issueBallotPaperEvent', function(event) {
					issueBallotPaperCommand.execute(event);
				})

				eventHandler.bind('updateFullRegistryEntry', function(event) {
					updateFullRegistryEntryCommand.execute(event);
				})
			})(); 
		}
);