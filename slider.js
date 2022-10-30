<script>
    var imgArray = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg'
    ];
    var curIndex = 0;
    var imgDuration = 5000;

    function slideShow() {
        document.getElementById('image1').src = imgArray[curIndex];
        curIndex++;
        if (curIndex == imgArray.length) { curIndex = 0; }
        setTimeout("slideShow()", imgDuration);
    }
    slideShow();
</script>
