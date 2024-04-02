import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const CustomText = ({setVisible}) => {
  const [textFieldVisible, setTextFieldVisible] = useState(true);

  const handleDelete = () => {
    setTextFieldVisible(false);
    setVisible(false);
  };

  return (
    <Box
      sx={{
        width: "1200px",
        mt: "20px",
        display: textFieldVisible ? "block" : "none",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 550,
          mt: "20px",
        }}
      >
        Customize Text
      </Typography>
      <Box sx={{ display: "flex", gap: "30px", mt: "20px" }}>
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
          <Box sx={{ display: "flex", justifyContent: "end", mt: "20px" }}>
            <Button
              variant="contained"
              startIcon={<Delete />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomText;
