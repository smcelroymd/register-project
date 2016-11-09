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
		var cnlObjec = $.extend({
			'update' : true
		}, datatable.row( { selected: true } ).data());		
		showCorrespondingNumberDialog(cnlObjec)
	}
	
	function newAction(event, datatable, buttonClicked, buttonConfig ) {
		var cnlObject = {'update' : false, 'ballotNumber' : getNextBallotNumber(), 'electorNumber' : ''};
		showCorrespondingNumberDialog(cnlObject)		
	}
	
	function getNextBallotNumber() {
		var lastBallotNumber = 0;
		var cnlEntries = model.get('cnl.data');
		if(cnlEntries.length > 0) {
			lastBallotNumber = cnlEntries[cnlEntries.length-1].ballotNumber;
		}		
		return (lastBallotNumber > 0 ? ++lastBallotNumber : '');
	}
	
	/**
	 * Show dialog
	 */
	function showCorrespondingNumberDialog(cnlObject) {		 
		 /**
		  * Create the view 
		  */
		var dialog = viewResolver.createDialog("#correspondingNumberListDialogContainer", correspondingNumberListDialog, cnlObject, function onComplete() {
			 
			 /**
			  * Register button listeners
			  */
			 $('#saveBtn').off('click').on('click', function() {
				 eventHandler.trigger({'type' : 'updateCnlEntryEvent', 'cnlObject' : cnlObject});
			 });
			 
			 $('#addBtn, #addAndCloseBtn').off('click').on('click', function (e) {
				 eventHandler.trigger({'type' : 'addCnlEntryEvent', 'cnlObject' : cnlObject});	
				 dialog.set('ballotNumber', ++cnlObject.ballotNumber);	
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
	}
		
	function deleteAction(event, datatable, buttonClicked, buttonConfig ) {
		alert('delete');
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
