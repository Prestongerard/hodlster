$(document).ready(function () {
	// wire up DOM elements
	var DOM = {}
	DOM.$ethPriceBox = $("#box-price-eth-usd");
	DOM.$allPricesBox = $("#box-price-all-usd");
	DOM.$hamburgerWrapper = $(".hamburger-wrapper");
	DOM.$hamburger = $(".hamburger");
	DOM.$hamburgerId = $("#hamburger");
	DOM.$firstSlider = $("#slider0");    // initialize logic
	updateUI();
	bindEvents(); async function updateUI() {
		try {
			var ethPrices = await getCryptoPricesByUrl('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR');
			var allPrices = await getCryptoPricesByUrl('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=7eb7356d9e00768b85fb67c9da901b296df7af690939b4d9f8f5679ee355c54a');
			console.log(allPrices);
			console.log(ethPrices);  
			DOM.$ethPriceBox.text(ethPrices.USD);
			DOM.$allPricesBox.text(allPrices.DISPLAY.BTC.USD.CHANGEPCTDAY);
		} catch (err) {
			console.log(err);
		}
	} function getCryptoPricesByUrl(url) {
		return $.get(url, function () {
		}, "json");
	}; function bindEvents() {
		DOM.$hamburgerWrapper.click(function () {
			DOM.$hamburger.toggleClass("close");
			console.log('click');
		}); DOM.$hamburgerId.click(function () {
			console.log('click');
		}); DOM.$firstSlider.click(function () {
			console.log('click');
		});
	}
});