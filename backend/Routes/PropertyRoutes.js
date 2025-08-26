const express = require('express');
const router = express.Router();
const PropertiesController = require('../Controllers/PropertiesController');
const multer = require('multer');
const cloudinary = require('../config/cloudinary'); 

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.array('images', 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    // Upload each file to Cloudinary
    const uploadPromises = req.files.map(file => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: 'properties' },
          (error, result) => {
            if (error) reject(error);
            else resolve({ url: result.secure_url, public_id: result.public_id });
          }
        ).end(file.buffer);
      });
    });

    const uploadedImages = await Promise.all(uploadPromises);

    res.status(200).json({
      success: true,
      images: uploadedImages
    });

  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// CRUD routes for properties

router.post('/', upload.array('images'), PropertiesController.createProperty);
router.get('/', PropertiesController.getAllProperties);
router.get('/:id', PropertiesController.getPropertyById);
router.put('/:id', upload.array('images'), PropertiesController.updateProperty);
router.delete('/:id', PropertiesController.deleteProperty);

module.exports = router;
