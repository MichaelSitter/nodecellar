$(function() {
	// Legacy support for templating
	utils.loadTemplate(['HomeView', 'WineView', 'WineListItemView', 'AboutView'],
		function(){
			NodeCellar.App.start();
		});
});