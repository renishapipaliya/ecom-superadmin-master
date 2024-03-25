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

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
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
    let generatedSku = "pro-001-" + color.toLowerCase() + "-" + value;
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
      <Box
        sx={{
          display: "flex",
          gap: "100px",
          paddingTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <Typography fontSize={"16px"}>Color:</Typography>
          <Select
            size="small"
            value={color}
            onChange={handleColorChange}
            displayEmpty
            inputProps={{ "aria-label": "Select color" }}
            sx={{
              height: "40px",
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

        <Box
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          <Typography>value:</Typography>
          <Select
            size="small"
            value={value}
            onChange={handleValueChange}
            aria-label="Select value"
            sx={{
              width: "80px",
              height: "40px",
            }}
          >
            {[...Array(11).keys()].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          py: "30px",
          gap: "5px",
        }}
      >
        <Typography>Quantity:</Typography>
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          value={quantity} // Display selected quantity in the textbox
          style={{ marginLeft: "10px" }} // Adjust styling as needed
          sx={{
            width: "80px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          paddingBottom: "20px",
          gap: "5px",
        }}
      >
        <Typography>Price:</Typography>
        <TextField
          size="small"
          id="outlined-basic"
          variant="outlined"
          value={`$`}
          style={{ marginLeft: "10px" }}
          sx={{
            width: "80px",
            height: "40px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Typography>SKU: </Typography>
        <TextField
          size="small"
          variant="outlined"
          value={sku}
          InputProps={{
            readOnly: true,
          }}
          sx={{
            width: "150px",
            height: "40px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          py: "20px",
          gap: "5px",
        }}
      >
        <Typography>Stock:</Typography>

        <TextField
          size="small"
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          value={productStock}
          InputProps={{ readOnly: true }}
          style={{ marginLeft: "10px" }}
          sx={{
            width: "80px",
            height: "40px",
          }}
        />
      </Box>

      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default VariantPage;
