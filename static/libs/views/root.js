define(['jquery', 'backbone'], function($, Backbone){

  var RootView = Backbone.View.extend({
    el: $('#here'),

    render: function(){
      this.$el.html('hello from here');
    }
  });
  
  return RootView;
});
