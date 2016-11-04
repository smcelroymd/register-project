define(['jquery',
		'bootstrap',
		'util/router',
		'util/controller'], function ($) {
	
	(function initialise() {												
		
		/**
		 * Removes 'active' class from currently selected/active item on 
		 * side menubar and adds the 'active' class to the item that
		 * has just been clicked
		 * 
		 * The 'active' class makes the text green. 
		 */
		$('.sidenav .nav-pills li').on('click', function() {		  
			if($('a',this).attr('href') !== '#') {
				$('.sidenav ul.nav-pills li.active').removeClass('active');
				$(this).addClass('active');
			}
		});

		console.log('Application Initialised');
	})();
	
});