mapboxgl.accessToken = mapToken

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    projection: 'globe',
    center: listing.geometry.coordinates,
    zoom: 12
});

// Create a popup 
const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML("<p>Exact location provided after booking</p>");

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
