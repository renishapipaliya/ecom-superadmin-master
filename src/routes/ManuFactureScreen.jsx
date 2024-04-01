import React from "react";
import Companyinfo from "../ManuFacture/Companyinfo";
import OwnerandContactinfo from "../ManuFacture/OwnerandContactinfo";
import { Box, Typography } from "@mui/material";

const ManufactureScreen = () => {
  return (
    <Box sx={{ p: "30px", bgcolor: "#EBF1FDE5" }} width={"1300px"}>
      <Box>
        <Typography fontSize={"30px"} fontWeight={600} ml={"60px"}>
          Manufacture detail
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <Companyinfo />
        <OwnerandContactinfo />
      </Box>
    </Box>
  );
};

export default ManufactureScreen;
