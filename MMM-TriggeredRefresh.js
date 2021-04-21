Module.register("MMM-TriggeredRefresh",{

    // Default module config.
    defaults: {
        triggers: {}
    },

    start: function() {
        this.state = {};
    },

    notificationReceived: async function(notification, payload, sender) {
        if( notification in this.config.triggers ) {
            let state = {};
            if( notification in this.state) {
                state = this.state[notification];
            }
            else {
                this.state[notification] = state;
            }

            if( 'function' === typeof this.config.triggers[notification] ) {
                if( await this.config.triggers[notification](payload, sender, state) ) {
                    document.location.reload();
                }
            }
            else {
                document.location.reload();
            }
        }
    }

});
