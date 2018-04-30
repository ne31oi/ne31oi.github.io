function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		div.className = 'marker';
		
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.width = '31px';
		div.style.height = '46px';
		div.style.background = 'url(img/map-marker-font-awesome.png)';
		
			
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};

function initialize() {

	var myLatlng = new google.maps.LatLng(47.035336,28.772298);
	var mapOptions = {
		zoom: 18,
		center: myLatlng,
		disableDefaultUI: true
	}
	
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	overlay = new CustomMarker(
		myLatlng, 
		map,
		{
			marker_id: '123'
		}
	);

	var map = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);

	overlay = new CustomMarker(
		myLatlng, 
		map,
		{
			marker_id: '123'
		}
	);

}

google.maps.event.addDomListener(window, 'load', initialize);