const multer = require('multer');
const path = require('path');

const tempDir = path.join(__dirname, '..', 'tepm');

const storage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    const uniquePreffix = Date.now();
    const { originalname } = file;
    const filename = `${uniquePreffix}_${originalname}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
