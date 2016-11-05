define(['Ractive',
	    'app/model'], function (Ractive, model) {
	
	function show(view, oncomplete) {
		
		if (model.getRactive() != null) {
			model.getRactive().teardown();
		}
		
		model.setRactive(new Ractive({
			el : '#main-panel-content',
			template : view,
			complete : oncomplete,
			data : model.data
		}));
	}
	
	return {
		show : show
	};
});
