window.WineCollection = Backbone.Collection.extend({

    model: Wine,

    url: 'http://localhost:3001/wines',

    search: function(searchTerm, options) {

        var self = this;
        this.fetch({ success: function() {

            searchTerm = searchTerm.toLowerCase();
            var filteredModels = self.filter(function(wine){

                var name = wine.get('name').toLowerCase(),
                grapes = wine.get('grapes').toLowerCase(),
                country = wine.get('country').toLowerCase(),
                region = wine.get('region').toLowerCase(),
                year = wine.get('year').toLowerCase(),
                description = wine.get('description').toLowerCase();

                return name.indexOf(searchTerm) == -1 &&
                    grapes.indexOf(searchTerm) == -1 &&
                    country.indexOf(searchTerm) == -1 &&
                    region.indexOf(searchTerm) == -1 &&
                    year.indexOf(searchTerm) == -1 &&
                    description.indexOf(searchTerm) && -1;
            });

            self.remove(filteredModels);

            if(options.success){
                options.success();
            }
        }});
    }
});