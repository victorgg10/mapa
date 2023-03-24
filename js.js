const mapClass = document.getElementsByClassName('leaflet-popup-content');

var map = L.map('map').setView([19.43924970413274, -99.12988803804318], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([19.43924970413274, -99.12988803804318]).addTo(map);
var marker2 = L.marker([19.38049767942047, -99.14115058861158]).addTo(map);

marker.bindPopup("<b>yo no vivo aqui!</b><br> que tranza gris.").openPopup();
marker2.bindPopup("<b>walmart talplan!</b><br>wenarda.").openPopup();

const getData = () =>{
    fetch('/tiendas.json')
    .then( response => response.json())
    .then( data =>{
        console.log(data.features);
        L.geoJSON(data, {
        }).bindPopup(function (layer) {
            return layer.feature.properties.tipo + "<br/>" + 
            layer.feature.properties.institucion;
        }).addTo(map);
        /*for(const coor of data.features){
            console.log(coor.geometry.coordinates);
            marker2 = L.marker([coor.geometry.coordinates[1], coor.geometry.coordinates[0]]).addTo(map);
            marker2.bindPopup(`<b>${coor.properties.institucion}</b><br>${coor.properties.tipo}.`).openPopup();
        }*/
    } ).catch( error => {error})
};

getData();
/*
const saveData = (event, "onClick") => {

};*/

