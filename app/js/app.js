var App = App || {};

App.common = (function($){
  var self = {};

  return self;
})(jQuery);

// Collections Module
App.collections = (function($) {
  var self = {};

  var collectionHover = function() {
    var categories = $('.collection').find('.category');

    categories.hover(function(){
      categories.not(this).addClass('opaque');
    }, function(){
      categories.removeClass('opaque');
    });};

  self.width = $(window).width();
  self.height = $(window).width();

  self.init = function() {
    collectionHover();
  }

  return self;
})(jQuery);

// Collection Module
App.collection = (function($) {
  var self = {};

  var createSlider = function() {
    $(".royalSlider").royalSlider({
        fullscreen: {
          enabled: true,
          nativeFS: true
        },
        controlNavigation: 'thumbnails',
        thumbs: {
          orientation: 'vertical',
          paddingBottom: 4,
          appendSpan: true
        },
        transitionType:'fade',
        autoScaleSlider: true, 
        autoScaleSliderWidth: 960,     
        autoScaleSliderHeight: 600,
        loop: true,
        arrowsNav: false,
        keyboardNavEnabled: true,
        globalCaption:true

     });
  };

  self.init = function() {
    createSlider();
  }

  return self;
})(jQuery);

