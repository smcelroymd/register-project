define(['jquery',
	    'app/model',
	    'command/addCnlEntryCommand'], function($, model, addCnlEntryCommand){         
	function execute(event) {				
		var objIndex = $.mdInArray(event.eventData, model.get('markedRegister.data'), "id");
		if(objIndex !== -1){
			model.set('markedRegister.data[' + objIndex + ']', event.eventData);
			
			var param = {
					eventData : {
						'ballotNumber' : event.eventData.ballotNumber,
						'electorNumber' : event.eventData.electorNumber,
					}
			};
			addCnlEntryCommand.execute(param);
		}
	};
	
	return {
		execute : execute
	};
});