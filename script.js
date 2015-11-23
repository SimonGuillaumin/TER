$(document).ready(function() {

        $('.container').animate({opacity:1},600); /* fadeIn du conteneur*/
        $('.clickhere').smoothScroll({speed:800}); /* un joli scroll quand on clique sur les fleches*/
        $('.start').smoothScroll({speed:800});
        $.stellar({ /* On applique le paralax à l'ensemble du document */
            horizontalScrolling:false, /* fix a bg position issue */
            /*verticalOffset: -200,*/
        });
        var waypoints = $('#slide1').waypoint({
            handler: function(direction) {

        $('.text1').typed({
        strings: [
        "\"Prolongez votre vie grâce au programme ANEMA !^1000 <br/>Avec nous, votre santé est mise à jour.^1000 <br/> Rejoignez Anema !\" <br/><span class=\"quoted\">Matt Welboth, ingénieur chez Alphabet Science. </span>"
        ],
        typeSpeed: 1, 
        backDelay: 300,
        loop: false,
        loopCount: false,
        showCursor: false,
        callback : function () {
            $('.arrow1').fadeIn(400, function(){
                $('.arrow1').css('display', 'inline-block');
            });
        },
        });
        }, 
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
                showCursor: false, 
                callback : function () {
                    $('.arrow2').fadeIn(400, function(){
                        $('.arrow2').css('display', 'inline-block');
                    });
                },
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
            showCursor: false, 
            callback : function () {
                $('.arrow3').fadeIn(400, function(){
                    $('.arrow3').css('display', 'inline-block');
                });
            },

        });

     },
        offset: 150 
    });

});