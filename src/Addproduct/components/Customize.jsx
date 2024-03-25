import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Checkbox,
} from "@mui/material";
import I1 from "./images/camera.jpg";
import I2 from "./images/Airoplan.jpg";
import I3 from "./images/car.jpg";
import I4 from "./images/king.jpg";
import I5 from "./images/queen.jpg";
import I6 from "./images/love.jpg";
import I7 from "./images/music.jpg";
import I8 from "./images/plam.jpg";

const Customize = () => {
  const [selectedCharms, setSelectedCharms] = useState([]);
  const [singleCharm, setSingleCharm] = useState("");
  const [combinedCharms, setCombinedCharms] = useState([]);

  const menu = [
    {
      id: "1.",
      img: I1,
      name: "Camera",
    },
    {
      id: "2.",
      img: I2,
      name: "Airoplan",
    },
    {
      id: "3.",
      img: I3,
      name: "Car",
    },
    {
      id: "4.",
      img: I4,
      name: "King",
    },
    {
      id: "5.",
      img: I5,
      name: "Queen",
    },
    {
      id: "6.",
      img: I6,
      name: "Love",
    },
    {
      id: "7.",
      img: I7,
      name: "Music",
    },
    {
      id: "8.",
      img: I8,
      name: "Plam",
    },
  ];


  useEffect(() => {
    setCombinedCharms([...selectedCharms, singleCharm].filter(Boolean));
  }, [selectedCharms, singleCharm]);

  const handleSingleCharmChange = (e) => {
    setSingleCharm(e.target.value);
  };

  const handleSelectedCharmsChange = (e) => {
    setSelectedCharms(e.target.value);
  };
  return (
    <Box maxWidth={"1024px"} width={"1024px"} height={"100vh"}>
      <Box
        sx={{
          display: "flex",
          gap: "25px",
          width: "100%",
          boxShadow: "0px 12px 32px 0px #1E20261A",
        }}
      >
        <Box
          sx={{
            p: "40px",
            width: "500px",
            boxShadow: "0px 12px 32px 0x #1D20261A",
          }}
          bgcolor={"white"}
          borderRadius={"5px"}
        >
          <Typography pt={"2px"} fontSize={"25px"} fontWeight={700}>
            Customize Name And Photo
          </Typography>

          <FormControl
            sx={{
              borderRadius: "4px",
              minWidth: "100%",
              mt: "15px",
            }}
          >
            <Typography sx={{ color: "#707888" }}>
              Customize Your Name
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Customize Your Name"
              variant="outlined"
              sx={{ mt: "2px" }}
            />
          </FormControl>
          <Box sx={{ mt: "15px" }}>
            <Typography sx={{ color: "#707888" }}>Upload Photo</Typography>
            <TextField
              fullWidth
              type="file"
              size="small"
              placeholder=""
              variant="outlined"
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: "100%",
                },
                mt: "2px",
              }}
            />
          </Box>
          <Box sx={{ mt: "15px" }}>
            <Typography sx={{ color: "#707888" }}>
              Upload Maximum Photos
            </Typography>
            <TextField
              fullWidth
              type="file"
              size="small"
              placeholder=""
              variant="outlined"
              inputProps={{ multiple: true }}
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                  height: "100%",
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ width: "550px" }}>
          <Box
            sx={{ p: "40px", boxShadow: "0px 12px 32px 0x #1D20261A" }}
            bgcolor={"white"}
            borderRadius={"8px"}
          >
            <Typography pt={"2px"} fontSize={"20px"} fontWeight={700}>
              Charms
            </Typography>
            <FormControl
              sx={{
                borderRadius: "4px",
                minWidth: "100%",
                mt: "15px",
              }}
            >
                <Typography sx={{ color: "#707888" }}>
              Select Charms
            </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                value={singleCharm}
                onChange={(e) => setSingleCharm(e.target.value)}
              >
                <MenuItem disabled>Choose Charms</MenuItem>
                {menu.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    <ListItemIcon>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: 28, height: 28 }}
                      />
                      <ListItemText
                        sx={{ mx: "10px", color: "black" }}
                        primary={item.name}
                      />
                    </ListItemIcon>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              sx={{
                borderRadius: "4px",
                minWidth: "100%",
                mt: "15px",
              }}
            >
              <Typography sx={{ color: "#707888" }}>
              Select Multiple Charms
            </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                defaultValue={"-"}
                multiple
                value={selectedCharms}
                onChange={(e) => setSelectedCharms(e.target.value)}
                renderValue={(selected) => selected.join(", ")}
              >
                <MenuItem value="-" disabled>
                  Choose Maximum Charms
                </MenuItem>
                {menu.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    <ListItemIcon>
                    <div className="from-check">
                      <input type="checkbox" className="from-checkbox-input"/>
                      <label className="from-checkbox-label ms-2">{menu.name}</label>
                    </div>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: 28, height: 28 }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ pt: "40px", fontWeight: 560 }}>
                Selected Charms List
              </Typography>
              <TableContainer sx={{ mt: "15px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { combinedCharms.map((charm, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src={menu.find((item) => item.name === charm)?.img}
                            alt={charm}
                            style={{ width: 30, height: 30 }}
                          />
                          {charm}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Customize;
