var Website = {
	
	init: function(){
		this.foo();
	},
	
	foo: function(){
		alert("test");
	}
	
}

$(document).ready(function() {
	
	Website.init();
	
});
