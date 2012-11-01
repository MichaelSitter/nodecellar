(function(nodeCellar, backbone){
    nodeCellar.Views.HeaderView = Backbone.Marionette.ItemView.extend({

        template: '#HeaderView',
        events: {
            'keypress' : 'onSubmit'
        },

        initialize: function(){
            this.bindTo(
                nodeCellar.App.vent, // Target
                nodeCellar.Constants.Events.MenuItemSelected, // Event name
                this.selectMenuItem, // Handler
                this); // Context
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');

            if (menuItem) {
                var selection = '.' + menuItem;
                $(selection).addClass('active');
            }
        },

        onSubmit: function(e){

            if(e.keyCode == 13){
                
                var searchVal = this.$('#top-nav-search-input').val();
                if(searchVal !== '') {
                    backbone.history.navigate('search/' + searchVal, { trigger: true });
                }
            }
        }

    });

})(NodeCellar, Backbone);