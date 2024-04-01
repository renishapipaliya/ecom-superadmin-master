import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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

const Companyinfo = () => {
  const [uploadedFile1, setUploadedFile1] = useState(null);
  const [uploadedFile2, setUploadedFile2] = useState(null);
  const [uploadedFile3, setUploadedFile3] = useState(null);

  const handleFileInputChange1 = (event) => {
    const file = event.target.files[0];
    setUploadedFile1(file);
  };

  const handleFileInputChange2 = (event) => {
    const file = event.target.files[0];
    setUploadedFile2(file);
  };
  const handleFileInputChange3 = (event) => {
    const file = event.target.files[0];
    setUploadedFile3(file);
  };

  return (
    <>
      <Box>
        <Box sx={{ width: "600px" , mt: "10px",  }}>
          <Box sx={{ p: "40px" }} bgcolor={"white"} borderRadius={"8px"}>
            <Typography mb={"20px"} fontSize={"25px"} fontWeight={600}>
              Company Information
            </Typography>
            <Box>
              <Typography sx={{ color: "#707888" }}>Name of Company</Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Name of Company"
                variant="outlined"
                required
              />
            </Box>
            <FormControl
              sx={{
                borderRadius: "4px",
                minWidth: "100%",
                mt: "15px",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                defaultValue={"-"}
                displayEmpty
                required
              >
                <MenuItem value="-" disabled sx={{ color: "gray" }}>
                  legal structure
                </MenuItem>
                <MenuItem value={"Properterlip"}>Properiterlip</MenuItem>
                <MenuItem value={"LLP"}>LLP</MenuItem>
                <MenuItem value={"pvt.ltd"}>pvt.ltd</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ color: "#707888" }}>
                Business address
              </Typography>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                maxRows={4}
                size="small"
                placeholder="Business address"
                variant="outlined"
              />
            </Box>
            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ color: "#707888" }}>GST NO.</Typography>
              <TextField
                fullWidth
                required
                size="small"
                placeholder="GST NO."
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box sx={{ mt: "15px" }}>
                <Typography sx={{ color: "#707888" }}>
                  Upload GST.Certificate
                </Typography>
                <Button
                  bgcolor="white"
                  component="label"
                  role={undefined}
                  required
                  tabIndex={-1}
                  sx={{
                    width: "249px",
                    height: "100px",
                    bgcolor: "white",
                    border: "1px solid lightgray",
                    color: "#707888",
                  }}
                  startIcon={<CloudUploadIcon />}
                >
                  {uploadedFile1 ? uploadedFile1.name : "Upload file"}
                  <VisuallyHiddenInput
                    type="file"
                    onChange={handleFileInputChange1}
                  />
                </Button>
              </Box>

              <Box sx={{ mt: "15px" }}>
                <Typography sx={{ color: "#707888" }}>
                  Upload Incorperation Certificate
                </Typography>
                <Button
                  required
                  bgcolor="white"
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  sx={{
                    width: "249px",
                    color: "#707888",
                    height: "100px",
                    bgcolor: "white",
                    border: "1px solid lightgray",
                  }}
                  startIcon={<CloudUploadIcon />}
                >
                  {uploadedFile2 ? uploadedFile2.name : "Upload file"}
                  <VisuallyHiddenInput
                    type="file"
                    multiple={true}
                    onChange={handleFileInputChange2}
                  />
                </Button>
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ color: "#707888" }}>
                Social media Link
              </Typography>
              <TextField
                required
                fullWidth
                size="small"
                placeholder="Social media Link"
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "600px" , height: "547px", mt: "25px" }}>
          <Box
            sx={{ p: "40px", boxShadow: "0px 12px 32px 0x #1D20261A" }}
            bgcolor={"white"}
            borderRadius={"8px"}
          >
            <Typography pt={"2px"} fontSize={"20px"} fontWeight={700}>
              Financial Information
            </Typography>
            <Box mt="15px">
              <Typography sx={{ color: "#707888" }}> Branch Name</Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Branch Name"
                variant="outlined"
              />
            </Box>
            <Box mt="15px">
              <Typography sx={{ color: "#707888" }}>
                {" "}
                Name of Account
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Name of Account"
                variant="outlined"
              />
            </Box>
            <Box mt="15px">
              <Typography sx={{ color: "#707888" }}> Account No.</Typography>
              <TextField
                type="number"
                fullWidth
                size="small"
                placeholder="Account No."
                variant="outlined"
              />
            </Box>
            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ color: "#707888" }}>
                Upload cancle check
              </Typography>
              <Button
                bgcolor="white"
                component="label"
                role={undefined}
                tabIndex={-1}
                fullWidth
                sx={{
                  color: "#707888",
                  height: "100px",
                  bgcolor: "white",
                  border: "1px solid lightgray",
                }}
                startIcon={<CloudUploadIcon />}
              >
                {uploadedFile3 ? uploadedFile3.name : "Upload file"}
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleFileInputChange3}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Companyinfo;
