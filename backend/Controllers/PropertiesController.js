const Property = require('../Model/PropertyModel');
const cloudinary = require('../utils/cloudinary'); // use your cloudinary.js utility

// Utility: Generate next property ID
const generatePropertyId = async () => {
  const lastProperty = await Property.findOne().sort({ PropertyId: -1 }).limit(1);
  const lastId = lastProperty ? parseInt(lastProperty.PropertyId.replace('P', ''), 10) : 0;
  return `P${(lastId + 1).toString().padStart(3, '0')}`;
};

// Helper: Upload file buffer to Cloudinary
const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (result) resolve(result.secure_url);
        else reject(error);
      }
    );
    stream.end(fileBuffer);
  });
};

// Create a new property
exports.createProperty = async (req, res) => {
  try {
    const { name, address, size, price, status } = req.body;
    const PropertyId = await generatePropertyId();

    // Upload images if provided
    const uploadedImages = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const url = await uploadToCloudinary(file.buffer, 'landora/properties');
        uploadedImages.push(url);
      }
    }

    const newProperty = new Property({
      PropertyId,
      name,
      address,
      images: uploadedImages,
      size,
      price,
      status,
    });

    await newProperty.save();
    res.status(201).json({ message: 'Property created successfully', property: newProperty });
  } catch (error) {
    console.error('Create Property Error:', error);
    res.status(500).json({ message: 'Error creating property', error: error.message });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving properties', error: error.message });
  }
};

// Get property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving property', error: error.message });
  }
};

// Update property
exports.updateProperty = async (req, res) => {
  try {
    const { name, address, size, price, status } = req.body;

    const uploadedImages = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const url = await uploadToCloudinary(file.buffer, 'landora/properties');
        uploadedImages.push(url);
      }
    }

    const updateData = { name, address, size, price, status };
    if (uploadedImages.length > 0) updateData.images = uploadedImages;

    const updatedProperty = await Property.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });

    res.status(200).json({ message: 'Property updated successfully', property: updatedProperty });
  } catch (error) {
    res.status(500).json({ message: 'Error updating property', error: error.message });
  }
};

// Delete property
exports.deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty) return res.status(404).json({ message: 'Property not found' });
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error: error.message });
  }
};
