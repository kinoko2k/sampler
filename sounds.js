function sound()
{
	var id = 'sound-file' ;
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
}
(function (window, $) {
	'use strict';
  
	$.fn.useSound = function (_event, _id) {
	  var se = $(_id);
	  this.on(_event, function(){
		se[0].currentTime = 0;
		se[0].play();
	  });
	  return this;
	};
  
  })(this, this.jQuery);
  
  $('.btn a').useSound('mousedown touchstart', '#sound');