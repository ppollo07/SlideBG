var App = {
	config : {
		container : "#slide",
		timer : 8500,
		path : 'img',
		delayFade : 3500,
		timerFade : 1500,
		dir : window.location.href,
		currentBackground : 0,
		urlImg : []
	},
	slide : {
		init : function (config) {
			$.extend(App.config, config);
			App.slide.changeImg();
			//pathImg = App.config.path + App.config.urlImg;
		},
		changeImg : function (config) {
			$.extend(App.config, config);
			var numArray = App.config.urlImg.length;
			App.config.currentBackground++;
			if(App.config.currentBackground > (numArray)-1) App.config.currentBackground = 0;
			//console.log(App.config.currentBackground)
			$(App.config.container).fadeOut(App.config.timerFade,function() {
		        $(App.config.container).css({
		            'background-image' : "url('" + App.config.path + App.config.urlImg[App.config.currentBackground] + "')"
		        });
		        $(App.config.container).fadeIn(App.config.timerFade).delay(App.config.delayFade);
	    	});
	    	
	    	setTimeout(App.slide.changeImg, App.config.timer);
		}
	},
	cambiarURL : {
		init : function (url) {
                
        },
        changeUrl : function (url) {
                //console.log(typeof App.dir)
                window.history.pushState({}, "", App.dir + url);
        }
	}
} 
