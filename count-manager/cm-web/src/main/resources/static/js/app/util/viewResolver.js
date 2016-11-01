define(['Ractive',
	    'app/model'], function (Ractive, model) {
	
	function show(view) {
		
		if (model.getRactive() != null) {
			model.getRactive().teardown();
		}
		
		model.setRactive(new Ractive({
			el : '#main-panel-content',
			template : view,
			data : model
		}));
	}
	
	return {
		show : show
	};
});
