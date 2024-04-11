import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const MyProductTable = () => {
  const [openRow, setOpenRow] = React.useState(null);
  const handleClick = (index) => {
    setOpenRow((prevIndex) => (prevIndex === index ? null : index));
  };
 
  
  const [data, setData] = React.useState([
    {
      Name: "Wallet",
      Price: "200",
      Stock: "25",
      Variants: [
        {
          variantname: "Red Wallet",
          variantprice: "300",
          variantstock: "3",
        },
        {
          variantname: "Blue Wallet",
          variantprice: "250",
          variantstock: "5",
        },
      ],
    },
    {
      Name: "Bottle",
      Price: "260",
      Stock: "25",
      Variants: [
        {
          variantname: "Red bottle",
          variantprice: "300",
          variantstock: "3",
        },
        {
          variantname: "Blue Bottle",
          variantprice: "250",
          variantstock: "5",
        },
      ],
    },
    {
      Name: "Frame",
      Price: "280",
      Stock: "25",
      Variants: [
        {
          variantname: "Red frame",
          variantprice: "300",
          variantstock: "3",
        },
        {
          variantname: "Blue frame",
          variantprice: "250",
          variantstock: "2222",
        },
      ],
    },
  ]);
  return (
    <Box sx={{ mt: "30px", mx: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <IconButton onClick={() => handleClick(index)}>
                      {openRow === index ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <KeyboardArrowRightIcon />
                      )}
                    </IconButton>
                    {item.Name}
                  </TableCell>
                  <TableCell align="center">
                   
                    <TextField
                      placeholder={item.Price}
                      type="number"
                      variant="outlined"
                      sx={{
                        width: "200px",
                        "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                          { height: "20px" },
                      }}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      placeholder={item.Stock}
                      variant="outlined"
                      sx={{
                        width: "200px",
                        "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                          { height: "20px" },
                      }}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right"></TableCell>
                 
                </TableRow>
                {openRow === index &&
                  item.Variants.map((variant, variantIndex) => (
                    <TableRow key={variantIndex}>
                      <TableCell>{variant.variantname}</TableCell>
                      <TableCell align="center">
                        {variant.variantprice}
                      </TableCell>
                      <TableCell align="center">
                        {variant.variantstock}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                        <ModeEditOutlineIcon />
                        </IconButton>
                        <IconButton>
                        <Delete />
                        </IconButton>

                      </TableCell>
                      
                      
                      
                    </TableRow>
                  ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default MyProductTable;
