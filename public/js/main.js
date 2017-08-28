document.addEventListener("DOMContentLoaded", function(event) {

// PARALLAX
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            var target = $(this).attr('href');
            $('.parallax').animate({
                scrollTop: $(target).offset().top + $('.parallax').scrollTop()
            }, 2500);
            return false;
        });
    });

// SCROLL EFFECT

function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
}

var $word = $("path#word");
var $dot = $("path#dot");

// prepare SVG
pathPrepare($word);
pathPrepare($dot);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
	.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
	.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
				.setTween(tween)
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
});
