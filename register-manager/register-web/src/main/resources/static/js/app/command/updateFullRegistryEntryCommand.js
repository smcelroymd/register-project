define(['jquery','app/model'], function($, model){
	function execute(event) {					
		var objIndex = $.mdInArray(event.eventData, model.get('fullRegister.data'), "id");
		if(objIndex !== -1){
			model.set('fullRegister.data[' + objIndex + ']', event.eventData);
		}
	};
	
	return {
		execute : execute
	};
});