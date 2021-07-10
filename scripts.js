<<<<<<< HEAD
$(document).ready(function () {
	var DOM = {}
	DOM.pullTest = $("#box-price-eth-usd");
	DOM.pullTest2 = $("#box-price-all-usd");

	function getCrytoPrices(url) {                // Function to get all current trading info 
		return $.get(url, function () {
		}, "json");
	};

	async function updateUI() {               

		try {
			var allPrices = await getCrytoPrices('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=7eb7356d9e00768b85fb67c9da901b296df7af690939b4d9f8f5679ee355c54a');
			console.log(allPrices.BTC);
			console.log(allPrices.USD);
			console.log(allPrices.EUR);
			DOM.pullTest2.text(allPrices.USD);
		} catch (err) {
			console.log(err);
		}
	}

/* 	function getEthPrices(url) {                // Function for grab Eth Price (BTC, USD, EUR)
		return $.get(url, function () {
		}, "json");
	};

	async function updateUI() {

		try {
			var prices = await getEthPrices('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR');
			console.log(prices.BTC);
			console.log(prices.USD);
			console.log(prices.EUR);
			DOM.pullTest.text(prices.USD);
		} catch (err) {
			console.log(err);
		}
	} */

	updateUI();   // TO DO: wrap updateUI() in a set interval function

	// Original GET Call below	

	/*$.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR", function(data) {
			$("test").append("BTC " + data.BTC)
			alert( "Data Loaded: " + data );
               //.append( "USD: " + data.time );
		   }, "json" );  
	$("#pull-test").text(responseData); */

	//  source: https://min-api.cryptocompare.com/

	$("pop-up-settings").hide();
	//	$(".pop-up-settings").fadeIn();

	$(".hamburger-wrapper").click(function () {      //Hamburger Menu Icon 
		$(".hamburger").toggleClass("close");
		console.log('click');
	});
	$("#hamburger").click(function () {
		console.log('click');
	});

	$("#slider0").click(function () {                  //Navbar tools
		console.log('click');
	});
});

=======
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
>>>>>>> 64daa9f4e066065532ef57680815e9d1869234b4

