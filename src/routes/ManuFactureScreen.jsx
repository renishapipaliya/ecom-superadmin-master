import React from "react";
import Companyinfo from "../ManuFacture/Companyinfo";
import OwnerandContactinfo from "../ManuFacture/OwnerandContactinfo";
import { Box } from "@mui/material";

const ManufactureScreen = () => {
  return (
    <Box sx={{ p:"30px", bgcolor: "#EBF1FDE5" }} width={"1300px"}>
      <Box fontSize={"30px"} fontWeight={600}>
        Manufacture detail
      </Box>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <Companyinfo />
        <OwnerandContactinfo />
      </Box>
    </Box>
  );
};

export default ManufactureScreen;
