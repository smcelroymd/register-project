define(['app/model'], function(model){
	function execute(event) {
		var newObjectArray = $.grep(model.get('cnl.data'), function(objInModel, index) {
			
			var result = true;
			
			$.each(event.objectsToDelete, function(index, objectToDelete) {
				if(objectToDelete.id === objInModel.id) {
					result = false;					
					/**
					 * Break out of this loop;
					 */
					return false;
				}
			})
			
			return result;
		});
		
		model.set('cnl.data', newObjectArray);
	};
	
	return {
		execute : execute
	};
});