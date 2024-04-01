import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Typography } from "@mui/material";
import General from "./general";
import Shipping from "./shipping";
import Customize from "../Customize/Customize";
import VariantPage from "./Variant";

const AddProduct = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ padding: "30px" }}  width={"1250px"}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ fontSize: "32px", fontWeight: "bold" }}
          >
            Add Products
          </Typography>
          <Box sx={{ marginRight: "20px" }}>
            <Button sx={{ mx: "15px" }} variant="outlined">
              Cancel
            </Button>
            <Button variant="contained">Save</Button>
          </Box>
        </Box>
        <Box sx={{ width: "100%", typography: "body1", mt: "10px" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                sx={{ bgcolor: "white", borderRadius: "10px" }}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="general" value="1" />
                <Tab label="variant" value="2" />
                <Tab label="Customize" value="3" />
                <Tab label="shipping" value="4" />
              </TabList>
            </Box>
            <TabPanel sx={{p:0,pt:2}} value="1">
              <General />
            </TabPanel>
            <TabPanel sx={{p:0,pt:2}} value="2">
              <VariantPage />
            </TabPanel>
            <TabPanel sx={{p:0,pt:2}} value="3">
              <Customize />
            </TabPanel>
            <TabPanel sx={{p:0,pt:2}} value="4">
              <Shipping />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  );
};
export default AddProduct;
