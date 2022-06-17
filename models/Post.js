var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    catgory: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    date: { type: Date },
  },
  {
    timestamps: true,

    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model('Post', postSchema)