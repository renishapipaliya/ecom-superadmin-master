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
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    points: "",
    category: "",
    productFor: "",
    basePrice: "",
    discount: "",
    discountedPrice: "",
    snackbarOpen: false,
    snackbarMessage: "",
  });

  const handleSave = async (e) => {
    e.preventDefault();
    const {
      productName,
      description,
      points,
      category,
      productFor,
      basePrice,
      discount,
      discountedPrice,
    } = formData;

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
      setFormData({
        ...formData,
        snackbarMessage: "Please fill all the fields",
        snackbarOpen: true,
      });
      return;
    }

    setFormData({
      ...formData,
      snackbarMessage: "Successfully saved",
      snackbarOpen: true,
    });

    // Reset form fields
    setFormData({
      ...formData,
      productName: "",
      description: "",
      points: "",
      category: "",
      basePrice: "",
      discountedPrice: "",
      discount: "",
    });
  };

  const handleCloseSnackbar = () => {
    setFormData({
      ...formData,
      snackbarOpen: false,
    });
  };

  const defaultImage = "../../../public/image/Icon.png";

  const handleFirstImageUpload = (event) => {
    const file = event.target.files[0];
    setFirstImage(file);
  };

  const handleSecondImageUpload = (event) => {
    const file = event.target.files[0];
    setSecondImage(file);
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={7}>
        <Box
          bgcolor={"white"}
          borderRadius={"5px"}
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
              value={formData.productName}
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
                value={formData.description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Box>
            <Box sx={{ mt: "10px" }}>
              <Typography
                sx={{
                  fontSize: "15px",
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
                value={formData.points}
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
                  value={formData.category}
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
                  value={formData.productFor}
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
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box sx={{ my: "20px" }}>
                <Typography
                  sx={{ fontSize: "15px", mt: "2px", color: "#707888" }}
                >
                  Image
                </Typography>
                <Box
                  sx={{
                    border: "1px solid lightgray",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <label htmlFor={`upload-image-1`}>
                    <input
                      type="file"
                      id={`upload-image-1`}
                      accept="image/*"
                      onChange={handleFirstImageUpload}
                      style={{ display: "none" }}
                    />
                    <img
                      src={
                        firstImage
                          ? URL.createObjectURL(firstImage)
                          : defaultImage
                      }
                      alt="image"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        aspectRatio: "16/9",
                      }}
                    />
                  </label>
                </Box>
              </Box>
              <Box sx={{ my: "20px" }}>
                <Typography
                  sx={{ fontSize: "15px", mt: "2px", color: "#707888" }}
                >
                  Select Multiple images
                </Typography>
                <Box
                  sx={{
                    border: "1px solid lightgray",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <label htmlFor={`upload-image-2`}>
                    <input
                      type="file"
                      id={`upload-image-2`}
                      accept="image/*"
                      onChange={handleSecondImageUpload}
                      style={{ display: "none" }}
                    />
                    <img
                      src={
                        secondImage
                          ? URL.createObjectURL(secondImage)
                          : defaultImage
                      }
                      alt="image"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        aspectRatio: "16/9",
                      }}
                    />
                  </label>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid2>

      <Grid2 xs={5}>
        <Box>
          <Box
            bgcolor={"white"}
            borderRadius={"5px"}
            p={"30px"}
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
                value={formData.basePrice}
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
                value={formData.discount}
                onChange={(e) => setDiscount(e.target.value)}
                required
                sx={{ mt: "2px", width: "100%" }}
              />
            </Box>
            <Box sx={{ mt: "20px" }}>
              <Typography sx={{ color: "#707888" }}>
                Discounted Price
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="Discounted Price"
                variant="outlined"
                type="number"
                value={formData.discountedPrice}
                onChange={(e) => setDiscountedPrice(e.target.value)}
                required
                sx={{ mt: "2px", width: "100%" }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", mt: "30px" }}>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={formData.snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={formData.snackbarMessage}
              />
              <Button onClick={handleSave} variant="contained">
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default General;
