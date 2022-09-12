const { Schema, model } = require("mongoose");
const commentSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: "post" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Comment = model("comment", commentSchema);
module.exports = Comment;
