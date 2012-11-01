(function(nodeCellar){

    var appController = function() {
        return {
            home: function (id) {

                // if (!this.homeView) {
                //     this.homeView = new HomeView();
                // }
                // $('#content').html(this.homeView.el);

                nodeCellar.App.Layout.content.show(new nodeCellar.Views.HomeView());

                this.menuItemSelected('home-menu');
            },

            list: function(page) {

                var p = page ? parseInt(page, 10) : 1;
                var wineList = new WineCollection();
                wineList.fetch({success: function(){
                    $('#content').html(new WineListView({model: wineList, page: p}).el);
                }});
                this.menuItemSelected('home-menu');
            },

            wineDetails: function (id) {
                var wine = new Wine({_id: id});
                wine.fetch({success: function(){
                    $('#content').html(new WineView({model: wine}).el);
                }});
                this.menuItemSelected();
            },

            addWine: function() {
                var wine = new Wine();
                $('#content').html(new WineView({model: wine}).el);
                this.menuItemSelected('add-menu');
            },

            about: function () {
                if (!this.aboutView) {
                    this.aboutView = new AboutView();
                }
                $('#content').html(this.aboutView.el);
                this.menuItemSelected('about-menu');
            },

            handleSearch: function (searchTerm) {

                if(searchTerm === undefined || searchTerm === '') {
                    return;
                }

                var wines = new WineCollection(),
                    page = 1,
                    wineListView = new WineListView({
                        el: '#content',
                        model: wines,
                        page : page
                    });

                wines.search(searchTerm, {
                    success: function() {
                        $('#content').html(new WineListView({model: wines, page: page}).el);
                    }
                });
                this.menuItemSelected('home-menu');
            },
            
            menuItemSelected: function(item){

                // Using the application vent object as our global event aggregator
                nodeCellar.App.vent.trigger(
                    nodeCellar.Constants.Events.MenuItemSelected, // Event name
                    item); // Options
            }
        };
    };

    nodeCellar.AppController = appController;

})(window.NodeCellar);