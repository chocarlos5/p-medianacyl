var map = L.map('map').setView([40.966667, -5.663889], 8);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



////capa solucion p=3
function popup_p3(feature,layer){
    if(feature.properties && feature.properties.name){
       layer.bindPopup("<strong>Nombre: </strong>"+ feature.properties.name+'<br>');
    }
}

var myIcon = L.icon({
    iconUrl: 'marcador3.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20],
    shadowUrl: 'marcador3.png',
    shadowSize: [20, 20],
    shadowAnchor: [10, 20]
});

const marker_p3 = {
    icon: myIcon
};


var p3JS = L.geoJSON(p3, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, marker_p3);
    },
    onEachFeature: popup_p3
}).addTo(map);

var botonesControl = L.control({position: 'topright'});
botonesControl.onAdd = function() {                    
    var botones = L.DomUtil.create('div', 'class-css-botones');
    botones.innerHTML = `<button id="p3"  class="btn btn-primary"><img src="marcador3.png"  title="Solución p=3" height ="15" width="15" />3 consultorios</button>`;
    
    return botones;
};
botonesControl.addTo(map);

document.getElementById('p3').addEventListener('click', function() {
    
    if(!p3){
        p3JS.addTo(map);
        p3=true;
    }else{
        p3JS.remove(map);
        p3=false;
    }
        
});
////capa solucion p=141
function popup_p141(feature,layer){
    if(feature.properties && feature.properties.name){
       layer.bindPopup("<strong>Nombre: </strong>"+ feature.properties.name+'<br>');
    }
}

var myIcon = L.icon({
    iconUrl: 'marcador2.png',
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [0, -30],
    shadowUrl: 'marcador2.png',
    shadowSize: [20, 30],
    shadowAnchor: [10, 30]
});

const marker_p141 = {
    icon: myIcon
};


var p141JS = L.geoJSON(p141, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, marker_p141);
    },
    onEachFeature: popup_p141
}).addTo(map);

var botonesControl_p141 = L.control({position: 'topright'});
botonesControl_p141.onAdd = function() {                    
    var botones_p141 = L.DomUtil.create('div', 'class-css-botones');
    botones_p141.innerHTML = `<button id="p141"  class="btn btn-primary"><img src="marcador2.png" title="Solución p=141" height ="15" width="15" />141 consultorios</button>`;
    
    return botones_p141;
};
botonesControl_p141.addTo(map);

document.getElementById('p141').addEventListener('click', function() {
    
    if(!p141){
        p141JS.addTo(map);
        p141=true;
    }else{
        p141JS.remove(map);
        p141=false;
    }
        
});
////capa solucion p=250
function popup_p250(feature,layer){
    if(feature.properties && feature.properties.name){
       layer.bindPopup("<strong>Nombre: </strong>"+ feature.properties.name+'<br>');
    }
}

var myIcon = L.icon({
    iconUrl: 'marcador.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -30],
    shadowUrl: 'marcador.png',
    shadowSize: [20, 20],
    shadowAnchor: [10, 20]
});

const marker_p250 = {
    icon: myIcon
};


var p250JS = L.geoJSON(p250, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, marker_p250);
    },
    onEachFeature: popup_p250
}).addTo(map);

var botonesControl_p250 = L.control({position: 'topright'});
botonesControl_p250.onAdd = function() {                    
    var botones_p250 = L.DomUtil.create('div', 'class-css-botones');
    botones_p250.innerHTML = `<button id="p250"  class="btn btn-primary"><img src="marcador.png" title="Solución p=250" height ="15" width="15" />250 consultorios</button>`;
    
    return botones_p250;
};
botonesControl_p250.addTo(map);

document.getElementById('p250').addEventListener('click', function() {
    
    if(!p250){
        p250JS.addTo(map);
        p250=true;
    }else{
        p250JS.remove(map);
        p250=false;
    }
        
});
////capa todos consultorios
function popup_todos(feature,layer){
    if(feature.properties && feature.properties.name){
       layer.bindPopup("<strong>Nombre: </strong>"+ feature.properties.name+'<br>');
    }
}

var myIcon = L.icon({
    iconUrl: 'marcador4.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -30],
    shadowUrl: 'marcador4.png',
    shadowSize: [20, 20],
    shadowAnchor: [10, 20]
});

const marker_todos = {
    icon: myIcon
};


var todosJS = L.geoJSON(consultorios, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, marker_todos);
    },
    onEachFeature: popup_todos
}).addTo(map);

var botonesControl_todos = L.control({position: 'topright'});
botonesControl_todos.onAdd = function() {                    
    var botones_todos = L.DomUtil.create('div', 'class-css-botones');
    botones_todos.innerHTML = `<button id="todos"  class="btn btn-primary"><img src="marcador4.png" title="Todos los consultorios" height ="15" width="15" />Consultorios actuales</button>`;
    
    return botones_todos;
};
botonesControl_todos.addTo(map);

document.getElementById('todos').addEventListener('click', function() {
    
    if(!todos){
        todosJS.addTo(map);
        todos=true;
    }else{
        todosJS.remove(map);
        todos=false;
    }
        
});


///var capa salamanca
var salamancaJS = L.geoJSON(salamanca).addTo(map);
