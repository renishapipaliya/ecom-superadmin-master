// header.jsx
import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button, Switch, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Add } from "@mui/icons-material";
import Heading from "../CommonComponent/Heading";

const Header = ({
  filteredCategories,
  handleOpen,
  searchTerm,
  handleRefresh,
  handleSearch,
  handleSwitch,
  activeUser,
}) => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Heading title={"Categories"} />
          {/* <Button
            size="small"
            variant="outlined"
            onClick={handleOpen}
            startIcon={<Add />}
          >
            ADD CATEGORY
          </Button> */}
        </Box>
        <Box sx={{ margin: "20px", boxShadow: "0px 0px 70px #00000014" }}>
          <Box
            sx={{
              p: 2,
              my: 3,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "white",
              boxShadow: "0px 12px 32px 0x #1D20261A",
            }}
          >
            <Box className="flex" alignItems={"center"}>
              <FilterAltOutlinedIcon sx={{ my: 2, mx: 1 }} />
              <TextField
                size="small"
                label={
                  <Box>
                    <SearchOutlinedIcon />
                    Search
                  </Box>
                }
                value={searchTerm}
                onChange={handleSearch}
              />
              <Switch
                sx={{ my: 1 }}
                onChange={handleSwitch}
                checked={activeUser}
              />
              <h1 className="my-auto">Active Categories</h1>
            </Box>
            <Box className="my-auto flex gap-3 items-center">
              <h1>Total ({filteredCategories.length}) Categories</h1>
              <IconButton onClick={handleRefresh}>
                <RefreshIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
