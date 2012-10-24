(function(nodeCellar, backbone){
	nodeCellar.AppRouter = backbone.Marionette.AppRouter.extend({
		
		controller: nodeCellar.AppController,

		routes: {
			'': 'home',
			'wines': 'list',
			'wines/page/:page'	: 'list',
			'wines/add': 'addWine',
			'wines/:id': 'wineDetails',
			'about': 'about',
			'search/:searchTerm': 'handleSearch'
		}
	});
})(window.NodeCellar, window.Backbone);