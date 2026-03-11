function diplome(id){
    var image;

    if(id == 'bac'){
        image = "bac.pdf";
    }
    else if(id == 'langue'){
        image = "langue.png";
    }
    else {
        image = "geek.jpeg";
    }

    document.getElementById("monImage").src = image;

}
