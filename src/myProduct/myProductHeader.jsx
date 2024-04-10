import { Add, Search } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import FilterListIcon from "@mui/icons-material/FilterList";
import Heading from "../CommonComponent/Heading";

const MyProductHeader = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box>
      <Box>
        <Heading title={"My Product"}/>
        <Box
          sx={{
            my: "20px",
            bgcolor: "white",
            borderRadius: "10px",
            p: "20px",
            boxShadow: "0px 12px 32px #1E20261A",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              onChange={handleSearch}
              size="small"
              value={search}
              label={
                <div>
                  <Search />
                  Search
                </div>
              }
              sx={{ width: "300px" }}
            />
            <Button variant="outlined" startIcon={<Add />}>
              Add Product
            </Button>
          </Box>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button startIcon={<TuneIcon />} variant="outlined">
              Filter
            </Button>
            <Button>
              <FilterListIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProductHeader;
