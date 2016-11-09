define(['jquery',
	    'text!view/correspondingNumberList.html',
	    'text!dialog/correspondingNumberListDialog.html',
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
		'datatables.net-buttons-bs'], function ($, correspondingNumberListView, correspondingNumberListDialog, viewResolver, model, eventHandler) {
	
	var lastBallotNumber = 0;
	var table = null;
	
	function onComplete() {
		table = $('#cnlTbl').DataTable({
			 lengthChange: false,
			 data : model.get('cnl.data'),	
			 select: {
				 style: 'multi'
			 },
			 buttons: [
				 {extend : 'selectAll',text : 'Select All'},
				 {extend : 'selectNone', text : 'Select None'},
				 {text: 'New', action: newAction},
				 {text: 'Edit', action: editAction},
				 {text: 'Delete', action: deleteAction}
			],			 
			columnDefs : [
				{'targets' : 0,'data' : 'ballotNumber','width' : "50%"},
				{'targets' : 1,'data' : 'electorNumber','width' : "50%"}
			]
		 });
		 
		table.buttons().container().appendTo( '#cnlTbl_wrapper .col-sm-6:eq(0)' );
		
		 model.getRactive().observe('cnl.data', function(newValue, oldValue, keypath) {
			 table.clear();
			 table.rows.add(newValue);
			 table.rows().invalidate().draw();
		 }, {'init':false});
	}

	
	function editAction(event, datatable, buttonClicked, buttonConfig ) {
		var model = $.extend({
			'update' : true
		}, datatable.row( { selected: true } ).data());		
		showCorrespondingNumberDialog(model)
	}
	
	function newAction(event, datatable, buttonClicked, buttonConfig ) {
		var model = {'update' : false, 'ballotNumber' : getNextBallotNumber(), 'electorNumber' : ''};
		showCorrespondingNumberDialog(model)		
	}
	
	function getNextBallotNumber() {
		/**
		 * cnl.lastBallotPaperNumber is updatd by addCnlEntryCommand
		 */
		var lastBallotNumber = model.get('cnl.lastBallotPaperNumber');	
		return (lastBallotNumber === '' ? lastBallotNumber : ++lastBallotNumber);
	}
	
	/**
	 * Show dialog
	 */
	function showCorrespondingNumberDialog(dialogModel) {		 
		 /**
		  * Create the view 
		  */
		var dialog = viewResolver.createDialog("#correspondingNumberListDialogContainer", correspondingNumberListDialog, dialogModel, function onComplete() {
			 
			 /**
			  * Register button listeners
			  */
			 $('#cnlSaveBtn').off('click').on('click', function() {
				 eventHandler.trigger({'type' : 'updateCnlEntryEvent', 'cnlObject' : dialogModel});
			 });
			 
			 $('#cnlAddBtn, #cnlAddAndCloseBtn').off('click').on('click', function (e) {
				 eventHandler.trigger({'type' : 'addCnlEntryEvent', 'cnlObject' : dialogModel});	
				 dialog.set('ballotNumber', getNextBallotNumber());	
				 dialog.set('electorNumber', '');	
				 $('#electorNumber').focus();
			 });
			 
			 /**
			  * Tear down the view once hidden
			  */
			 $('#correspondingNumberListDialog').on('hidden.bs.modal', function (e) {
				 dialog.teardown();
			 });

			 /**
			  * Show the view
			  */				 
			 $("#correspondingNumberListDialog").modal();									 
		 });	
//		
//		 model.getRactive().observe('cnl.lastBallotPaperNumber', function(newValue, oldValue, keypath) {
//			 dialog.set('ballotNumber', getNextBallotNumber());	
//			 dialog.set('electorNumber', '');	
//		 }, {'init':false});
	}
		
	function deleteAction(event, datatable, buttonClicked, buttonConfig ) {
		var objectsToDelete = datatable.rows( { selected: true } ).data();
		eventHandler.trigger({'type' : 'deleteCnlEntriesEvent', 'objectsToDelete' : objectsToDelete});
	}
	
	/**
	 * Initialisie module
	 * @returns
	 */
	function initialise() {
		viewResolver.show(correspondingNumberListView, onComplete);			
	}
	
	return {
		show : initialise
	};


});
