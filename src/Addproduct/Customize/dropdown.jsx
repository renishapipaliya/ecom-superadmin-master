import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";

const Customdropdown = () => {
  const [rows, setRows] = useState([]);

  const handleAddVariant = () => {
    const newRow = {
      id: rows.length + 1,
      label: "",
      chams: "",
      price: "",
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Box>
          <Typography>Display lable</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Write display lable here..."
            size="small"
            variant="outlined"
            sx={{ width: "300px", mt: "5px" }}
            required
          />
        </Box>
        <Box>
          <Typography>Instruction</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Write instruction here..."
            size="small"
            variant="outlined"
            sx={{ width: "450px", mt: "5px" }}
            required
          />
        </Box>
        <Box sx={{ mt: "28px" }}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleAddVariant}
          >
            Add Variants
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: "30px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ bgcolor: "lightgray" }}>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Lable</TableCell>
                <TableCell align="center">Chams</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    <DehazeOutlinedIcon />
                  </TableCell>
                  <TableCell align="center">
                    <TextField placeholder="Enter Chams name.."></TextField>
                  </TableCell>
                  <TableCell align="center">{row.chams}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleDeleteRow(row.id)}>
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Customdropdown;
