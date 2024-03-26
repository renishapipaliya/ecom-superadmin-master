import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Shipping = () => {
  return (
    <Box maxWidth={"1024px"} width={"1024px"} height={"100vh"}>
      <Box
        sx={{
          bgcolor: "white",
          padding: "30px",
          boxShadow: "0px 12px 32px 0px #1E20261A",
          borderRadius: "5px",
        }}
      >
        <Typography fontSize={"25px"} marginBottom={"20px"} fontWeight={600}>
          Shipping
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "#707888" }}>
          Weight
        </Typography>
        <TextField
          size="small"
          id="outlined-basic"
          placeholder="Product weight"
          variant="outlined"
          sx={{ mt: "2px", width: "48%" }}
        />
        <FormHelperText>Set a product weight in kilograms (kg).</FormHelperText>
        <Box sx={{ bgcolor: "white", mt: "20px",display:"flex",gap:"20px"}}>
            <Box>
            <Typography sx={{ fontSize: "15px",color: "#707888" }}>Dimension</Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="Width (W)"
                variant="outlined"
                sx={{ mt: "2px" }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "15px",color: "#707888" }}>Hight</Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="Hight (H)"
                variant="outlined"
                sx={{ mt: "2px" }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "15px",color: "#707888" }}>Length</Typography>
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="Length (L)"
                variant="outlined"
                sx={{ mt: "2px" }}
              />
            </Box>
        </Box>
        <FormHelperText>
          Enter the product dimensions in centimeters (cm).
        </FormHelperText>
        <Box sx={{ display: "flex", justifyContent: "end", padding: "10px" }}>
          <Button sx={{ mt: "20px" }} variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Shipping;
