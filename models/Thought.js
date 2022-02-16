const { Schema, model } = require('mongoose');
const User = require('./User');

const userSchema = new Schema(
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

    },
)



// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// **Reaction** (SCHEMA ONLY)

// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query


// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
