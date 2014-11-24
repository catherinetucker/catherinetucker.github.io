console.log('<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Show tooltips on hover</title>
<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.css' rel='stylesheet' />
<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }
</style>
</head>
<body>
<div id='map'></div>

<script>
L.mapbox.accessToken = 'pk.eyJ1IjoiZ2NhIiwiYSI6IjhVdURsWk0ifQ.BV81Ca8XjHz-EB_iXoWcRA';
var map = L.mapbox.map('map', 'gca.k9i8himd')
  .setView([32.797, -96.844], 10);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {
            title: 'Washington, D.C.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'star',
            url: 'http://en.wikipedia.org/wiki/Washington,_D.C.'
        },
        geometry: {
            type: 'Point',
            coordinates: [32.797, -96.844]
        }
    }]
};

myLayer.setGeoJSON(geojson);
myLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});
;
});
</script>
</body>
</html>');
