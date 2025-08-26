import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container,TextField,Button,Table,TableBody,TableCell,TableHead,TableRow,Paper,Select,MenuItem,InputLabel,FormControl,FormHelperText,
} from "@mui/material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PropertyManager = () => {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    size: "",
    price: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load all properties
  const fetchProperties = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/property");
      setProperties(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  // Form validation
  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Property Name is required.";
    temp.address = formData.address ? "" : "Address is required.";
    temp.size =
      formData.size && !isNaN(formData.size) ? "" : "Size must be a number.";
    temp.price =
      formData.price && !isNaN(formData.price) ? "" : "Price must be a number.";
    temp.status = formData.status ? "" : "Status is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("size", formData.size);
    data.append("price", formData.price);
    data.append("status", formData.status);

    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/property/${editingId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/api/property", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setFormData({ name: "", address: "", size: "", price: "", status: "" });
      setImages([]);
      fetchProperties();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (prop) => {
    setFormData({
      name: prop.name,
      address: prop.address,
      size: prop.size,
      price: prop.price,
      status: prop.status,
    });
    setEditingId(prop._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:5000/api/property/${id}`);
        fetchProperties();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleGeneratePDF = () => {
  const doc = new jsPDF();
  const logo = new Image();
  logo.src = "/Landora.png";

  // Draw page border
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setLineWidth(1);
  doc.rect(5, 5, pageWidth - 10, pageHeight - 10); // 5px padding border

  // Add logo
  doc.addImage(logo, "PNG", 15, 10, 30, 30);

  // Report title and issued by
  doc.setFontSize(18);
  doc.text("Property Report", pageWidth / 2, 20, { align: "center" });
  doc.setFontSize(12);
  doc.text("Issued by: Property Manager", pageWidth / 2, 28, { align: "center" });
  doc.setFontSize(10);
  doc.text(`Generated: ${new Date().toLocaleString()}`, pageWidth - 15, 20, { align: "right" });

  // Table data
  const tableData = properties.map((p, i) => [
    i + 1,
    p.name,
    p.address,
    p.size,
    p.price,
    p.status,
    p.images?.length ? "Yes" : "No",
  ]);

  autoTable(doc, {
    startY: 45,
    head: [["#", "Name", "Address", "Size", "Price", "Status", "Images"]],
    body: tableData,
    theme: "grid",
    styles: { cellPadding: 3, fontSize: 10, lineColor: [0, 0, 0], lineWidth: 0.5 },
    didDrawPage: (data) => {
      const pageCount = doc.internal.getNumberOfPages();

      // Page number
      doc.setFontSize(10);
      doc.text(`Page ${doc.internal.getCurrentPageInfo().pageNumber} of ${pageCount}`, pageWidth - 15, pageHeight - 10, { align: "right" });

      // Signature line at bottom
      doc.setFontSize(12);
      doc.text("Signature: ____________________", 15, pageHeight - 20);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 50, pageHeight - 20);
    },
  });

  doc.save("PropertyReport.pdf");
};


  // Filtering logic (case-insensitive, search across all fields including numbers)
const filteredProperties = properties.filter((p) => {
  if (!search) return true; // If search is empty, show all

  const query = search.toString().toUpperCase();

  return Object.values(p).some((value) => {
    if (value === null || value === undefined) return false;

    // Convert every field (numbers, strings, objects) to string safely
    return value.toString().toUpperCase().includes(query);
  });
});


  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f9", padding: "2rem", display: "flex", flexDirection: "column" }}>
      <Container sx={{ flex: 1 }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Property Management System</h1>

        {/* Property Form */}
        <div style={{ marginBottom: "2rem", padding: "1.5rem", background: "white", borderRadius: "8px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
              <TextField
                label="Property Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />
              <TextField
                label="Size (sq ft)"
                name="size"
                value={formData.size}
                onChange={handleChange}
                error={!!errors.size}
                helperText={errors.size}
              />
              <TextField
                label="Price (SLR)"
                name="price"
                value={formData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
              />
              <FormControl fullWidth error={!!errors.status}>
                <InputLabel>Status</InputLabel>
                <Select name="status" value={formData.status} onChange={handleChange}>
                  <MenuItem value="For Sale">For Sale</MenuItem>
                  <MenuItem value="Sold">Sold</MenuItem>
                  <MenuItem value="Reserved">Reserved</MenuItem>
                </Select>
                {errors.status && <FormHelperText>{errors.status}</FormHelperText>}
              </FormControl>
            </div>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} style={{ marginTop: "1rem" }} />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              {editingId ? "Update Property" : "Add Property"}
            </Button>
          </form>
        </div>

        {/* Search + PDF */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
          <TextField
            label="Search Properties"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: "65%" }}
          />
          <Button
    variant="contained"
    sx={{
      backgroundColor: "#2d9029",
      color: "#fff",
      "&:hover": { backgroundColor: "#3ca439" },
      whiteSpace: "nowrap",
    }}
    onClick={handleGeneratePDF}
  >
    Generate PDF
  </Button>
</div>

        {/* Properties Table */}
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Property ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Images</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProperties.map((prop) => (
                <TableRow key={prop._id}>
                  <TableCell>{prop.PropertyId}</TableCell>
                  <TableCell>{prop.name}</TableCell>
                  <TableCell>{prop.address}</TableCell>
                  <TableCell>{prop.size} sq ft</TableCell>
                  <TableCell>SLR.{prop.price}</TableCell>
                  <TableCell>{prop.status}</TableCell>
                  <TableCell>
                    {prop.images?.map((img, i) => (
                      <img key={i} src={img} alt="property" width="60" height="45" style={{ marginRight: "4px" }} />
                    ))}
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" onClick={() => handleEdit(prop)} sx={{ marginRight: 1 }}>
                      Update
                    </Button>
                    <Button size="small" color="error" variant="outlined" onClick={() => handleDelete(prop._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};

export default PropertyManager;
