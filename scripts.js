$(document).ready(function () {
	// wire up DOM elements
	var DOM = {}
	DOM.$ethPriceBox = $("#box-price-eth-usd");
	DOM.$allPricesBox = $("#box-price-all-usd");
	DOM.$memeData = $("#box-price-meme")
	DOM.$hamburgerWrapper = $(".hamburger-wrapper");
	DOM.$hamburger = $(".hamburger");
	DOM.$hamburgerId = $("#hamburger");
	DOM.$firstSlider = $("#slider0");    // initialize logic
	updateUI();
	bindEvents(); async function updateUI() {
		try {
			var ethPrices = await getCryptoPricesByUrl('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR');
			var allPrices = await getCryptoPricesByUrl('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=7eb7356d9e00768b85fb67c9da901b296df7af690939b4d9f8f5679ee355c54a');
			var memeData = await getCryptoPricesByUrl('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=meme-token&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d');
			let memeTestObject = {}
			memeTestObject['1'] = 'value'
			console.log(memeTestObject[1]);
			console.log(memeData);
			console.log(allPrices);
			console.log(ethPrices);
			DOM.$ethPriceBox.text(ethPrices.USD);
			DOM.$allPricesBox.text(allPrices.DISPLAY.BTC.USD.CHANGEPCTDAY);
			DOM.$memeData.text(memeData[1].ath);
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

