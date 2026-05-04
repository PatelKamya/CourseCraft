import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    module_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    video_url: String,
    pdf_url: String,
    content: String,
    order: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default mongoose.model("Lesson", lessonSchema);