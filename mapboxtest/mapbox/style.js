
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Streams_150_0": {
            "type": "geojson",
            "data": json_Streams_150_0
        }
                    ,
        "ARA_Water_Segments_Clip_1": {
            "type": "geojson",
            "data": json_ARA_Water_Segments_Clip_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Streams_150_0_0",
            "type": "line",
            "source": "Streams_150_0",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#ff9e17'}
        }
,
        {
            "id": "lyr_ARA_Water_Segments_Clip_1_0",
            "type": "line",
            "source": "ARA_Water_Segments_Clip_1",
            "layout": {},
            "paint": {'line-width': 1.2607142857142855, 'line-opacity': 1.0, 'line-color': '#276693'}
        }
],
}