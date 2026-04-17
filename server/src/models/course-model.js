import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description too long"],
    },

    price: {
      type: Number,
      default: 0,
      min: [0, "Price cannot be negative"],
    },

    thumbnail: {
      type: String,
      trim: true,
    },

    instructor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // performance optimization
    },

    is_published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false, // removes __v
  }
);

export default mongoose.model("Course", courseSchema);