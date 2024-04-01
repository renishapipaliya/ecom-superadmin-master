import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Customdropdown = () => {
  const [rows, setRows] = useState([]);

  const [defaultImage, setDefaultImage] = useState("./image/Icon.png");

  const handleAddVariant = () => {
    const newRow = {
      id: rows.length + 1,
      label: "",
      chams: "",
      price: "",
      image: null,
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleImageUpload = (event, id) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedRows = rows.map((row) =>
        row.id === id ? { ...row, image: reader.result } : row
      );
      setRows(updatedRows);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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

        <Box sx={{ mt: "28px" }}>
          <Button
            sx={{
              height: "38px",
              width: "200px",
              marginLeft: "2%",
              fontSize: "13px",
              ml: "320px",
            }}
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Choose as Templet
          </Button>
        </Box>
        <Box sx={{ mt: "28px" }}>
          <Button
            sx={{
              height: "38px",
              width: "200px",
              marginLeft: "2%",
              fontSize: "13px",
            }}
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Save as Templet
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "30px", mt: "10px" }}>
        <Box>
          <Typography>Instruction</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Write instruction here..."
            size="small"
            variant="outlined"
            sx={{ width: "900px", mt: "5px" }}
            required
          />
        </Box>
        <Box sx={{ mt: "28px" }}>
          <Button
            sx={{
              height: "38px",
              width: "150px",
              marginLeft: "2%",
              fontSize: "13px",
            }}
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleAddVariant}
          >
            Add Variants
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: "30px" }}>
        <TableContainer sx={{ tableLayout: "fixed" }}>
          <Table
            sx={{ minWidth: 650, tableLayout: "fixed" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead sx={{ bgcolor: "lightgray" }}>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ "&.css-fp0xi9-MuiTableCell-root": { width: "30%" } }}
                ></TableCell>
                <TableCell align="center">Lable</TableCell>
                <TableCell align="center">Chams</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ alignItems: "center" }}>
                  <TableCell
                    sx={{ "&.css-8fdh2x-MuiTableCell-root": { width: "30%" } }}
                    align="left"
                  >
                    <Box>
                      <DehazeIcon />
                    </Box>
                  </TableCell>
                  <TableCell align="left" sx={{ display: "flex", gap: "10px" }}>
                    <Box>
                      <TextField
                        sx={{ py: "6px" }}
                        size="small"
                        placeholder="Enter Chams name.."
                      ></TextField>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <label htmlFor={`upload-image-${row.id}`}>
                      <input
                        type="file"
                        id={`upload-image-${row.id}`}
                        accept="image/*"
                        onChange={(event) => handleImageUpload(event, row.id)}
                        style={{ display: "none" }}
                      />
                      <img
                        src={row.image ? row.image : defaultImage}
                        alt="image"
                        style={{
                          objectFit: "contain",
                          height: "40%",
                          width: "40%",
                          cursor: "pointer",
                          aspectRatio: "16/9",
                        }}
                      />
                    </label>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      size="small"
                      placeholder="00"
                      sx={{ width: "70px" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDeleteRow(row.id)}>
                      <DeleteIcon />
                    </IconButton>
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
