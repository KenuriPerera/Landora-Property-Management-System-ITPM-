const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Single file upload
router.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file); // Multer has added the uploaded file here
  res.send('File received');
});

// Multiple files upload
router.post('/upload-multiple', upload.array('images', 5), (req, res) => {
  console.log(req.files); // Multer has added uploaded files 
  res.send('Files received');
});
