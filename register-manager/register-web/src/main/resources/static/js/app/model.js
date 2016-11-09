define([], function(){

	var self = this;
	var ractive = null;
	
   	function setRactive(ractive) {
   		self.ractive = ractive;
   	}
   	
   	function getRactive() {
   		return self.ractive;
   	} 
	
   	function set(keypath, value) {
   		self.ractive.set(keypath, value);
   	}

   	function get(keypath) {
   		return self.ractive.get(keypath);
   	}

	return {
		'data' : {
			'message' : '',
			'cnl' : {
				'data' : [					
				],
				'ballotPaper' : 1234
			}
		},
		'urls' : {
    		exampleControllerURL : APP_DATA.urls.baseUrl + 'test',
		},
		'setRactive' : setRactive,
		'getRactive' : getRactive,
		'set' : set,
		'get' : get
	};
	
});