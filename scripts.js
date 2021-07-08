$(document).ready(function(){
	$.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR", function(data) {
			$("test").append("BTC " + data.BTC)
			alert( "Data Loaded: " + data );
               //.append( "USD: " + data.time );
           }, "json" );  
	$("pop-up-settings").hide();
	$("#hamburger").click(function(){  
		console.log('click');
	});
	$("#slider0").click(function(){  
		console.log('click');
	});
	$(".hamburger-wrapper").click( function() {
		$(".hamburger").toggleClass("close");
		console.log('click');
	});
	$.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR", function(data) {
			$("test").append("BTC " + data.BTC);
			alert( "Data Loaded: " + data );
               //.append( "USD: " + data.time );
           }, "json" );  

	//	$(".pop-up-settings").fadeIn();
});
//https://min-api.cryptocompare.com/

