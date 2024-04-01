import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const General = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("");
  const [category, setCategory] = useState("");
  const [productFor, setProductFor] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    if (
      !productName ||
      !description ||
      !points ||
      !category ||
      !productFor ||
      !basePrice ||
      !discount ||
      !discountedPrice
    ) {
      setSnackbarMessage("Please fill all the fields");
      setSnackbarOpen(true);

      return;
    }

    setSnackbarMessage("Successfully saved");
    setSnackbarOpen(true);
    // setProductName("");
    // setDescription("");
    // setPoints("");
    // setCategory("");
    // setBasePrice("");
    // setDiscountedPrice("");
    // setDiscount("");
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "25px",
        maxWidth: "1440px",
        width: "1200px",
      }}
    >
      <Box
        bgcolor={"white"}
        borderRadius={"5px"}
        width={"650px"}
        p={"30px"}
        boxShadow={"0px 12px 32px 0px #1E20261A"}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            Product information
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              mt: "20px",
              color: "#707888",
            }}
          >
            Name
          </Typography>
          <TextField
            size="small"
            id="outlined-basic"
            placeholder="Product Name"
            variant="outlined"
            maxRows={"4"}
            sx={{ mt: "2px" }}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <Box sx={{ mt: "15px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                mt: "2px",
                color: "#707888",
              }}
            >
              Description
            </Typography>
            <textarea
              rows={"3"}
              width="100%"
              cols={"75"}
              className="border border-gray-300 w-[100%] rounded p-2"
              placeholder="Description"
              sx={{ mt: "2px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                // color: "black",
                mt: "2px",
                color: "#707888",
              }}
            >
              Points
            </Typography>
            <TextField
              multiline
              rows={4}
              maxRows={4}
              size="small"
              id="outlined-basic"
              placeholder="Bullet Points"
              variant="outlined"
              sx={{ mt: "2px", width: "100%" }}
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                mt: "2px",
                color: "#707888",
              }}
            >
              Categorys
            </Typography>
            <FormControl size="small" sx={{ mt: "2px", width: "100%" }}>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
              >
                <MenuItem sx={{ bgcolor: "white" }} value="" disabled>
                  Select Categorys
                </MenuItem>
                <MenuItem sx={{ bgcolor: "white" }} value={10}>
                  Wallet
                </MenuItem>
                <MenuItem sx={{ bgcolor: "white" }} value={20}>
                  Bottle
                </MenuItem>
                <MenuItem sx={{ bgcolor: "white" }} value={30}>
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                mt: "2px",
                color: "#707888",
              }}
            >
              Product For...
            </Typography>
            <FormControl size="small" sx={{ mt: "2px", width: "100%" }}>
              <Select
                value={productFor}
                onChange={(e) => setProductFor(e.target.value)}
                displayEmpty
              >
                <MenuItem sx={{ bgcolor: "white" }} value="" disabled>
                  Product For...
                </MenuItem>
                <MenuItem sx={{ bgcolor: "white" }} value={10}>
                  Father
                </MenuItem>
                <MenuItem sx={{ bgcolor: "white" }} value={20}>
                  Mother
                </MenuItem>
                <MenuItem sx={{ bgcolor: "white" }} value={30}>
                  Brother
                </MenuItem>
                <MenuItem sx={{ bgcolor: "white" }} value={40}>
                  Other
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                mt: "2px",
                color: "#707888",
              }}
            >
              Image
            </Typography>
            <TextField
              type="file"
              size="small"
              variant="outlined"
              required
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: "100%",
                },
              }}
            />
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography sx={{ fontSize: "15px", mt: "2px", color: "#707888" }}>
              Select Multiple images
            </Typography>
            <TextField
              type="file"
              size="small"
              placeholder=""
              variant="outlined"
              inputProps={{ multiple: true }}
              required
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: "100%",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          bgcolor={"white"}
          borderRadius={"5px"}
          p={"30px"}
          width={"550px"}
          boxShadow={"0px 12px 32px 0px #1E20261A"}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
            Pricing
          </Typography>
          <Box sx={{ mt: "25px" }}>
            <Typography sx={{ color: "#707888" }}>Base Price</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Product Name"
              variant="outlined"
              type="number"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              required
              sx={{ mt: "2px", width: "100%" }}
            />
          </Box>
          <Box sx={{ mt: "20px" }}>
            <Typography sx={{ color: "#707888" }}>Discount</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Discounted"
              variant="outlined"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
              sx={{ mt: "2px", width: "100%" }}
            />
          </Box>
          <Box sx={{ mt: "20px" }}>
            <Typography sx={{ color: "#707888" }}>Discounted Price</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Discounted Price"
              variant="outlined"
              type="number"
              value={discountedPrice}
              onChange={(e) => setDiscountedPrice(e.target.value)}
              required
              sx={{ mt: "2px", width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", mt: "30px" }}>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={snackbarOpen}
              autoHideDuration={6000} // Optional: Auto-close after 6 seconds
              onClose={handleCloseSnackbar}
              message={snackbarMessage}
            />
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default General;
