define(['backbone', 'libs/views/root', 'libs/views/index'], function(Backbone, RootView, IndexView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      'about': 'index',
      '': 'root'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    
    app_router.on('route:index', function(){
      var index_view = new IndexView;
      index_view.render();
    });

    app_router.on('route:root', function(){
      var root_view = new RootView;
      root_view.render();
    });

    Backbone.history.start();
  };
  
  return {
    initialize: initialize
  };
});
