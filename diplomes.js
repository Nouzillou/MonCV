function diplome(id){
    var image;

    if(id == 'bac'){
        image = "bac.png";
    }
    else if(id == 'langue'){
        image = "langue.png";
    }
    else {
        image = "geek.png";
    }

    document.getElementById("monImage").src = image;

}


