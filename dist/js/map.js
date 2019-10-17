/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

jQuery(document).ready((function($) {
	initialize();

	$('.map-address').click((function() {
		let thisId = $(this).attr('id');

		$('.address-details').removeClass('active');

		$('.address-details').each((function() {
			if ($(this).attr('data-address') == thisId) {
				$(this).addClass('active');
			}
		}));	

	}));
}));

let map;

function initialize() {
	let losAngeles = new google.maps.LatLng(34.052235, -118.243683);
	let newYork = new google.maps.LatLng(40.712776, -74.005974);
	let boston = new google.maps.LatLng(42.360081, -71.058884);
	let detroit = new google.maps.LatLng(42.331429, -83.045753);

	let markerLosAngeles = new google.maps.Marker({
		position: losAngeles,
		icon: '/svg/icon-marker.svg'
	});

	let markerNewYork = new google.maps.Marker({
		position: newYork,
		icon: '/svg/icon-marker.svg'
	});

	let markerBoston = new google.maps.Marker({
		position: boston,
		icon: '/svg/icon-marker.svg'
	});

	let markerDetroit = new google.maps.Marker({
		position: detroit,
		icon: '/svg/icon-marker.svg'
	});

	let mapProp = {
	  	center: newYork,
	  	zoom: 14,
	  	disableDefaultUI: true,
	  	styles: [
	  	    {
	  	        "featureType": "administrative",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "visibility": "simplified"
	  	            },
	  	            {
	  	                "color": "#515151"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "landscape",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "color": "#f2f2f2"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "landscape",
	  	        "elementType": "labels.text",
	  	        "stylers": [
	  	            {
	  	                "visibility": "on"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "landscape.man_made",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "visibility": "on"
	  	            },
	  	            {
	  	                "color": "#ddf8da"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "landscape.natural",
	  	        "elementType": "geometry",
	  	        "stylers": [
	  	            {
	  	                "visibility": "simplified"
	  	            },
	  	            {
	  	                "color": "#ddf8da"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "poi",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "visibility": "simplified"
	  	            },
	  	            {
	  	                "color": "#ddf8da"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "road",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "saturation": -100
	  	            },
	  	            {
	  	                "lightness": 45
	  	            },
	  	            {
	  	                "color": "#e7fce6"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "road",
	  	        "elementType": "labels.text.fill",
	  	        "stylers": [
	  	            {
	  	                "visibility": "simplified"
	  	            },
	  	            {
	  	                "color": "#a7a7a7"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "road.highway",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "visibility": "simplified"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "road.highway",
	  	        "elementType": "labels.text",
	  	        "stylers": [
	  	            {
	  	                "color": "#a7a7a7"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "road.arterial",
	  	        "elementType": "labels.text",
	  	        "stylers": [
	  	            {
	  	                "visibility": "simplified"
	  	            },
	  	            {
	  	                "color": "#9c9c9c"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "road.arterial",
	  	        "elementType": "labels.icon",
	  	        "stylers": [
	  	            {
	  	                "visibility": "off"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "road.local",
	  	        "elementType": "labels.text",
	  	        "stylers": [
	  	            {
	  	                "visibility": "simplified"
	  	            },
	  	            {
	  	                "color": "#a4a4a4"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "transit",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "visibility": "off"
	  	            }
	  	        ]
	  	    },
	  	    {
	  	        "featureType": "water",
	  	        "elementType": "all",
	  	        "stylers": [
	  	            {
	  	                "color": "#389cd3"
	  	            },
	  	            {
	  	                "visibility": "on"
	  	            }
	  	        ]
	  	    }
	  	]
	};

	map = new google.maps.Map(document.getElementById('google-map'),mapProp);
	
	markerLosAngeles.setMap(map);
	markerNewYork.setMap(map);
	markerBoston.setMap(map);
	markerDetroit.setMap(map);

	google.maps.event.addDomListener(document.getElementById('logangeles'), 'click', (function () {
	    map.setCenter(losAngeles);
	    markerLosAngeles.setMap(map);
	}));

	google.maps.event.addDomListener(document.getElementById('newyork'), 'click', (function () {
	    map.setCenter(newYork);
	    markerNewYork.setMap(map);
	}));

	google.maps.event.addDomListener(document.getElementById('boston'), 'click', (function () {
	    map.setCenter(boston);
	    markerBoston.setMap(map);
	}));

	google.maps.event.addDomListener(document.getElementById('detroit'), 'click', (function () {
	    map.setCenter(detroit);
	    markerDetroit.setMap(map);
	}));
}