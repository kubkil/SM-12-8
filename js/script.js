function initMap() {
  const awaxLatLng = { lat: -37.81725, lng: 144.95577 };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: awaxLatLng,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
    });

  const contactInfo =
    '<address class="map__contact map__contact--infoWindow">' +
      '<div class="map__info-wrapper">' +
        '<span class="map__icon-wrapper">' +
          '<img src="images/map/postal_icon.png" alt="envelope icon" class="map__info-icon">' +
        '</span>' +
        '<p class="map__info">PO Box 16122 Collins Street West Victoria 8007 Australia</p>' +
      '</div>' +
      '<div class="map__info-wrapper">' +
        '<span class="map__icon-wrapper">' +
          '<img src="images/map/place_icon.png" alt="location marker icon" class="map__info-icon">' +
        '</span>' +
          '<p class="map__info">121 King Street Melbourne Victoria 3000 Australia</p>' +
      '</div>' +
      '<div class="map__info-wrapper">' +
        '<span class="map__icon-wrapper">' +
          '<img src="images/map/cellphone_icon.png" alt="telephone icon" class="map__info-icon">' +
        '</span>' +
        '<p class="map__info">+00 0 1234 5678</p>' +
      '</div>' +
      '<div class="map__info-wrapper">' +
        '<span class="map__icon-wrapper">' +
          '<img src="images/map/@_icon.png" alt="email icon" class="map__info-icon">' +
        '</span>' +
        '<p class="map__info">bukindesing@gmail.com</p>' +
      '</div>' +
      '<div class="map__info-wrapper">' +
        '<span class="map__icon-wrapper">' +
          '<img src="images/map/web_icon.png" alt="globe icon" class="map__info-icon">' +
        '</span>' +
        '<a href="http://www.envato.com" class="map__info">www.envato.com</a>' +
      '</div>' +
    '</address>';

  const marker = new google.maps.Marker({
    position: awaxLatLng,
    map: map,
    title: 'Awax',
    icon: {
      url: '/images/map/location-pin.svg',
      scaledSize: new google.maps.Size(50, 50)
    }
  });

  const infoWindow = new google.maps.InfoWindow({
    content: contactInfo,
    pixelOffset: new google.maps.Size(-270, 180),
    maxWidth: 400
  });

  const mediaQuery = window.matchMedia("(min-width: 896px)");

  function handleWidthChange(mediaQuery) {
    let isInfoOpened = false;
    let markerListener;
    if (mediaQuery.matches) {
      markerListener = marker.addListener('click', function openWidow() {
        if (isInfoOpened) {
          isInfoOpened = false;
          infoWindow.close();
        } else {
          isInfoOpened = true;
          infoWindow.open(map, marker);
        }
      });
    } else {
      google.maps.event.removeListener(markerListener);
    }
  }

  handleWidthChange(mediaQuery);
  // mediaQuery trafia jako argument do handleWidthChange?
  mediaQuery.addListener(handleWidthChange);

}
