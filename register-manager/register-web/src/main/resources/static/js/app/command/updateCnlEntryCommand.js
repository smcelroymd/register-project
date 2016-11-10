define(['jquery','app/model'], function($, model){
	function execute(event) {					
		var objIndex = $.mdInArray(event.cnlObject, model.get('cnl.data'), "id");
		if(objIndex !== -1){
			var ballotNumberExpression = 'cnl.data[' + objIndex + '].ballotNumber';
			var electorNumberExpression = 'cnl.data[' + objIndex + '].electorNumber';
			model.set(ballotNumberExpression, event.cnlObject.ballotNumber);
			model.set(electorNumberExpression, event.cnlObject.electorNumber);			
		}
	};
	
	return {
		execute : execute
	};
});