define([], function() {

	function ajax(url, data, requestType) {		
		return $.ajax({
			'url' : url,
			'type' : requestType,
			'cache' : false,
			'contentType': "application/json",
			'headers' : {
				"Cache-Control" : "no-cache,no-store,must-revalidate",
				"Pragma" : "no-cache",
				"Expires" : "-1",
				"X-Content-Type-Options" : "NOSNIFF",
				"X-XSS-Protection" : "1",
				"X-Frame-Options" : "SAMEORIGIN",
				"Accept": "image/*, application/json"
			},
			'data' : data
//			'beforeSend' : function(xhr) {
//				var token = $("meta[name='_csrf']").attr("content");
//				var header = $("meta[name='_csrf_header']").attr("content");
//				xhr.setRequestHeader(header, token);
//			}
		});				
	}
	
	function postMultipart(url, formData) {			
        return $.ajax({
        	'url': url,
        	'type': 'POST',
        	'data': formData,
        	'processData': false,
        	'contentType': false,
			'headers' : {
				"Cache-Control" : "no-cache,no-store,must-revalidate",
				"Pragma" : "no-cache",
				"Expires" : "-1",
				"X-Content-Type-Options" : "NOSNIFF",
				"X-XSS-Protection" : "1",
				"X-Frame-Options" : "SAMEORIGIN"
			},        	
  			'beforeSend' : function(xhr) {
				var token = $("meta[name='_csrf']").attr("content");
				var header = $("meta[name='_csrf_header']").attr("content");
				xhr.setRequestHeader(header, token);
			}
	});
	}
	
	return {
		postJSON : function(url, data) {
			return ajax(url, JSON.stringify(data), 'POST');
		},

		getJSON : function(url, data) {
			return ajax(url, data, 'GET');
		},
		
		postMultipart : function(url, formData) {
			return postMultipart(url, formData);
		}
	};
});