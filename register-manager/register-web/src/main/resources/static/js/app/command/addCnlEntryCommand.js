define(['app/model'], function(model, ajaxService){
	function execute(event) {
		var index = ractive.get('cnl.data').length		
		model.getRactive().push('cnl.data',{'id': new Date().getUTCMilliseconds(), 'ballotNumber' : event.cnlObject.ballotNumber, 'electorNumber' : event.cnlObject.electorNumber});
		model.set('cnl.lastBallotPaperNumber', event.cnlObject.ballotNumber);
	};
	
	return {
		execute : execute
	};
});