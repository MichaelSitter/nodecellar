$(function() {
	// Legacy support for templating
	utils.loadTemplate(['WineView', 'WineListItemView', 'AboutView'],
		function(){
			NodeCellar.App.start();
		});
});