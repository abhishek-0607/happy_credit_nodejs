const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    userId: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Post = model("post", postSchema);
module.exports = Post;
