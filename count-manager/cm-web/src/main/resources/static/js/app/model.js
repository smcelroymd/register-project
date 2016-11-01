define([], function(){

	var ractive = null;
	
   	function setRactive(ractive) {
   		self.ractive = ractive;
   	}
   	
   	function getRactive() {
   		return self.ractive;
   	} 
	
	return {			
		setRactive : setRactive,
		getRactive : getRactive
	};
	
});