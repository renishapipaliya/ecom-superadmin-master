import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

const VariantPage = () => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [sku, setSku] = useState("");
  const [productStock, setProductStock] = useState(0);
  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [saveSnackbar, setSaveSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      calculatePrice(newQuantity);
    }
  };

  const handlePriceChange = (event) => {
    const newPrice = event.target.value;
    setPrice(newPrice);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleChange = (event) => {
    const newStock = event.target.value;
    if (newStock >= 0) {
      setProductStock(newStock);
    }
  };

  const calculatePrice = (newQuantity) => {
    let basePrice = 10;
    let additionalPrice = 10;
    let totalPrice = basePrice + additionalPrice * (newQuantity - 1);
    setPrice(totalPrice);
  };

  const generateSku = () => {
    let generatedSku = "Pro-001-" + color.toLowerCase() + "-" + value;
    setSku(generatedSku);
  };

  useEffect(() => {
    calculatePrice(quantity);
    generateSku();
  }, [value, color, quantity]);

  useEffect(() => {
    if (value && color && quantity && price && sku && productStock) {
      setAllInputsFilled(true);
    } else {
      setAllInputsFilled(false);
    }
  }, [value, color, quantity, price, sku, productStock]);

  const handleSave = () => {
    if (allInputsFilled) {
      setSaveSnackbar(true);
      // setValue("");
      // setColor("");
      // setQuantity("");
      // setPrice("");
      // setSku("");
      // setProductStock("");
    } else {
      setShowSnackbar(true);
    }
  };

  return (
    <Box height={"100vh"}>
      <Box
        bgcolor={"white"}
        maxWidth={"1440px"}
        width={"1200px"}
        boxShadow={"0px 12px 32px #1E20261A"}
        padding={"40px"}
        borderRadius={"5px"}
      >
        <Typography fontSize={"25px"} fontWeight={600}>
          Product Variant
        </Typography>
        <Box sx={{ display: "flex", gap: "30px", mt: "20px" }}>
          <Box>
            <Typography fontSize={"16px"}>Color</Typography>
            <Select
              size="small"
              value={color}
              onChange={handleColorChange}
              displayEmpty
              inputProps={{ "aria-label": "Select color" }}
              sx={{
                width: "300px",
              }}
            >
              <MenuItem value="" disabled>
                Select color
              </MenuItem>
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
            </Select>
          </Box>

          <Box>
            <Typography>Value</Typography>
            <Select
              size="small"
              value={value}
              onChange={handleValueChange}
              aria-label="Select value"
              sx={{ width: "300px" }}
              displayEmpty
            >
              <MenuItem value="0" disabled>
                0
              </MenuItem>
              {[...Array(11).keys()].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "30px", mt: "10px" }}>
          <Box>
            <Typography>Quantity</Typography>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={quantity}
              onChange={handleQuantityChange}
              sx={{ width: "300px" }}
              required
            />
          </Box>

          <Box>
            <Typography>Price</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              value={price}
              onChange={handlePriceChange}
              sx={{ width: "300px" }}
              required
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "30px", mt: "10px" }}>
          <Box>
            <Typography>SKU</Typography>
            <TextField
              size="small"
              variant="outlined"
              value={sku}
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "300px" }}
              required
            />
          </Box>

          <Box>
            <Typography>Stock</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              value={productStock}
              sx={{ width: "300px" }}
              required
            />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"end"} mt={2}>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
        <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="Please fill all the fields."
          anchorOrigin={{
            vertical: "top",
            horizontal: "middle",
          }}
        />
        <Snackbar
          open={saveSnackbar}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Successfully saved"
          anchorOrigin={{
            vertical: "top",
            horizontal: "middle",
          }}
        />
      </Box>
    </Box>
  );
};

export default VariantPage;
