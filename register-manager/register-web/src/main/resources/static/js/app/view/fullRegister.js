define(['text!view/fullRegister.html',
		'util/viewResolver',
		'bootstrap',
		'datatables.net',
		'datatables.net-bs',
		'datatables.net-responsive',
		'datatables.net-responsive-bs'], function (view, viewResolver) {
	
	function onComplete() {
		 $('#fullRegisterTbl').DataTable();
	}
	
	function show() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : show
	};
});
