import multer from "multer";
import path from "path";

// define storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // .pdf
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, uniqueName + ext);
  },
});

const upload = multer({ storage });

export default upload;