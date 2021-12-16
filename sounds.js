function sound()
{
	var id = 'sound-file' ;
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;

	var id2 = 'sound-file1' ;
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id2 ).play() ;
}
