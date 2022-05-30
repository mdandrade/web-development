L.mapquest.key = 'pLwgcBtMJXy759sdmgrOY40mojVVrlPD'

;

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [-19.93140299100719, -44.100017763348525],
  layers: L.mapquest.tileLayer('satellite'),
  zoom: 18,
});
map.addControl(L.mapquest.control());

L.marker([-19.93140299100719, -44.100017763348525], {
    icon: L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'lg',
      symbol: 'C'
    })
  })
  .bindPopup('This is My House!')
  .addTo(map);
  
//map.addControl(L.mapquest.control({ position: 'bottomright' }));
