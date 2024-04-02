import React, { useState, useEffect } from "react";
import CustomText from "./Text";
import Customdropdown from "./dropdown";
import Customimage from "./image";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ImageLogo from "../components/images/Imagelogo.png";
import FontDownloadIcon from "@mui/icons-material/FontDownload";

const Customize = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setimageVisible] = useState(false);
  const [dropdownVisible, setdropdownVisible] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleText = () => {
    setTextVisible(true);
    setOpenDialog(false);
  };
  const handleimage = () => {
    setimageVisible(true);
    setOpenDialog(false);
  };
  const handledropdown = () => {
    setdropdownVisible(true);
    setOpenDialog(false);
  };

  return (
    <Box maxWidth={"1440px"} width={"1200px"} height={"80vh"}>
      <Box
        sx={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Box
          padding={"100px"}
          bgcolor={"white"}
          borderRadius={"5px"}
          boxShadow={"0px 12px 32px 0px #1E20261A"}
          display={"flex"}
          width={"99%"}
          justifyContent={"center"}
        >
          {!textVisible && !imageVisible && !dropdownVisible && (
            <Button variant="outlined" onClick={handleDialogOpen}>
              Add Customisation
            </Button>
          )}
          {textVisible && <CustomText />}
          {imageVisible && <Customimage />}
          {dropdownVisible && <Customdropdown />}
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle sx={{ width: 400 }}>Add Customisation</DialogTitle>
        <DialogContent>
          <Typography></Typography>
        </DialogContent>
        <DialogContent>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Button onClick={handleText}>
              <Box
                sx={{
                  bgcolor: "#007F7380",
                  height: "150px",
                  width: "150px",
                  borderRadius: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                boxShadow={"0px 12px 32px #1E20261A"}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "white",
                    flexDirection: "column",
                  }}
                >
                  <FontDownloadIcon fontSize="large" />
                  <Typography fontSize={"20px"} fontWeight={550} mt={"5px"}>
                    Text
                  </Typography>
                </Typography>
              </Box>
            </Button>

            <Button onClick={handleimage}>
              <Box
                sx={{
                  bgcolor: "#D3D3D390",
                  height: "150px",
                  width: "150px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                boxShadow={"0px 12px 32px #1E20261A"}
              >
                <img src={ImageLogo} alt="" className="w-16"></img>
                <Typography sx={{ color: "black", fontWeight: 600 }}>
                  Image
                </Typography>
              </Box>
            </Button>

            <Button onClick={handledropdown}>
              <Box
                sx={{
                  bgcolor: "#E8751A50",
                  height: "150px",
                  width: "150px",
                  borderRadius: "5px",
                  color: "white",
                }}
                boxShadow={"0px 12px 32px #1E20261A"}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "black",
                    fontWeight: "550",
                  }}
                >
                  Dropdown
                </Typography>
              </Box>
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Customize;
