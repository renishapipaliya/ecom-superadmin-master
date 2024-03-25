import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
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
import { useState } from "react";

const General = () => {
  const [age, setAge] = useState("");

  const handleFileInputChange1 = (event) => {
    const file = event.target.files[0];
    setUploadedFile1(file);
  };

  const handleFileInputChange2 = (event) => {
    const file = event.target.files[0];
    setUploadedFile2(file);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", gap: "25px" ,maxWidth:"1024px" , width:"1024px" }}>
      <Box
        bgcolor={"white"}
        borderRadius={"5px"}
        width={"550px"}
        p={"30px"}
        boxShadow={"0px 12px 32px 0px #1E20261A"}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            Product information
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "black", mt: "20px" }}>
            Name
          </Typography>
          <TextField
            size="small"
            id="outlined-basic"
            placeholder="Product Name"
            variant="outlined"
            maxRows={"4"}
            sx={{ mt: "2px" }}
          />
          <Box sx={{ mt: "15px" }}>
            <Typography sx={{ fontSize: "15px", color: "black", mt: "2px" }}>
              Description
            </Typography>
            <textarea
              rows={"3"}
              width="100%"
              cols={"75"}
              className="border border-gray-300 w-[100%] rounded p-2"
              placeholder="Description"
              sx={{ mt: "2px" }}
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <Typography sx={{ fontSize: "15px", color: "black", mt: "2px" }}>
              Points
            </Typography>
            <TextField
              multiline
              rows={4}
              maxRows={4}
              size="small"
              id="outlined-basic"
              placeholder="Bullte Points"
              variant="outlined"
              sx={{ mt: "2px", width: "100%" }}
            />
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography sx={{ fontSize: "15px", color: "black", mt: "2px" }}>
              Categorys
            </Typography>
            <FormControl size="small" sx={{ mt: "2px", width: "100%" }}>
              <Select value={age} onChange={handleChange} displayEmpty>
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
            <Typography sx={{ fontSize: "15px", color: "black", mt: "2px" }}>
              Product For...
            </Typography>
            <FormControl size="small" sx={{ mt: "2px", width: "100%" }}>
              <Select value={age} onChange={handleChange} displayEmpty>
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
                <MenuItem sx={{ bgcolor: "white" }} value={30}>
                  Other
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography sx={{ fontSize: "15px", color: "black", mt: "2px" }}>
              Image
            </Typography>
            <TextField
              type="file"
              size="small"
              variant="outlined"
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: "100%",
                },
              }}
            />
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography sx={{ fontSize: "15px", color: "black", mt: "2px" }}>
              Select Multiple images
            </Typography>
            <TextField
              type="file"
              size="small"
              placeholder=""
              variant="outlined"
              inputProps={{ multiple: true }}
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
          width={"450px"}
          boxShadow={"0px 12px 32px 0px #1E20261A"}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
            Pricing
          </Typography>
          <Box sx={{ mt: "10px" }}>
            <Typography sx={{ color: "black" }}>Base Price</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Product Name"
              variant="outlined"
              type="number"
              sx={{ mt: "2px", width: "100%" }}
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <Typography sx={{ color: "black" }}>Discount</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Discounted"
              variant="outlined"
              type="number"
              sx={{ mt: "2px", width: "100%" }}
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <Typography sx={{ color: "black" }}>Discounted Price</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Discounted Price"
              variant="outlined"
              type="number"
              sx={{ mt: "2px", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default General;
