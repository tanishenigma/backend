import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = mongoose.Schema(
  {
    videoFiles: {
      type: string, //cloudinary url hoga
      required: true,
    },
    thumbnail: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    title: {
      type: string,
      required: true,
    },
    duration: {
      type: Number, //derived from cloudinary
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
    },
    owner: {
      types: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { Timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export default Video = mongoose.Model("Video", videoSchema);
