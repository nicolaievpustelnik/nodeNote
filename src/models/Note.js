const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({

    title: {
        type: String,
        require: true
    },
    descriptions: {
        type: String,
        require: true
    }

}, {
    timestamps: true
})

module.exports = model('Note', NoteSchema);