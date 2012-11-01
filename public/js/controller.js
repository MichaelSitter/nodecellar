(function(nodeCellar){

    var appController = function() {
        return {
            home: function (id) {
                if (!this.homeView) {
                    this.homeView = new HomeView();
                }
                $('#content').html(this.homeView.el);
                this.headerView.selectMenuItem('home-menu');
            },

            list: function(page) {
                var p = page ? parseInt(page, 10) : 1;
                var wineList = new WineCollection();
                wineList.fetch({success: function(){
                    $('#content').html(new WineListView({model: wineList, page: p}).el);
                }});
                this.headerView.selectMenuItem('home-menu');
            },

            wineDetails: function (id) {
                var wine = new Wine({_id: id});
                wine.fetch({success: function(){
                    $('#content').html(new WineView({model: wine}).el);
                }});
                this.headerView.selectMenuItem();
            },

            addWine: function() {
                var wine = new Wine();
                $('#content').html(new WineView({model: wine}).el);
                this.headerView.selectMenuItem('add-menu');
            },

            about: function () {
                if (!this.aboutView) {
                    this.aboutView = new AboutView();
                }
                $('#content').html(this.aboutView.el);
                this.headerView.selectMenuItem('about-menu');
            },

            handleSearch: function (searchTerm) {

                if(searchTerm === undefined || searchTerm === '') {
                    return;
                }

                var wines = new WineCollection(),
                wineListView = new WineListView({
                    el: '#content',
                    model: wines,
                    page : 1
                });

                wines.search(searchTerm);
                this.headerView.selectMenuItem('home-menu');
            }
        };
    };

    nodeCellar.AppController = appController;
    
})(window.NodeCellar);