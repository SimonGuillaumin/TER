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
        "\"Votre vie vous échappe ?^1000 <br/> Prolongez-là, et donnez-lui du sens! ^1000 Grâce au programme ANEMA, votre santé est mise à jour.^1000 Rejoignez-nous !\" <br/><span class=\"quoted\">Matt Welboth, ingénieur chez Alphabet Science. </span>"
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
                "\"Depuis que j'ai intégré Anema, ma vie a enfin un sens.^1500 Je ne passe plus mes journées enfermée chez moi, et je me sens utile à la société !^1000 Je le recommande à tous mes proches car, selon moi, ^300 le futur, ^300 c'est ANEMA !\" ^500 <span class=\"quoted\"> Julie C., 35 ans </span>"
                ],
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