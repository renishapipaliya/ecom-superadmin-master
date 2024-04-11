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
import { Delete } from "@mui/icons-material";

const Customdropdown = ({ setVisible }) => {
  const [rows, setRows] = useState([]);
  const [dropdownFileVisible, setDropdownFileVisible] = useState(true);

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

  const handleDelete = () => {
    setDropdownFileVisible(false);
    setVisible(false);
  };

  return (
    <Box display={dropdownFileVisible ? "block" : "none"}>
      <Typography sx={{ fontSize: "20px", fontWeight: 550, my: "20px" }}>
        DropDown
      </Typography>
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
            <Button sx={{ bgcolor: "white", color: "#222831", border: "1px solid #222831", "&:hover": { bgcolor:"#222831",color:"white"}}} startIcon={<AddIcon />}>
              Choose as Templet
            </Button>
          </Box>
          <Box>
            <Button sx={{ bgcolor: "white", color: "#222831", border: "1px solid #222831", "&:hover": { bgcolor: "#222831", color: "white" } }} startIcon={<AddIcon />}>
              Save as Templet
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Instruction</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Write instruction here..."
            size="small"
            variant="outlined"
            sx={{ width: "930px", mt: "5px" }}
            required
          />
        </Box>
        <Box sx={{ mt: "28px", display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              width: "180px", bgcolor: "white", color: "#222831", border:"1px solid #222831", "&:hover":{
              bgcolor:"#222831", color:"white"

            } }}
           
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
      <Box sx={{ display: "flex", justifyContent: "end", mt: "20px" }}>
        <Button
          sx={{
            bgcolor: "white", color: "#222831", border: "1px solid #222831", "&:hover": {
              bgcolor: "#222831", color: "white"
            },
          }}
          startIcon={<Delete />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};
export default Customdropdown;
