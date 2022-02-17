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
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// creates virtual property 'friendCount' that counts how many friends user has
userSchema.virtual('friendCount').get (function(v) {
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;