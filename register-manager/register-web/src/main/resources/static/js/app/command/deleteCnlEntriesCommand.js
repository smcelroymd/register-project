define(['app/model'], function(model){
	function execute(event) {		
		var newObjectArray = $.mdRemove(model.get('cnl.data'), event.eventData, "id");
		model.set('cnl.data', newObjectArray);
	};
	
	return {
		execute : execute
	};
});