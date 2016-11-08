define(['app/model'], function(model, ajaxService){
	function execute(event) {
		var ballotNumber = model.get('cnl.ballotNumber');
		var electorNumber = model.get('cnl.electorNumber');
		model.getRactive().push('cnl.data',{'ballotNumber' : ballotNumber, 'electorNumber' : electorNumber});
		model.set({'cnl.ballotNumber' : ++ballotNumber, 'cnl.electorNumber' : ''});
	};
	
	return {
		execute : execute
	};
});