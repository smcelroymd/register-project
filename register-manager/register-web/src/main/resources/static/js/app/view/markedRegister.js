define(['jquery',
		'text!view/markedRegister.html',
		'text!dialog/markedRegisterDialog.html',
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
		'datatables.net-buttons-bs'], function ($, view, markedRegisterDialog, viewResolver, model, eventHandler) {
	
	function onComplete() {
		
		var table = $('#markedRegisterTbl').DataTable({
			 lengthChange: false,
			 data : model.get('markedRegister.data'),	
			 select: {
				 style: 'single'
			 },
			 buttons: [
				 {text: 'Issue Ballot', action: editAction}
			],			 
			columnDefs : [
				{'targets' : 0, 'data' : 'name','width' : "20%"},
				{'targets' : 1, 'data' : 'address','width' : "60%"},
				{'targets' : 2, 'data' : 'electorNumber','width' : "10%"},
				{'targets' : 3, 'data' : 'ballotNumber','width' : "10%",
					"render" : function ( data, type, full, meta ) {
						return (data == null ? "Unassigned" : data);
					}
				}
			]
		 });
		
		table.buttons().container().appendTo( '#markedRegisterTbl_wrapper .col-sm-6:eq(0)' );
		
		 model.getRactive().observe('markedRegister.data', function(newValue, oldValue, keypath) {
			 table.clear();
			 table.rows.add(newValue);
			 table.rows().invalidate().draw();
		 }, {'init':false});
	}
	
	function editAction(event, datatable, buttonClicked, buttonConfig ) {		
		var selectedObject = datatable.row( { selected: true } ).data();
		if((selectedObject !== undefined) && (selectedObject.ballotNumber === null)){	
			var model = $.extend({
			}, datatable.row( { selected: true } ).data());
			model['ballotNumber'] = getNextBallotNumber();

			showMarkedRegsiterDialog(model);
		}
	}
	
	function getNextBallotNumber() {
		/**
		 * cnl.lastBallotPaperNumber is updatd by addCnlEntryCommand
		 */
		var lastBallotNumber = model.get('cnl.lastBallotPaperNumber');	
		return (lastBallotNumber === '' ? lastBallotNumber : ++lastBallotNumber);
	}
	
	function showMarkedRegsiterDialog(dialogModel) {	
		var dialog = viewResolver.createDialog("#markedRegisterDialogContainer", markedRegisterDialog, dialogModel, function onComplete() {
				
			/**
			 * Register button listeners
			 */
			$('#markedRegisterDialogSaveBtn').off('click').on('click', function() {
				eventHandler.trigger({'type' : 'issueBallotPaperEvent', 'eventData' : dialogModel});
			});			
			
			/**
			 * Tear down the view once hidden
			 */
			$('#markedRegisterDialog').on('hidden.bs.modal', function (e) {
				dialog.teardown();
			});
			/**
			* Show the view
			 */				 
			$("#markedRegisterDialog").modal();	
				
		});		
	}
	
	function show() {
		viewResolver.show(view, onComplete);			
	}
	
	return {
		show : show
	};
});
