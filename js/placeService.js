'use strict';

const eilat  = {lat: 29.558988, lng: 34.952703};
let map;


function getPosition() {
  navigator.geolocation.getCurrentPosition((pos) => {
    initMap(pos.coords.latitude ,pos.coords.longitude )
  },error) 
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


function initMap(lat,lng ) {
  var elMap = document.querySelector('#map');
  var options = {
      center: {lat,lng},
      zoom: 16
  };

  var map = new google.maps.Map(
      elMap,
      options
  );

  var marker = new google.maps.Marker({
      position: { lat, lng },
      map,
  });
}