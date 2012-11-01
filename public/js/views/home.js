// window.HomeView = Backbone.View.extend({

//     initialize:function () {
//         this.render();
//     },

//     render:function () {
//         $(this.el).html(this.template());
//         return this;
//     }

// });

NodeCellar.Views.HomeView = Backbone.Marionette.ItemView.extend({
	template: '#HomeView'
});
