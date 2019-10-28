var dataUrl = "./js/dataCy.json";
var apikey = "2298bee4-b929-4a09-af4c-b893b3181902";
var what = "Cykelpump_Punkt";
var baseUrl = "https://openstreetws.stockholm.se/LvWS-3.0/Lv.svc/json/GetDataCatalog?apikey=2298bee4-b929-4a09-af4c-b893b3181902&FeatureTypeName=";
var searchUrl = baseUrl+what;
console.log(searchUrl);
d3.json(dataUrl).then(function(d) {
  console.log(d);
}
);
