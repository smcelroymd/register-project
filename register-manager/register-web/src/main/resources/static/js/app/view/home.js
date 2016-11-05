define(['text!view/home.html',
		'util/viewResolver',
		'util/eventHandler'], function (view, viewResolver, eventHandler) {
	
	function onComplete() {
		/**
		 * Add functionality
		 */
		$('#exampleBtn').off('click').on('click', function() {
			eventHandler.trigger({
				'type' : 'exampleEvent'
			});
		});			
	}

	
	function initialise() {				
		/**
		 * Show the view
		 */
		viewResolver.show(view, onComplete);	
	}
		
	return {
		show : initialise
	};
});
