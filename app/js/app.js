var App = App || {};

App.common = (function($){
  var self = {};

  return self;
})(jQuery);

App.collection = (function($) {
  var self = {};

  var loadCollectionSlideshow = function() {
  	$('#water-casting-slideshow').camera({
    	fx: 'simpleFade',
			height: '70%',
			loader: 'none',
      slideOn:'prev',
			pagination: false,
			thumbnails: true,
      playPause: false,
      time: 4000,
      transPeriod: 1000
		});
  };

  var collectionHover = function() {
    var categories = $('.collection').find('.category');

    categories.hover(function(){
      categories.not(this).addClass('opaque');
    }, function(){
      categories.removeClass('opaque');
    });
  };

  var setSectionsToFullScreen = function() {
    $('.full-screen').css({'min-height': self.height, 'min-width': self.width});
  }
  var resizeFullScreens = function() {
    $(window).resize(function() {
      self.width = $(this).width();
      self.height = $(this).height();
      setSectionsToFullScreen();
    });
  }

  self.width = $(window).width();
  self.height = $(window).width();

  self.init = function() {
    loadCollectionSlideshow();
    collectionHover();
    // setSectionsToFullScreen();
    // resizeFullScreens();
  }

  return self;
})(jQuery);
