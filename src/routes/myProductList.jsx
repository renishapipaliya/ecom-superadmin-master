import { Box } from "@mui/material";
import React from "react";
import MyProductHeader from "../myProduct/myProductHeader";
import MyProductTable from "../myProduct/myProductTable";

const MyProductList = () => {
  return (
    <Box
      sx={{ bgcolor: "#E8F1FD" }}
      width={"1300px"}
      maxWidth={"1440px"}
      height={"100vh"}
      padding={"40px"}
    >
      <MyProductHeader/>
      <MyProductTable />
    </Box>
  );
};

export default MyProductList;
