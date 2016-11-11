define(['jquery',
		'text!view/fullRegister.html',
		'text!dialog/fullRegisterDialog.html',
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
		'datatables.net-buttons-bs'], function ($, view, fullRegisterDialog, viewResolver, model, eventHandler) {
	
	function onComplete() {
		var table = $('#fullRegisterTbl').DataTable({
			 lengthChange: false,
			 data : model.get('fullRegister.data'),	
			 select: {
				 style: 'single'
			 },
			 buttons: [
				 {text: 'Edit', action: editAction}
			],			 
			columnDefs : [
				{'targets' : 0, 'data' : 'name','width' : "10%"},
				{'targets' : 1, 'data' : 'address','width' : "30%"},
				{'targets' : 2, 'data' : 'pollingStation','width' : "30%"},
				{'targets' : 3, 'data' : 'registered','width' : "10%",
					"render" : function ( data, type, full, meta ) {
						return (data === true ? "Yes" : "No");
					}
				},
				{'targets' : 4, 'data' : 'absentVoter','width' : "10%",
					"render" : function ( data, type, full, meta ) {
						return (data === true ? "Yes" : "No");
					}
				},
				{'targets' : 5, 'data' : 'franchise','width' : "10%"},
				{'targets' : 6, 'data' : 'exclusionReason','width' : "10%"}
			]
		 });
		
		table.buttons().container().appendTo( '#fullRegisterTbl_wrapper .col-sm-6:eq(0)' );
		
		 model.getRactive().observe('fullRegister.data', function(newValue, oldValue, keypath) {
			 table.clear();
			 table.rows.add(newValue);
			 table.rows().invalidate().draw();
		 }, {'init':false});		
	}

	function editAction(event, datatable, buttonClicked, buttonConfig ) {
		var selectedObject = datatable.row( { selected: true } ).data();
		if(selectedObject !== undefined){				
			var model = $.extend({
				formatBoolean : function ( val ) {
					return (val == true ? "Yes" : "No");
				}
			}, selectedObject);				
			showFullRegsiterDialog(model);
		}		
	}
	
	function showFullRegsiterDialog(dialogModel) {	
		var dialog = viewResolver.createDialog("#fullRegisterDialogContainer", fullRegisterDialog, dialogModel, function onComplete() {
				
			/**
			 * Register button listeners
			 */
			$('#fullRegisterDialogSaveBtn').off('click').on('click', function() {
				eventHandler.trigger({'type' : 'updateFullRegistryEntry', 'eventData' : dialogModel});
			});			
			
			/**
			 * Tear down the view once hidden
			 */
			$('#fullRegisterDialog').on('hidden.bs.modal', function (e) {
				dialog.teardown();
			});
			/**
			* Show the view
			 */				 
			$("#fullRegisterDialog").modal();	
				
		});		
	}
	
	function show() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : show
	};
});
