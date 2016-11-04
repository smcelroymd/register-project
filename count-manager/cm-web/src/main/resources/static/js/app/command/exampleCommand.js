define(['app/model',
        'service/ajaxService'], function(model, ajaxService){
	function execute(event) {	
		return ajaxService.getJSON(model.urls.exampleControllerURL).done(function(data){
			model.set('message', data.message);
		});
	};
	
	return {
		execute : execute
	};
});