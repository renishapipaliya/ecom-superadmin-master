import React, { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Add, CurrencyRupee, Delete, Percent, SearchOutlined } from "@mui/icons-material";
import { MuiColorInput } from 'mui-color-input';

const VariantPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [variants, setVariants] = useState([{ id: 1, variant: 'Color', value: '', color: '#000000', discountType: 'Percent', price: '', maxDiscount: '' }]); // Initial variant with ID
  const [nextVariantId, setNextVariantId] = useState(2); // ID for the next variant to be added

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Add your logic for filtering variants based on search term
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDiscountTypeChange = (id, event) => {
    const updatedVariants = variants.map(variant => {
      if (variant.id === id) {
        return { ...variant, discountType: event.target.value };
      }
      return variant;
    });
    setVariants(updatedVariants);
  };
  

  const handleAddVariant = () => {
    const newVariant = { id: nextVariantId, variant: 'Color', value: '', color: '#000000', discountType: 'Percent', price: '', maxDiscount: '' };
    setVariants([...variants, newVariant]);
    setNextVariantId(nextVariantId + 1);
  };

  const handleVariantChange = (id, event) => {
    const selectedVariant = event.target.value;
    const updatedVariants = variants.map(variant => {
      if (variant.id === id) {
        return { ...variant, variant: selectedVariant, discountType: selectedVariant === 'Color' ? 'Percent' : 'Currency' };
      }
      return variant;
    });
    setVariants(updatedVariants);
  };

  const handleValueChange = (id, field, value) => {
    const updatedVariants = variants.map(variant => {
      if (variant.id === id) {
        return { ...variant, [field]: value };
      }
      return variant;
    });
    setVariants(updatedVariants);
  };

  const calculateDiscount = (price, maxDiscount) => {
    if (!price || !maxDiscount || isNaN(price) || isNaN(maxDiscount) || parseFloat(price) <= 0) {
      return '';
    }
    const discount = (maxDiscount / price) * 100;
    return discount.toFixed(2); // Assuming you want to display discount in percentage format with 2 decimal places
  };

  return (
    <Box
      height={"100vh"}
      bgcolor={"white"}
      maxWidth={"1440px"}
      width={"1200px"}
      boxShadow={"0px 12px 32px #1E20261A"}
      padding={"40px"}
      borderRadius={"5px"}
    >
      <Box>
        <Typography fontSize={"25px"} fontWeight={600}>
          Product Variant
        </Typography>
      </Box>
      <Box>
        <TextField
          sx={{ width: "600px" }}
          size="small"
          label={
            <Box>
              <SearchOutlined />
              Search
            </Box>
          }
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button
          sx={{ height: "40px", marginLeft: "32%" }}
          variant="outlined"
          startIcon={<Add />}
          onClick={handleAddVariant}
        >
          Add Variants
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>VARIANT</TableCell>
              <TableCell>VALUE</TableCell>
              <TableCell>IMAGE</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell>MAX DISCOUNT</TableCell>
              <TableCell>DISCOUNT</TableCell>
              <TableCell>STOCK</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {variants.map(variant => (
              <TableRow key={variant.id}>
                <TableCell>
                  <Select
                    sx={{
                      width: "90px",
                      height: "30px"
                    }}
                    value={variant.variant}
                    onChange={(e) => handleVariantChange(variant.id, e)}
                  >
                    <MenuItem value="Color">Color</MenuItem>
                    <MenuItem value="Size">Size</MenuItem>
                  </Select>
                </TableCell>
                <TableCell padding="0px" >
                  {variant.variant === "Color" ? (
                    <MuiColorInput
                      format="hex"
                      value={variant.color}
                      onChange={(newValue) => handleValueChange(variant.id, 'color', newValue)}
                    />
                  ) : (
                    <TextField sx={{
                      padding: "0px",
                      width: "90px",
                      height: "30px"
                    }}
                      value={variant.value}
                      onChange={(e) => handleValueChange(variant.id, 'value', e.target.value)}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <input
                    accept="image/*"
                    id={`image-upload-${variant.id}`}
                    type="file"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  <label htmlFor={`image-upload-${variant.id}`}>
                    <Button variant="contained" component="span">
                      Upload
                    </Button>
                  </label>
                  {selectedImage && (
                    <Typography>{selectedImage.name}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  <TextField
                  size="small"
                    value={variant.price}
                    onChange={(e) => handleValueChange(variant.id, 'price', e.target.value)}
                  />
                </TableCell>
                <TableCell >
                  <Box display={"flex"} >
                  <TextField size="small"
                    value={variant.maxDiscount}
                    onChange={(e) => handleValueChange(variant.id, 'maxDiscount', e.target.value)}
                  />
                  <Select
                    // sx={{ padding: "0px" }}
                    size="small"
                    value={variant.discountType}
                    onChange={(e) => handleDiscountTypeChange(variant.id, e)}
                  >
                    <MenuItem value="Percent"><Percent sx={{ fontSize: "15px" }} /></MenuItem>
                    <MenuItem value="Currency"><CurrencyRupee sx={{ fontSize: "15px" }} /></MenuItem>
                  </Select></Box>
                </TableCell>
                <TableCell size="small">
                  {variant.price && variant.maxDiscount && (
                    <Typography >
                      {calculateDiscount(parseFloat(variant.price), parseFloat(variant.maxDiscount))}%
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <TextField size="small"/>
                </TableCell>
                <TableCell>
                  <TextField size="small" />
                </TableCell>
                <TableCell padding="0px" >
                  {"PRO-001-" + variant.variant + "-" + (variant.variant === "Color" ? variant.color : variant.value)}
                </TableCell>
                <TableCell>
                  <Delete />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VariantPage;
