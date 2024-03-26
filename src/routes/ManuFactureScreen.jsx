import React from "react";
import Companyinfo from "../ManuFacture/Companyinfo";
import OwnerandContactinfo from "../ManuFacture/OwnerandContactinfo";

import { Box } from "@mui/material";

const ManufactureScreen = () => {
  return (
    <Box sx={{ p:"40px" ,bgcolor:"#EBF1FDE5"}}>
      <Box fontSize={"32px"} fontWeight={600}>
        Manufacture Details
      </Box>
      <Box display={"flex"} gap={"25px"}>
        <Companyinfo />
        <OwnerandContactinfo />
      </Box>
    </Box>
  );
};

export default ManufactureScreen;
