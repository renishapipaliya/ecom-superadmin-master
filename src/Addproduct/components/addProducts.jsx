import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import General from "./general"; // Adjust casing if necessary
import Shipping from "./shipping"; // Adjust casing if necessary
import Customize from "../Customize/Customize";
import VariantPage from "./Variant";
import Heading from "../../CommonComponent/Heading";
import Divider from "@mui/material/Divider";

const AddProduct = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Heading title={"Add Product"} />
          <Box sx={{ mx: "30px" }}>
            <Button
              sx={{
                m: "15px",
                color: "black",
                bgcolor: "white",
                border: "1px solid black",
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                color: "white",
                bgcolor: "#222831",
                border: "1px solid black",
                "&:hover": {
                  bgcolor: "black",
                  color: "white",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            width: "96%",
            typography: "body1",
            mt: "20px",
            mx: "24px",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                sx={{
                  bgcolor: "white",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 100px #00000014",
                }}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="General" value="1" />
                <Tab label="Variant" value="2" />
                <Tab label="Customize" value="3" />
                <Tab label="Shipping" value="4" />
              </TabList>
            </Box>
            <TabPanel sx={{ p: 0, pt: 2 }} value="1">
              <General />
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="2">
              <VariantPage />
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="3">
              <Customize />
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="4">
              <Shipping />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  );
};

export default AddProduct;
