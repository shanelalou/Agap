$(document).ready(function(){
$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=14.8292&lon=120.2828&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
var id = result.weather[0].id;
var description = result.weather[0].description;
var icon = result.weather[0].icon;
var temp = result.main.temp;
var pressure = result.main.pressure;
var humidity = result.main.humidity;
var wind = result.wind.speed;
var sunrise = result.sys.sunrise;
var sunset = result.sys.sunset;
var temp_min = result.main.temp_min;
var temp_max = result.main.temp_max;
var name = 	result.name;
var lon = 	result.coord.lon;

var dateSunrise = new Date(sunrise*1000);
var hoursSunrise = dateSunrise.getHours();
var minutesSunrise = "0" + dateSunrise.getMinutes();
var formattedTimeSunrise = hoursSunrise + ':' + minutesSunrise.substr(-2);

var dateSunset = new Date(sunset*1000);
var hoursSunset = dateSunset.getHours();
var minutesSunset = "0" + dateSunset.getMinutes();
var formattedTimeSunset = hoursSunset + ':' + minutesSunset.substr(-2);

document.getElementById('show').innerHTML  = 
 "<table data-role='table' data-mode='' class='ui-responsive' id='myTable'><tbody><tr><td id='city'><h2>"+ name +" </h2></td><td width='50%' rowspan='2'><img width='100%' src='http://openweathermap.org/img/w/"+ icon  + ".png'></td></tr> <tr><td id='city'><h1>" + temp +" º</h1></td></tr> </tbody></table><table data-role='table' data-mode='' class='ui-responsive' id='myTable'><tbody><tr><td>Wind </td><td>"+wind +"</td></tr> <tr><td>Cloudiness </td><td>"+description+" </td></tr> <tr><td>Pressure </td><td>"+pressure+"</td></tr>  <tr><td>Humidity </td><td>"+humidity+"</td></tr> <tr><td>Sunrise </td><td>"+formattedTimeSunrise+"</td></tr><tr><td>Sunset </td><td>"+formattedTimeSunset+"</td></tr> </tbody></table>";
	

 });

 $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=14.8292&lon=120.2828&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
//var test = result.city.name;
var test = result.city[5];
//alert(test);
for (var i = 0; i < test.length; i++) {
 // alert(test[i]);
    //Do something
}

 });
			
			
			
var keycities = ['Cabanatuan','Calapan'];
var keycitiesLat = ['15.486988','15.486988'];
var keycitiesLon = [' 120.969349','120.969349'];

for (var i = 0; i < keycities.length; i++) {
 //   alert(keycities[i] + keycitiesLat[i] +keycitiesLon[i] );
    //Do something
}
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=15.486988&lon=120.969349&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
		// var icon = result.weather[0].icon;
		// var temp_min = result.main.temp_min;
		// var temp_max = result.main.temp_max;
		// document.getElementById('showCabanatuan').innerHTML = "<img src='http://openweathermap.org/img/w/"+ icon  + ".png'>" +temp_min+"º" +temp_max+"º";
	});
		
			
});