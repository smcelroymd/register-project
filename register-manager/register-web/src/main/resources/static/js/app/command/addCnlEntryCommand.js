define(['app/model'], function(model, ajaxService){
	function execute(event) {
		/**
		 * We have to create a new data object 
		 * every time because the add dilaog 
		 * can add multiple objects
		 */
		var data = $.extend({
			"id" : new Date().getUTCMilliseconds()
		}, event.eventData);	
		
		model.getRactive().push('cnl.data',data);
		model.set('cnl.lastBallotPaperNumber', event.eventData.ballotNumber);
	};
	
	return {
		execute : execute
	};
});