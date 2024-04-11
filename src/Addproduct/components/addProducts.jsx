import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import General from "./general";
import Shipping from "./shipping";
import Customize from "../Customize/Customize";
import VariantPage from "./Variant";
import Heading from "../../CommonComponent/Heading";
import Divider from "@mui/material/Divider";
import FieldButton from "../../CommonComponent/FieldButton";
import OutlineButton from "../../CommonComponent/OutlineButton";

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
            <OutlineButton title={"Cancel"} />
            <FieldButton title={"Save"} />
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
              <General setValue={setValue} />
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
