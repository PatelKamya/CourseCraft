import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    lesson_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson"
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model("Progress", progressSchema);