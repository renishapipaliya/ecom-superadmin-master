import React from "react";
import Companyinfo from "../ManuFacture/Companyinfo";
import OwnerandContactinfo from "../ManuFacture/OwnerandContactinfo";
import { Box, Typography } from "@mui/material";
import Heading from "../CommonComponent/Heading";
import Divider from '@mui/material/Divider';

const ManufactureScreen = () => {
  return (
    <Box sx={{ p:"30px", bgcolor: "#EBF1FDE5" }} width={"1290px"}>
      {/* <Box>
        <Typography fontSize={"22px"} fontWeight={600} sx={{p:"10px"}}>
          Manufacture detail
        </Typography>
      <Divider/>
      </Box> */}
      <Heading
      title={"Manufacture"}/>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Companyinfo />
        <OwnerandContactinfo />
      </Box>
    </Box>
  );
};

export default ManufactureScreen;
