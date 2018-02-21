/*
 * Programming Quiz: Umbrella (7-1)
 */


var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if(umbrella.isOpen) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },

    isClose: false,
    close: function(){
        if(umbrella.isClose) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella";
        }
    }
};

