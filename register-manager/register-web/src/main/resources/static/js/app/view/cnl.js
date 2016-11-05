define(['text!view/cnl.html',
		'util/viewResolver',
		'bootstrap',
		'datatables.net',
		'datatables.net-bs',
		'datatables.net-responsive',
		'datatables.net-responsive-bs'], function (view, viewResolver) {
	
	function onComplete() {
		 $('#cnlTbl').DataTable();
	}

	function initialise() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : initialise
	};
});
