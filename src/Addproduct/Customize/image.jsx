import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

const Customimage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "25px",
      }}
    >
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "30px",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              height: "130px",
              width: "380px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
            }}
            boxShadow={"0px 12px 32px #1E20261A"}
          >
            <img src="./image/Icon.png" style={{objectFit:"cover"}} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "15px" }}>
              Upload Your course Thumbnail here. Important guidelines: 1200 *
              800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png
            </Typography>
            <Button
              endIcon={<UploadIcon />}
              sx={{ mt: "15px" }}
              variant="outlined"
            >
              Uplode image
            </Button>
          </Box>
        </Box>
        <Box>
          <Box sx={{ mt: "10px" }}>
            <Typography  sx={{
              fontSize: "15px",
              mt: "10px",
              color: "#707888",
            }}>Label</Typography>
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
            <Typography  sx={{
              fontSize: "15px",
              mt: "20px",
              color: "#707888",
            }}>Instruction</Typography>
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
              <Typography  sx={{
              fontSize: "15px",
              mt: "10px",
              color: "#707888",
            }}>Number of Image</Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="00"
                variant="outlined"
                sx={{ width: "200px", mt: "5px" }}
                required
              />
            </Box>
            <Box sx={{ mt: "10px" }}>
              <Typography  sx={{
              fontSize: "15px",
              mt: "10px",
              color: "#707888",
            }}>Number of size</Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="00"
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
