function sound()
{
	var id = 'sound-file' ;
	var id2 = 'sound-file1' ;
	if( typeof( document.getElementById( id,id2 ).currentTime ) != 'undefined' )
	{
		document.getElementById( id,id2 ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
	document.getElementById( id2 ).play() ;
}
