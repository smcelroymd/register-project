define(['jquery','app/model'], function($, model){
	function execute(event) {			
		
		var objIndex = 0;
		
		$.each(model.get('cnl.data'), function(index, object) {
			if(event.cnlObject.id === object.id) {
				objIndex = index;					
				return false;
			}
		})
		
		
		var ballotNumberExpression = 'cnl.data[' + objIndex + '].ballotNumber';
		var electorNumberExpression = 'cnl.data[' + objIndex + '].electorNumber';
		model.set(ballotNumberExpression, event.cnlObject.ballotNumber);
		model.set(electorNumberExpression, event.cnlObject.electorNumber);
	};
	
	return {
		execute : execute
	};
});