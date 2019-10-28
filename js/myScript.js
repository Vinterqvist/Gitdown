//$("body").append("<img src='https://i.pinimg.com/originals/a7/a4/8c/a7a48c091299b55edf76ee6586f90d4e.jpg' />"); 
$("body").html("processing...")
imgList =  [    "https://i.pinimg.com/originals/a7/a4/8c/a7a48c091299b55edf76ee6586f90d4e.jpg", 
                "https://pbs.twimg.com/media/B9r3mUmIgAAWDNL.jpg:large", 
                "http://republicbuzz.com/wp-content/uploads/2017/08/20170810/840301_1037765.jpg", 
                "https://www.studiointernational.com/images/articles/a/atkins-ed-2014/atkins-film-still-2.jpg", 
                "https://taidehalli.fi/wp-content/uploads/2018/11/Hak108_web-Hilma-af-Klint.jpg", 
                "https://userscontent2.emaze.com/images/c56100dc-ee8e-4146-875c-d8c5e7e71816/1ed31791ad6ff33578c65a0f1cd3e2c5.jpg", 
                "https://www.louvre.fr/sites/default/files/imagecache/940x768/medias/medias_images/images/louvre-le-28-juillet-la-liberte-guidant-le-peuple-28-juillet-1830.jpg", 
                "https://cdn-prod.medicalnewstoday.com/content/images/articles/274/274620/two-peaches.jpg", 
                "https://www.tate.org.uk/sites/default/files/styles/width-420/public/images/louise_bourgeois_fillette.jpg", 
                "https://ifokus-assets.se/0b1209feed3013d03120a6610ad44a39/shrink/660x800/uploads/ea7/ea729518b94faa964fc0dd692ee781ce/babian.jpg", 
                "http://i.imgur.com/4hGni1I.jpg",
                "http://www.multiart.nu/naken/indexbilder/naken_i_naturen_vinjett.gif"]; 

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

$(imgList).each(function (idx, img) {
    console.log("processing img: " + idx);
    var imglink = img;
    console.log("the image: " + img);

    settings.objecturl = imglink;
    $("body").html("");
    $.ajax(settings).done(function (response) {
        $("body").append("<div id='div" + idx + "' class='grey-box'>");
        $("#div" + idx).append("<img src='" + imglink + "'/>");

        console.log(response);
        console.log(response.score);

        if (response.score > 30) {
            $("#div" + idx).append("<br/><span> Nude! </span>");
        } else {
            $("#div" + idx).append("<br/><span> Not Nude! </span>");
        }

    });
    // and the rest of your code
});



