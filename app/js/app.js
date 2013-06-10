var App = App || {};

App.common = (function($){
  var self = {};

  return self;
})(jQuery);

App.collection = (function($) {
  var self = {};

  var collectionHover = function() {
    var categories = $('.collection').find('.category');

    categories.hover(function(){
      categories.not(this).addClass('opaque');
    }, function(){
      categories.removeClass('opaque');
    });
  };

  self.width = $(window).width();
  self.height = $(window).width();

  self.init = function() {
    collectionHover();
  }

  return self;
})(jQuery);

