$(document).ready(function() {

/*    $.localScroll();    */

    $('body').click(function () {
        $('.container').animate({opacity:1},600);
        $('.text1').typed({
        strings: [
        "Voici une phrase.<br/>Puis une autre phrase suivie d'une pause.^1000<br/>"
        ],
        typeSpeed: 1, 
        backDelay: 300,
        loop: false,
        loopCount: false,
        showCursor: false,
        callback : function () {
            $('.clickhere').fadeIn(400, function(){
                $('.clickhere').css('display', 'inline-block');
            });
        },
        });

    });

    var waypoints = $('#slide2').waypoint({
        handler: function(direction) {
            $('.text2').typed({
                strings: [
                "Cette vision le replongea 5 ans en arrière.^1500 Le jour de ses 60 ans. ^1500"
                ],
                typeSpeed: 0,
                backDelay: 300,
                loop: false,
                loopCount: false,
                showCursor: false
            });
        }, 
        offset: 150 
    });


    var waypoints = $('#slide3').waypoint({
      handler: function(direction) {
         $('.text3').typed({
            strings: [
            "C’était une montre comme on n’en faisait plus en 2048. ^1500"
            ],
            typeSpeed: 0,
            backDelay: 300,
            loop: false,
            loopCount: false,
            showCursor: false
        });
     },
        offset: 150 
    });


});