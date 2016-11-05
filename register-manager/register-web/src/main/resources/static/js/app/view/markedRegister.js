define(['text!view/markedRegister.html',
		'util/viewResolver',
		'bootstrap',
		'datatables.net',
		'datatables.net-bs',
		'datatables.net-responsive',
		'datatables.net-responsive-bs'], function (view, viewResolver) {
	
	function onComplete() {
		 $('#markedRegisterTbl').DataTable();
	}
	
	function show() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : show
	};
});
