var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: {type: String, unique: true, trim: true, lowercase: true, required: true },
    password: { type: String, required: true, trim: true, minlength: 5 },
  },
  {
    timestamps: true,
    // A cool mongoose trick not to send password to clients!
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("User", userSchema);
