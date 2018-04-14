const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: { type: String,
        required: true
    },

    yearsOfExperience: {type: Number,
        required: true
    },
    favouriteTech:{ type: String,
        required: true
    },
    currentTech:{ type: String,
        required: true
    },
    dotnet: {type: Number,
        required: true
    },
     java:{type: Number,
        required: true
    },
     database:{type: Number,
        required: true
    },
    bigdata:{type: Number,
        required: true
    }

});

const Contact = module.exports = mongoose.model('contact',ContactSchema);