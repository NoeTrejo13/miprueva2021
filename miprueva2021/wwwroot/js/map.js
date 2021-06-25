function findMe() {
	var output = document.getElementById('map');

	// Verificar si soporta geolocalizacion
	if (navigator.geolocation) {
		let map;

		var latitude = posicion.coords.latitude;
		var longitude = posicion.coords.longitude;

		map = new google.maps.Map(document.getElementById("map"), {
			center: { lat: latitude, lng: longitude },
			zoom: 8,
		});
		
	} else {
		output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
	}

	function error() {
		output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

	}
}