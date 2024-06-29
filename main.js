var btc = document.getElementById("bitcoin");
var eth = document.getElementById("etherium");
var dog = document.getElementById("dogecoin");

var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://pro-api.coingecko.com/api/v3/coins/list",
"method": "GET",
"headers": {}
}
$.ajax(settings).done(function (response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  dog.innerHTML = response.dogecoin.usd;
});