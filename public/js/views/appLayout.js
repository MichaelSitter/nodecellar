(function (nodeCellar, backbone) {
	
	var appLayout = backbone.Marionette.Layout.extend({

		containerId: '#app-layout',
		template: nodeCellar.Constants.Templates.AppLayout,

		regions: {
			header: '.header',
			content: '#content'
		}
	});

	nodeCellar.Views.AppLayout = appLayout;

})(NodeCellar, Backbone);