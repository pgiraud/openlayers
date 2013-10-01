var map;

function init(){
    // allow testing of specific renderers via "?renderer=Canvas", etc

    map = new OpenLayers.Map('map', {
        controls: [
            new OpenLayers.Control.TouchNavigation({
                dragPanOptions: {
                    enableKinetic: true
                }
            }),
            new OpenLayers.Control.Zoom(),
            new OpenLayers.Control.Attribution()
        ]
    });
    layer = new OpenLayers.Layer.OSM( "Simple OSM Map");
    map.addLayer(layer);
    map.setCenter(
        new OpenLayers.LonLat(-71.147, 42.472).transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        ), 12
    );    

    var control = new MobileMeasure();
    map.addControl(control);
}
