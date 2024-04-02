import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Customdropdown = () => {
  const [rows, setRows] = useState([]);

  const defaultImage = "./image/Icon.png";
  const handleAddVariant = () => {
    const newRow = {
      id: String(rows.length + 1),
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

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Box>
            <Button size="small" variant="outlined" startIcon={<AddIcon />}>
              Choose as Templet
            </Button>
          </Box>
          <Box>
            <Button size="small" variant="outlined" startIcon={<AddIcon />}>
              Save as Templet
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "15px", mt: "10px" }}>
        <Box>
          <Typography>Instruction</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Write instruction here..."
            size="small"
            variant="outlined"
            sx={{ width: "825px", mt: "5px" }}
            required
          />
        </Box>
        <Box sx={{ mt: "28px", display: "flex", alignItems: "center" }}>
          <Button
            sx={{ width: "160px" }}
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleAddVariant}
          >
            Add Variants
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: "30px" }}>
        <DragDropContext onDragEnd={handleDragEnd}>
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
                  <TableCell align="center">Label</TableCell>
                  <TableCell align="center">Chams</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <Droppable droppableId="rows">
                {(provided) => (
                  <TableBody
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {rows.map((row, index) => (
                      <Draggable
                        key={row.id}
                        draggableId={row.id}
                        index={index}
                      >
                        {(provided) => (
                          <TableRow
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{ alignItems: "center" }}
                          >
                            <TableCell
                              sx={{
                                "&.css-8fdh2x-MuiTableCell-root": {
                                  width: "30%",
                                },
                              }}
                              align="left"
                            >
                              <Box>
                                <DehazeIcon />
                              </Box>
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{ display: "flex", gap: "10px" }}
                            >
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
                                  onChange={(event) =>
                                    handleImageUpload(event, row.id)
                                  }
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
                              <IconButton
                                onClick={() => handleDeleteRow(row.id)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </TableBody>
                )}
              </Droppable>
            </Table>
          </TableContainer>
        </DragDropContext>
      </Box>
    </Box>
  );
};
export default Customdropdown;
