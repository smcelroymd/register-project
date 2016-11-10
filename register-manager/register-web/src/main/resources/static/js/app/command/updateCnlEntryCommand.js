define(['jquery','app/model'], function($, model){
	function execute(event) {					
		var objIndex = $.mdInArray(event.eventData, model.get('cnl.data'), "id");
		if(objIndex !== -1){
			model.set('cnl.data[' + objIndex + ']', event.eventData);
		}
	};
	
	return {
		execute : execute
	};
});