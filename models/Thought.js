const { Schema, model } = require('mongoose');


// reactionSchema has child relationship to thoughtSchema.
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
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

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

thoughtSchema
    .virtual('reactionCount')
    .get (function () {
        return this.reactions.length;
    })

const Thought = model('model', thoughtSchema);

module.exports = Thought;
