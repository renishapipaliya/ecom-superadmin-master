import React from 'react';
import {
    Box,
    Typography,
    TextField
  } from "@mui/material";

const CustomText = () => {
  return (
    <Box
    sx={{
        width: "1200px",
      }}
      >
     
     <Box sx={{ display: "flex", gap: "30px", }}>
          <Box>
            <Typography>Number of line</Typography>
            <TextField
              id="outlined-basic"
              placeholder='00'
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
              placeholder='00'
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "345px", mt: "10px" }}
              required
            />
          </Box>

          <Box sx={{mt: "13px"}}>
            <Typography></Typography>
            <TextField
              id="outlined-basic"
              size="small"
              placeholder='00'
              variant="outlined"
              sx={{ width: "345px",  mt: "20px" }}
              required
            />
          </Box>
        </Box>

         
     <Box sx={{ display: "flex", gap: "30px",mt: "20px"  }}>
          <Box>
            <Typography>Label</Typography>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              placeholder='Customise your Name'
              sx={{ width: "535px", mt: "10px"  }}
              required
            />
          </Box>

          <Box>
            <Typography>Sample</Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder='Meet'
              variant="outlined"
              sx={{ width: "535px", mt: "10px"  }}
              required
            />
          </Box>
        </Box>


        <Box sx={{ display: "flex", gap: "30px", mt: "20px" }}>
          <Box>
            <Typography>Instruction</Typography>
            <textarea
              id="outlined-basic"
              rows={"5"}
              className="border border-gray-300 w-[1100px] rounded p-2 mt-3"
              size="small"
              variant="outlined"
              placeholder="Write instruction here..."
              sx={{ width: "960px", mt: "10px"  }}
              required
            />
          </Box>
        </Box>

      </Box>
  )
}

export default CustomText