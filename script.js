var mymap = L.map('map').setView([-1.09, 37.01], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-1.09, 37.01]).addTo(mymap);
marker.bindPopup("<b>JKUAT!!!</b><br>YOUR DREAM UNIVERSITY.").openPopup();