//$("body").append("<img src='https://i.pinimg.com/originals/a7/a4/8c/a7a48c091299b55edf76ee6586f90d4e.jpg' />"); 
$("body").html("processing...")
imgList =  ["https://i.pinimg.com/originals/a7/a4/8c/a7a48c091299b55edf76ee6586f90d4e.jpg", "https://cdn-prod.medicalnewstoday.com/content/images/articles/274/274620/two-peaches.jpg", "http://www.multiart.nu/naken/indexbilder/naken_i_naturen_vinjett.gif"]; 


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://nuditysearch.p.rapidapi.com/nuditySearch/image",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "nuditysearch.p.rapidapi.com",
		"x-rapidapi-key": "81672fc9demshf0d5ebd8607d0b1p12913ejsnd4cac86f3d79",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"setting": "3",
		"objecturl": "https://i.pinimg.com/originals/a7/a4/8c/a7a48c091299b55edf76ee6586f90d4e.jpg"
	}
}


// loopa listan av alla bilder 
// för alla bilder settings.objecturl = imgList[index];
// lägga in aktuell bild
// testa för bild 
// visa upp resultat i html

$(imgList).each(function(idx, img) {
    console.log("processing img: " + idx);
    var imglink = img;
    console.log("the image: " + img);
   


    settings.objecturl = imglink;
    $("body").html(""); 
    $.ajax(settings).done(function (response) {
        $("body").append("<img src='"+imglink+"'/>"); 
        console.log(response);
        console.log(response.score);
     
        if (response.score > 30) {
            $("body").append("<span> Nude! </span>"); 
        } else {
            $("body").append("<span> Not Nude! </span>"); 
        }
    
    });
    // and the rest of your code
});



