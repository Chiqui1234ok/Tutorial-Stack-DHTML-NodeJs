const   mongoose        = require('mongoose'),
        Schema          = mongoose.Schema,
        Cryptocurrency  = new Schema ({
            name: {
                type        : String,
                required    : true
            },
            price: {
                type        : Number,
                required    : true
            },
            about: {
                today: {
                    high    : Number,
                    low     : Number
                },  // !today
                history: {
                    high: {
                        value   : Number,
                        date    : Date
                    },
                    low: {
                        value   : Number,
                        date    : Date
                    }
                }   // !history
            } // !about
        });
module.exports = mongoose.model('Cryptocurrency', Cryptocurrency);