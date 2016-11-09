define(['jquery','app/model'], function($, model){
	function execute(event) {				
		var ballotNumberExpression = 'cnl.data[' + event.cnlObject.index + '].ballotNumber';
		var electorNumberExpression = 'cnl.data[' + event.cnlObject.index + '].electorNumber';
		model.set(ballotNumberExpression, event.cnlObject.ballotNumber);
		model.set(electorNumberExpression, event.cnlObject.electorNumber);
	};
	
	return {
		execute : execute
	};
});