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
    <Box maxWidth={"1440px"} width={"1200px"} height={"100vh"}>
      <Box
        sx={{
          display: "flex",
          gap: "25px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            p: "100px",
            width: "1200px",
          }}
          bgcolor={"white"}
          borderRadius={"5px"}
          boxShadow={"0px 12px 32px 0px #1E20261A"}
          display={"flex"}
          justifyContent={"center"}
        >
          {!textVisible && !imageVisible && !dropdownVisible && (
            <Button
              variant="contained"
              sx={{
                bgcolor: "lightgray",
                color: "black",
                textAlign: "center",
              }}
              onClick={handleDialogOpen}
            >
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
                  bgcolor: "lightblue",
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
                  }}
                >
                  Text
                </Typography>
              </Box>
            </Button>

            <Button onClick={handleimage}>
              <Box
                sx={{
                  bgcolor: "lightblue",
                  height: "150px",
                  width: "150px",
                  borderRadius: "5px",
                }}
                boxShadow={"0px 12px 32px #1E20261A"}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  Image
                </Typography>
              </Box>
            </Button>

            <Button onClick={handledropdown}>
              <Box
                sx={{
                  bgcolor: "lightblue",
                  height: "150px",
                  width: "150px",
                  borderRadius: "5px",
                }}
                boxShadow={"0px 12px 32px #1E20261A"}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
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
