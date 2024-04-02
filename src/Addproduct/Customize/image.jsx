import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import defaultImage from "../../../public/image/Icon.png";

const Customimage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "30px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              height: "130px",
              width: "380px",
              borderRadius: "5px",
              display: "flex",
              gap: "25px",
              justifyContent: "center",
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <label htmlFor="upload-image">
                <img
                  src={image ? image : defaultImage}
                  alt="Course Thumbnail"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </label>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px" }}>
                Upload Your course Thumbnail here. Important guidelines: 1200 *
                800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png
              </Typography>
              <input
                accept=".jpg,.jpeg,.png"
                style={{ display: "none" }}
                id="upload-image"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="upload-image">
                <Button
                  component="span"
                  endIcon={<UploadIcon />}
                  sx={{ mt: "10px" }}
                  variant="outlined"
                >
                  Upload image
                </Button>
              </label>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ mt: "10px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                mt: "10px",
                color: "#707888",
              }}
            >
              Label
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Something"
              variant="outlined"
              sx={{ width: "430px", mt: "5px" }}
              required
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                mt: "20px",
                color: "#707888",
              }}
            >
              Instruction
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Write instruction here..."
              variant="outlined"
              sx={{ width: "430px", mt: "5px" }}
              required
            />
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box sx={{ mt: "10px" }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  mt: "10px",
                  color: "#707888",
                }}
              >
                Number of Image
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="1"
                variant="outlined"
                sx={{ width: "200px", mt: "5px" }}
                required
              />
            </Box>
            <Box sx={{ mt: "10px" }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  mt: "10px",
                  color: "#707888",
                }}
              >
                Number of size
              </Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="Size"
                variant="outlined"
                sx={{ width: "200px", mt: "5px" }}
                required
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Customimage;
