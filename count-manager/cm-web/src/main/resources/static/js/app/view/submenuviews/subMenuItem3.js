define(['text!view/submenuviews/subMenuItem3.html',
		'util/viewResolver'], function (view, viewResolver) {
	
	function show() {
		viewResolver.show(view);			
	}
	
	return {
		show : show
	};
});
