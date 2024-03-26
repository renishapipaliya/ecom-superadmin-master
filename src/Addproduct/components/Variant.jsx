import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
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

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    calculatePrice();
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

  // const handleQuantityChange = (event) => {
  //   setQuantity(event.target.value);
  // };
  // const handlePriceChange = (event) => {
  //   setPrice(event.target.value);
  // };
  const handleChange = (event) => {
    setProductStock(event.target.value); // Update stock state when selection changes
  };

  const calculatePrice = () => {
    let basePrice = 10;
    let additionalPrice = 10;
    let totalPrice = basePrice + additionalPrice * (quantity - 1);
    setPrice(totalPrice);
  };

  const generateSku = () => {
    let generatedSku = "Pro-001-" + color.toLowerCase() + "-" + value;
    setSku(generatedSku);
  };

  React.useEffect(() => {
    calculatePrice();
    generateSku();
  }, [value, color, quantity]);

  const handleAddToCart = () => {
    console.log(`Added to cart: ${quantity} of ${color} ${size}`);
  };

  return (
    <Box height={"100vh"}>
      <Box
        bgcolor={"white"}
        maxWidth={"1024px"}
        width={"1024px"}
        boxShadow={"0px 12px 32px #1E20261A"}
        padding={"40px"}
        borderRadius={"5px"}
      >
        <Typography fontSize={"25px"} fontWeight={600}>
          Product Variant
        </Typography>
        <Box sx={{ display: "flex", gap: "30px", mt: "20px" }}>
          <Box>
            <Typography fontSize={"16px"}>Color:</Typography>
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
            <Typography>value:</Typography>
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
            <Typography>Quantity:</Typography>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={quantity}
              onChange={handleQuantityChange}
              sx={{ width: "300px" }}
            />
          </Box>

          <Box>
            <Typography>Price:</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              value={price}
              onChange={handlePriceChange}
              sx={{ width: "300px" }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "30px", mt: "10px" }}>
          <Box>
            <Typography>SKU:</Typography>
            <TextField
              size="small"
              variant="outlined"
              value={sku}
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "300px" }}
            />
          </Box>

          <Box>
            <Typography>Stock:</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              value={productStock}
              sx={{ width: "300px" }} // Removed readOnly from here
            />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"end"}>
          <Button
            sx={{ mt: "30px" }}
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VariantPage;
