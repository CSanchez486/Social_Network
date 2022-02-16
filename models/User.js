const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            //   * Must match a valid email address (look into Mongoose's matching validation)
            type: String,
            required: true,
            trim: true,
        },
        thoughts:[{
            type: Schema.Types.ObjectId,
            ref:"User",
        }],
        friends:[{
            type: Schema.Types.ObjectId,
            ref: "User",
        }],
    },
)


// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.