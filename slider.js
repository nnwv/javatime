 
        var imgArray = [
            'https://tile.loc.gov/storage-services/service/pnp/npcc/30000/30071r.jpg',
            'https://tile.loc.gov/storage-services/service/pnp/gtfy/00600/00634_150px.jpg',
            'https://tile.loc.gov/storage-services/service/pnp/fsa/8b16000/8b16100/8b16145_150px.jpg'
            'https://tile.loc.gov/storage-services/service/pnp/ppss/01000/01044v.jpg'
           
            
            
            
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
    
