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
   	
	return {
		'data' : {
			'message' : '',
			'cnl' : {
				'data' : [
					{
						'ballotNumber'  : '1234',
						'electorNumber' : '4321'
					},
					{
						'ballotNumber'  : '5673',
						'electorNumber' : '3765'
					}
				],
				'ballotNumber' : '',
				'electorNumber' : ''
			}
		},
		'urls' : {
    		exampleControllerURL : APP_DATA.urls.baseUrl + 'test',
		},
		'setRactive' : setRactive,
		'getRactive' : getRactive,
		'set' : set
	};
	
});