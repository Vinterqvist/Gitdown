var dataUrl = "https://openstreetws.stockholm.se/LvWS-3.0/Lv.svc"

DataCatalog?apikey=2298bee4-b929-4a09-af4c-b893b3181902&FeatureTypeName=Belysningsmontage"


d3.json(dataUrl).then(function(d) {

console.log(d);
}
); 