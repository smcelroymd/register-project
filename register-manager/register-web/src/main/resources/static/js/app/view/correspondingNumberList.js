define(['text!view/correspondingNumberList.html',
		'util/viewResolver',
		'app/model',
		'util/eventHandler',
		'bootstrap',		
		'datatables.net',
		'datatables.net-bs',
		'datatables.net-responsive',
		'datatables.net-responsive-bs'], function (view, viewResolver, model, eventHandler) {
	
	function onComplete() {
		var table = $('#cnlTbl').DataTable({
			 data : model.get('cnl.data'),
			 columns : [
				 {data : 'ballotNumber'},
				 {data : 'electorNumber'}
			 ]
		 });
		 
		 model.getRactive().observe('cnl.data', function(newValue, oldValue, keypath) {
			 table.clear();
			 table.rows.add(newValue);
			 table.draw();
		 }, {'init':false});
		 
		 $('#addCnlBtn').off('click').on('click', function() {			 
			 eventHandler.trigger({'type' : 'addCnlEntryEvent'});
			 $('#ballotNumber').focus();
		 });
	}

	function initialise() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : initialise
	};
});
