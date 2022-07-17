const mongoose = require("mongoose");

const { Schema } = mongoose;

const profileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  website: String,
  location: {
    type: String,
    default: "Earth",
  },
  bio: { type: String, default: "This is bio." },
  dob: {
    type: Date,
  },
  profileImageUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/dnboldv5r/image/upload/v1632958381/probook/avatar_ism2fu.png",
  },

  backgroundImageUrl: {
    type: String,
    default:
      "https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/04.jpg?3",
  },
});

module.exports = mongoose.model("Profile", profileSchema);
