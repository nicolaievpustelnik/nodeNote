const { Schema, model } = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

}, {
    timestamps: true
})

UserSchema.methods.encrypPassword = password => {
    bcryptjs.genSalt(10);
}

module.exports = model('User', UserSchema);