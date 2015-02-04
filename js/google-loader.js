function googleSlider(){}

//Properties
googleSlider.colors			= ["#0089FA","#FF002B","#FFA900","#00A753"];
googleSlider.index 			= 0;
googleSlider.sliding 		= undefined;
googleSlider.background 	= "#ffffff";

//Events
googleSlider.onSlideEnd 	= function(){};
googleSlider.onSlideBegin	= function(){};
googleSlider.onSliding		= function(){};


googleSlider.slide 	= function(end)
{
	setTimeout(
		function(){
				var slideto = googleSlider.colors[googleSlider.index];
				if(end == true){slideto = googleSlider.background;}
				document.getElementById("gslider").style.width = "100%";
				document.getElementById("gslider").style.backgroundColor = slideto;
			},10);
	setTimeout(function(){
				var aslideto = googleSlider.colors[googleSlider.index];
				if(end == true){aslideto = googleSlider.background;}
				document.getElementById("gslider").style.backgroundColor = "transparent";
				document.getElementById("gslider").style.width = "0%";
				document.getElementById("google-slider").style.backgroundColor = aslideto;

				if(googleSlider.index < googleSlider.colors.length-1)
				{
					googleSlider.index++;
				}else
				{
					googleSlider.index = 0;
				}
				if(end == true){googleSlider.onSlideEnd();}else{googleSlider.onSliding();}

	},700);	
}
googleSlider.start = function(){googleSlider.slide();googleSlider.onSlideBegin();googleSlider.sliding = setInterval(function(){googleSlider.slide()},1000);}
googleSlider.stop  = function(){clearInterval(googleSlider.sliding); setTimeout(function(){googleSlider.slide(true);},700);}