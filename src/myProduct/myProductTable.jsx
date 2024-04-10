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

const MyProductTable = () => {
  const [openRow, setOpenRow] = React.useState(null);

  const handleClick = (index) => {
    setOpenRow((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    {
      Name: "Wallet",
      Price: "200",
      Stock: "25",
    },
    {
      Name: "Bottle",
      Price: "200",
      Stock: "25",
    },
    {
      Name: "Frame",
      Price: "200",
      Stock: "25",
    },
  ];

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
                  <TableCell align="right">
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                {openRow === index && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Box sx={{ padding: "10px", height: "100%" }}>
                        <Typography>10</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyProductTable;
