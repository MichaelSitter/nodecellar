NodeCellar = {};

NodeCellar.Views = {};
NodeCellar.Models = {};
NodeCellar.Collections = {};

NodeCellar.App = new Backbone.Marionette.Application();

// Setup default application views
NodeCellar.App.addInitializer(function(){

	NodeCellar.App.addRegions({
		main: '#main-region'
	});

	var layout = new NodeCellar.Views.AppLayout();

	NodeCellar.App.Layout = layout;
	NodeCellar.App.main.show(layout);

	layout.header.show(new NodeCellar.Views.HeaderView());
});

NodeCellar.App.addInitializer(function(){
	new NodeCellar.AppRouter();
	Backbone.history.start();
});