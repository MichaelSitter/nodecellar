(function(nodeCellar, backbone){
    nodeCellar.Views.HeaderView = Backbone.Marionette.ItemView.extend({

        template: '#HeaderView',
        events: {
            'keypress' : 'onSubmit'
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
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