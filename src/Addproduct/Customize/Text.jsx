import React from "react";
import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";

const CustomText = () => {
  return (
    <Box
      sx={{
        width: "1200px",
        "&.css-8r7lw3":{height:"100vh",}
      }}
    >
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Box>
          <Typography>Number of line</Typography>
          <TextField
            id="outlined-basic"
            placeholder="1"
            size="small"
            variant="outlined"
            sx={{ width: "345px", mt: "10px" }}
            required
          />
        </Box>

        <Box>
          <Typography>Character limit</Typography>
          <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            type="number"
            placeholder="1"
            sx={{ width: "345px", mt: "10px" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="body2" color="#00000060">
                    Min
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <Typography></Typography>
          <TextField
            size="small"
            id="outlined-basic"
            type="number"
            variant="outlined"
            placeholder="100"
            sx={{ width: "345px", mt: "32px" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="body2" color="#00000060">
                    Max
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "30px", mt: "20px" }}>
        <Box>
          <Typography>Label</Typography>
          <TextField
            id="outlined-basic"
            size="small"
            variant="outlined"
            placeholder="Customise your Name"
            sx={{ width: "535px", mt: "10px" }}
            required
          />
        </Box>

        <Box>
          <Typography>Sample</Typography>
          <TextField
            size="small"
            id="outlined-basic"
            placeholder="Meet"
            variant="outlined"
            sx={{ width: "535px", mt: "10px" }}
            required
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "30px", mt: "20px" }}>
        <Box>
          <Typography>Instruction</Typography>
          <textarea
            id="outlined-basic"
            rows={"4"}
            className="border border-gray-300 w-[1100px] rounded p-2 mt-3"
            size="small"
            variant="outlined"
            placeholder="Write instruction here..."
            sx={{ width: "960px", mt: "10px" }}
            required
          />
        </Box>
      </Box>
        <Box sx={{display:"flex",justifyContent:"end",mt:"20px"}}>
          <Button variant="contained">save</Button>
        </Box>
    </Box>
  );
};

export default CustomText;
