define(['jquery',
	    'text!view/correspondingNumberList.html',
		'util/viewResolver',
		'app/model',
		'util/eventHandler',
		'bootstrap',		
		'datatables.net',
		'datatables.net-bs',
		'datatables.net-responsive',
		'datatables.net-responsive-bs',
		'datatables.net-select',
		'datatables.net-buttons',
		'datatables.net-buttons-bs'], function ($, view, viewResolver, model, eventHandler) {
	
	function onComplete() {
		var table = $('#cnlTbl').DataTable({
			 lengthChange: false,
			 data : model.get('cnl.data'),	
			 select: {
				 style: 'multi'
			 },
			 buttons: [
				 {
					extend : 'selectAll',
					text : 'Select All'			
				 },
				 {
					 extend : 'selectNone',
					 text : 'Select None',
					 enabled : true
				 },
				 {
					 text: 'New',
					 action: function ( e, dt, node, config ) {
						 $("#newEntryModal").modal()
					 }
				 },
				 {
					 text: 'Edit',
					 action: function ( e, dt, node, config ) {
						 alert('edit');
					 }
				 },
				 {
					 text: 'Delete',
					 action: function ( e, dt, node, config ) {
						 alert('delete');
					 }
				 }],			 
				 columnDefs : [
				 {
					 'targets' : 0,
					 'data' : 'ballotNumber',
					 'width' : "50%"
				 },
				 {
					 'targets' : 1,
					 'data' : 'electorNumber',
					 'width' : "50%"
				 }
			 ]
		 });
		 
		table.buttons().container().appendTo( '#cnlTbl_wrapper .col-sm-6:eq(0)' );
		
		 model.getRactive().observe('cnl.data', function(newValue, oldValue, keypath) {
			 table.clear();
			 table.rows.add(newValue);
			 table.rows().invalidate().draw();
		 }, {'init':false});
		 
		 $('#newEntryModal').off('click').on('click','#addBtn, #addAndCloseBtn', function (e) {
			 eventHandler.trigger({'type' : 'addCnlEntryEvent'});
			 $('#electorNumber').focus();
		 });
	}
	
	function initialise() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : initialise
	};
});
