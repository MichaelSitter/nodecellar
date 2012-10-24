NodeCellar = {};

NodeCellar.App = new Backbone.Marionette.Application();

// TODO: Add initializers to setup application
NodeCellar.App.addInitializer(function(){
	this.headerView = new HeaderView();
	$('.header').html(this.headerView.el);
});

NodeCellar.App.addInitializer(function(){
	new NodeCellar.AppRouter();
	Backbone.history.start();
});