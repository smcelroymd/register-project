define(['jquery'], function($) {	

	function bind(eventType, handler) {
		$("body").bind(eventType, handler);
	}
	
	function trigger(event) {
		$('body').trigger(event);
	}

	return {
		bind : bind,
		trigger : trigger
	};
});