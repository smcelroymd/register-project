define(['text!view/cnl.html',
		'util/viewResolver',
		'app/model',
		'bootstrap',		
		'datatables.net',
		'datatables.net-bs',
		'datatables.net-responsive',
		'datatables.net-responsive-bs'], function (view, viewResolver, model) {
	
	function onComplete() {
		 var table = $('#cnlTbl').DataTable({
			 data : model.data.cnl.data,
			 columns : [
				 {data : 'ballotNumber'},
				 {data : 'electorNumber'}
			 ]
		 });
		 
		 $('#addCnlBtn').off('click').on('click', function() {
			 model.data.cnl.data.push({'ballotNumber' : model.data.cnl.ballotNumber,'electorNumber' : model.data.cnl.electorNumber});		 
			 table.clear();
			 table.rows.add(model.data.cnl.data);
			 table.draw();
			 model.set('cnl.ballotNumber','');
			 model.set('cnl.electorNumber','');
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
