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
			 select : true,
			 buttons: [
			        {
			            text: 'New',
			            action: function ( e, dt, node, config ) {
			            	alert('new');
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
			        }
			    ],			 
			 columnDefs : [
				 {
					 'targets' : 0,
					 'data' : 'ballotNumber'						 
				 },
				 {
					 'targets' : 1,
					 'data' : 'electorNumber'
				 }
			 ]
		 });
		 
		table.buttons().container().appendTo( '#cnlTbl_wrapper .col-sm-6:eq(0)' );
		
		 model.getRactive().observe('cnl.data', function(newValue, oldValue, keypath) {
			 table.clear();
			 table.rows.add(newValue);
			 table.rows().invalidate().draw();
		 }, {'init':false});
		 
		 $('#addCnlBtn').off('click').on('click', function() {			 
			 eventHandler.trigger({'type' : 'addCnlEntryEvent'});
			 $('#electorNumber').focus();
		 });
	}

	//Example using select boxes
//	function onComplete() {
//		var table = $('#cnlTbl').DataTable({
//			 data : model.get('cnl.data'),			 
//			 columnDefs : [
//				 {
//		            'orderable': false,
//		            'className': 'select-checkbox',
//		            'targets':   0,
//		            'defaultContent': "",
//		            "width": "10px"
//				 },
//				 {
//					 'targets' : 1,
//					 'data' : 'ballotNumber'						 
//				 },
//				 {
//					 'targets' : 2,
//					 'data' : 'electorNumber'
//				 }
//			 ],
//			 select: {
//				 style:    'os',
//		         selector: 'td:first-child'
//			 },
//		     order: [[ 1, 'asc' ]]
//		 });
//		 
//		 model.getRactive().observe('cnl.data', function(newValue, oldValue, keypath) {
//			 table.clear();
//			 table.rows.add(newValue);
//			 table.rows().invalidate().draw();
//			 //table.draw();
//		 }, {'init':false});
//		 
//		 $('#addCnlBtn').off('click').on('click', function() {			 
//			 eventHandler.trigger({'type' : 'addCnlEntryEvent'});
//			 $('#electorNumber').focus();
//		 });
//	}
//	
	
	function initialise() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : initialise
	};
});
