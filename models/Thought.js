const { Schema, model } = require('mongoose');
const User = require('./User');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength:280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
)



const reactionSchema = new Schema({
    reactionId: {
        type: String.Types.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})




// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query


// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

