function sound()
{
	var id = 'sound-file' ;
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
}
