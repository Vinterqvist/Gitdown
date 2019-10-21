var dataURl = "https://openstreetws.stockholm.se/LvWS-3.0/Lv.svc/json/GetDataCatalog?apikey=2298bee4-b929-4a09-af4c-b893b3181902&FeatureTypeName=Belysningsmontage"


d3.json(url).then(function(d) {

console.log(d);
}
); 