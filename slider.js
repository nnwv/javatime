 
        var imgArray = [
            'https://tile.loc.gov/storage-services/service/pnp/npcc/30000/30071r.jpg',
            'https://tile.loc.gov/storage-services/service/pnp/ppss/01000/01044v.jpg',
            'https://tile.loc.gov/storage-services/service/pnp/highsm/57000/57021v.jpg',
            
           
            
            
            
        ];
        var curIndex = 0;
        var imgDuration = 10000;


        function slideShow() {
            document.getElementById('image1').src = imgArray[curIndex];
            curIndex++;
            if (curIndex == imgArray.length) { curIndex = 0; }
            setTimeout("slideShow()", imgDuration);
        }
        slideShow();
    
