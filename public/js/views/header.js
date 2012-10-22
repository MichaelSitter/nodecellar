(function(backbone){
    HeaderView = Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        events: {
            'keypress' : 'onSubmit'
        },

        render: function () {
            $(this.el).html(this.template());
            return this;
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
})(window.Backbone);