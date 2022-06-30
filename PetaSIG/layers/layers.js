var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_KlinikPratama_0 = new ol.format.GeoJSON();
var features_KlinikPratama_0 = format_KlinikPratama_0.readFeatures(json_KlinikPratama_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlinikPratama_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KlinikPratama_0.addFeatures(features_KlinikPratama_0);var lyr_KlinikPratama_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KlinikPratama_0, 
                style: style_KlinikPratama_0,
    title: 'Klinik Pratama<br />\
    <img src="styles/legend/KlinikPratama_0_0.png" /> 0<br />\
    <img src="styles/legend/KlinikPratama_0_1.png" /> 1<br />\
    <img src="styles/legend/KlinikPratama_0_2.png" /> 2<br />\
    <img src="styles/legend/KlinikPratama_0_3.png" /> 3<br />\
    <img src="styles/legend/KlinikPratama_0_4.png" /> 4<br />\
    <img src="styles/legend/KlinikPratama_0_5.png" /> 6<br />\
    <img src="styles/legend/KlinikPratama_0_6.png" /> 7<br />\
    <img src="styles/legend/KlinikPratama_0_7.png" /> 11<br />\
    <img src="styles/legend/KlinikPratama_0_8.png" /> <br />'
        });var format_PointKlinikPratama_1 = new ol.format.GeoJSON();
var features_PointKlinikPratama_1 = format_PointKlinikPratama_1.readFeatures(json_PointKlinikPratama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointKlinikPratama_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PointKlinikPratama_1.addFeatures(features_PointKlinikPratama_1);var lyr_PointKlinikPratama_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointKlinikPratama_1, 
                style: style_PointKlinikPratama_1,
                title: '<img src="styles/legend/PointKlinikPratama_1.png" /> Point Klinik Pratama'
            });var format_Puskesmas_2 = new ol.format.GeoJSON();
var features_Puskesmas_2 = format_Puskesmas_2.readFeatures(json_Puskesmas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Puskesmas_2.addFeatures(features_Puskesmas_2);var lyr_Puskesmas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puskesmas_2, 
                style: style_Puskesmas_2,
    title: 'Puskesmas<br />\
    <img src="styles/legend/Puskesmas_2_0.png" /> 1<br />\
    <img src="styles/legend/Puskesmas_2_1.png" /> 2<br />\
    <img src="styles/legend/Puskesmas_2_2.png" /> <br />'
        });var format_PointPuskesmas_3 = new ol.format.GeoJSON();
var features_PointPuskesmas_3 = format_PointPuskesmas_3.readFeatures(json_PointPuskesmas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointPuskesmas_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PointPuskesmas_3.addFeatures(features_PointPuskesmas_3);var lyr_PointPuskesmas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointPuskesmas_3, 
                style: style_PointPuskesmas_3,
                title: '<img src="styles/legend/PointPuskesmas_3.png" /> Point Puskesmas'
            });var format_RumahSakitUmum_4 = new ol.format.GeoJSON();
var features_RumahSakitUmum_4 = format_RumahSakitUmum_4.readFeatures(json_RumahSakitUmum_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitUmum_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakitUmum_4.addFeatures(features_RumahSakitUmum_4);var lyr_RumahSakitUmum_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakitUmum_4, 
                style: style_RumahSakitUmum_4,
    title: 'Rumah Sakit Umum<br />\
    <img src="styles/legend/RumahSakitUmum_4_0.png" /> <br />\
    <img src="styles/legend/RumahSakitUmum_4_1.png" /> 0<br />\
    <img src="styles/legend/RumahSakitUmum_4_2.png" /> 1<br />\
    <img src="styles/legend/RumahSakitUmum_4_3.png" /> 4<br />'
        });var format_PointRumahSakit_5 = new ol.format.GeoJSON();
var features_PointRumahSakit_5 = format_PointRumahSakit_5.readFeatures(json_PointRumahSakit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointRumahSakit_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PointRumahSakit_5.addFeatures(features_PointRumahSakit_5);var lyr_PointRumahSakit_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointRumahSakit_5, 
                style: style_PointRumahSakit_5,
                title: '<img src="styles/legend/PointRumahSakit_5.png" /> Point Rumah Sakit'
            });var format_Posyandu_6 = new ol.format.GeoJSON();
var features_Posyandu_6 = format_Posyandu_6.readFeatures(json_Posyandu_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posyandu_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Posyandu_6.addFeatures(features_Posyandu_6);var lyr_Posyandu_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Posyandu_6, 
                style: style_Posyandu_6,
    title: 'Posyandu<br />\
    <img src="styles/legend/Posyandu_6_0.png" /> Sedikit<br />\
    <img src="styles/legend/Posyandu_6_1.png" /> Sedang<br />\
    <img src="styles/legend/Posyandu_6_2.png" /> Banyak<br />\
    <img src="styles/legend/Posyandu_6_3.png" /> Sangat Banyak<br />'
        });var format_NakesAhliGizi_7 = new ol.format.GeoJSON();
var features_NakesAhliGizi_7 = format_NakesAhliGizi_7.readFeatures(json_NakesAhliGizi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NakesAhliGizi_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NakesAhliGizi_7.addFeatures(features_NakesAhliGizi_7);var lyr_NakesAhliGizi_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NakesAhliGizi_7, 
                style: style_NakesAhliGizi_7,
    title: 'Nakes (Ahli Gizi)<br />\
    <img src="styles/legend/NakesAhliGizi_7_0.png" /> Sedikit<br />\
    <img src="styles/legend/NakesAhliGizi_7_1.png" /> Sedang<br />\
    <img src="styles/legend/NakesAhliGizi_7_2.png" /> Banyak<br />\
    <img src="styles/legend/NakesAhliGizi_7_3.png" /> Sangat Banyak<br />'
        });var format_NakesFarmasi_8 = new ol.format.GeoJSON();
var features_NakesFarmasi_8 = format_NakesFarmasi_8.readFeatures(json_NakesFarmasi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NakesFarmasi_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NakesFarmasi_8.addFeatures(features_NakesFarmasi_8);var lyr_NakesFarmasi_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NakesFarmasi_8, 
                style: style_NakesFarmasi_8,
    title: 'Nakes (Farmasi)<br />\
    <img src="styles/legend/NakesFarmasi_8_0.png" /> Sedikit<br />\
    <img src="styles/legend/NakesFarmasi_8_1.png" /> Sedang<br />\
    <img src="styles/legend/NakesFarmasi_8_2.png" /> Banyak<br />\
    <img src="styles/legend/NakesFarmasi_8_3.png" /> Sangat Banyak<br />'
        });var format_NakesBidan_9 = new ol.format.GeoJSON();
var features_NakesBidan_9 = format_NakesBidan_9.readFeatures(json_NakesBidan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NakesBidan_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NakesBidan_9.addFeatures(features_NakesBidan_9);var lyr_NakesBidan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NakesBidan_9, 
                style: style_NakesBidan_9,
    title: 'Nakes (Bidan)<br />\
    <img src="styles/legend/NakesBidan_9_0.png" /> Sedikit<br />\
    <img src="styles/legend/NakesBidan_9_1.png" /> Sedang<br />\
    <img src="styles/legend/NakesBidan_9_2.png" /> Banyak<br />\
    <img src="styles/legend/NakesBidan_9_3.png" /> Sangat Banyak<br />'
        });var format_NakesPerawat_10 = new ol.format.GeoJSON();
var features_NakesPerawat_10 = format_NakesPerawat_10.readFeatures(json_NakesPerawat_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NakesPerawat_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NakesPerawat_10.addFeatures(features_NakesPerawat_10);var lyr_NakesPerawat_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NakesPerawat_10, 
                style: style_NakesPerawat_10,
    title: 'Nakes (Perawat)<br />\
    <img src="styles/legend/NakesPerawat_10_0.png" /> Sedikit<br />\
    <img src="styles/legend/NakesPerawat_10_1.png" /> Sedang<br />\
    <img src="styles/legend/NakesPerawat_10_2.png" /> Banyak<br />\
    <img src="styles/legend/NakesPerawat_10_3.png" /> Sangat Banyak<br />'
        });var format_NakesDokter_11 = new ol.format.GeoJSON();
var features_NakesDokter_11 = format_NakesDokter_11.readFeatures(json_NakesDokter_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NakesDokter_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NakesDokter_11.addFeatures(features_NakesDokter_11);var lyr_NakesDokter_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NakesDokter_11, 
                style: style_NakesDokter_11,
    title: 'Nakes (Dokter)<br />\
    <img src="styles/legend/NakesDokter_11_0.png" /> Sedikit<br />\
    <img src="styles/legend/NakesDokter_11_1.png" /> Sedang<br />\
    <img src="styles/legend/NakesDokter_11_2.png" /> Banyak<br />\
    <img src="styles/legend/NakesDokter_11_3.png" /> Sangat Banyak<br />'
        });

lyr_KlinikPratama_0.setVisible(true);lyr_PointKlinikPratama_1.setVisible(true);lyr_Puskesmas_2.setVisible(true);lyr_PointPuskesmas_3.setVisible(true);lyr_RumahSakitUmum_4.setVisible(true);lyr_PointRumahSakit_5.setVisible(true);lyr_Posyandu_6.setVisible(true);lyr_NakesAhliGizi_7.setVisible(true);lyr_NakesFarmasi_8.setVisible(true);lyr_NakesBidan_9.setVisible(true);lyr_NakesPerawat_10.setVisible(true);lyr_NakesDokter_11.setVisible(true);
var layersList = [baseLayer,lyr_KlinikPratama_0,lyr_PointKlinikPratama_1,lyr_Puskesmas_2,lyr_PointPuskesmas_3,lyr_RumahSakitUmum_4,lyr_PointRumahSakit_5,lyr_Posyandu_6,lyr_NakesAhliGizi_7,lyr_NakesFarmasi_8,lyr_NakesBidan_9,lyr_NakesPerawat_10,lyr_NakesDokter_11];
lyr_KlinikPratama_0.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'KlinikPrtm': 'KlinikPrtm', });
lyr_PointKlinikPratama_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Puskesmas_2.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Puskesmas': 'Puskesmas', });
lyr_PointPuskesmas_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahSakitUmum_4.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'RS.Umum': 'RS.Umum', });
lyr_PointRumahSakit_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Posyandu_6.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Posyandu': 'Posyandu', });
lyr_NakesAhliGizi_7.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Dokter': 'Dokter', 'Perawat': 'Perawat', 'Bidan': 'Bidan', 'Farmasi': 'Farmasi', 'Ahli_Gizi': 'Ahli_Gizi', });
lyr_NakesFarmasi_8.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Dokter': 'Dokter', 'Perawat': 'Perawat', 'Bidan': 'Bidan', 'Farmasi': 'Farmasi', 'Ahli_Gizi': 'Ahli_Gizi', });
lyr_NakesBidan_9.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Dokter': 'Dokter', 'Perawat': 'Perawat', 'Bidan': 'Bidan', 'Farmasi': 'Farmasi', 'Ahli_Gizi': 'Ahli_Gizi', });
lyr_NakesPerawat_10.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Dokter': 'Dokter', 'Perawat': 'Perawat', 'Bidan': 'Bidan', 'Farmasi': 'Farmasi', 'Ahli_Gizi': 'Ahli_Gizi', });
lyr_NakesDokter_11.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Dokter': 'Dokter', 'Perawat': 'Perawat', 'Bidan': 'Bidan', 'Farmasi': 'Farmasi', 'Ahli_Gizi': 'Ahli_Gizi', });
lyr_KlinikPratama_0.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'KlinikPrtm': 'TextEdit', });
lyr_PointKlinikPratama_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Puskesmas_2.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Puskesmas': 'TextEdit', });
lyr_PointPuskesmas_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahSakitUmum_4.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'RS.Umum': 'TextEdit', });
lyr_PointRumahSakit_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Posyandu_6.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Posyandu': 'TextEdit', });
lyr_NakesAhliGizi_7.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Dokter': 'TextEdit', 'Perawat': 'TextEdit', 'Bidan': 'TextEdit', 'Farmasi': 'TextEdit', 'Ahli_Gizi': 'TextEdit', });
lyr_NakesFarmasi_8.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Dokter': 'TextEdit', 'Perawat': 'TextEdit', 'Bidan': 'TextEdit', 'Farmasi': 'TextEdit', 'Ahli_Gizi': 'TextEdit', });
lyr_NakesBidan_9.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Dokter': 'TextEdit', 'Perawat': 'TextEdit', 'Bidan': 'TextEdit', 'Farmasi': 'TextEdit', 'Ahli_Gizi': 'TextEdit', });
lyr_NakesPerawat_10.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Dokter': 'TextEdit', 'Perawat': 'TextEdit', 'Bidan': 'TextEdit', 'Farmasi': 'TextEdit', 'Ahli_Gizi': 'TextEdit', });
lyr_NakesDokter_11.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Dokter': 'TextEdit', 'Perawat': 'TextEdit', 'Bidan': 'TextEdit', 'Farmasi': 'TextEdit', 'Ahli_Gizi': 'TextEdit', });
lyr_KlinikPratama_0.set('fieldLabels', {'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'KlinikPrtm': 'inline label', });
lyr_PointKlinikPratama_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Puskesmas_2.set('fieldLabels', {'ID_Kec': 'no label', 'Kecamatan': 'no label', 'Puskesmas': 'no label', });
lyr_PointPuskesmas_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahSakitUmum_4.set('fieldLabels', {'ID_Kec': 'no label', 'Kecamatan': 'no label', 'RS.Umum': 'no label', });
lyr_PointRumahSakit_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Posyandu_6.set('fieldLabels', {'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'Posyandu': 'inline label', });
lyr_NakesAhliGizi_7.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'no label', 'Kecamatan': 'no label', 'Dokter': 'no label', 'Perawat': 'no label', 'Bidan': 'no label', 'Farmasi': 'no label', 'Ahli_Gizi': 'no label', });
lyr_NakesFarmasi_8.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'no label', 'Kecamatan': 'no label', 'Dokter': 'no label', 'Perawat': 'no label', 'Bidan': 'no label', 'Farmasi': 'no label', 'Ahli_Gizi': 'no label', });
lyr_NakesBidan_9.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'no label', 'Kecamatan': 'no label', 'Dokter': 'no label', 'Perawat': 'no label', 'Bidan': 'no label', 'Farmasi': 'no label', 'Ahli_Gizi': 'no label', });
lyr_NakesPerawat_10.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'inline label', 'Kecamatan': 'no label', 'Dokter': 'no label', 'Perawat': 'no label', 'Bidan': 'no label', 'Farmasi': 'no label', 'Ahli_Gizi': 'no label', });
lyr_NakesDokter_11.set('fieldLabels', {'ID': 'inline label', 'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'Dokter': 'inline label', 'Perawat': 'inline label', 'Bidan': 'inline label', 'Farmasi': 'inline label', 'Ahli_Gizi': 'inline label', });
lyr_NakesDokter_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});