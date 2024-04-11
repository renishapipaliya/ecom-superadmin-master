import { Box, Button, FilledInput, Typography, alpha } from "@mui/material";
import React, { useState } from "react";
import Heading from "../CommonComponent/Heading";
import { MoreHoriz, Search, Tune } from "@mui/icons-material";
import { Grid, Paper, IconButton } from "@mui/material";

const OrderList = () => {
  const [status, setStatus] = useState("All");
  const date = new Date();
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Heading
          title={"Orders"}
          extraElements={
            <FilledInput
              size="small"
              placeholder="Search Orders"
              hiddenLabel
              startAdornment={<Search sx={{ mr: "4px" }} />}
              sx={{ overflow: "hidden", borderRadius: "8px", width: "20%" }}
              disableUnderline
            />
          }
        />

        <Box px={5} py={3} width={"100%"} height={"100%"} overflow={"auto"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Typography>Status:</Typography>
              {["All", "Active", "In-Active"].map((item, inx) => (
                <Button
                  size="small"
                  onClick={() => setStatus(item)}
                  key={inx}
                  variant="text"
                  sx={{
                    borderRadius: 5,
                    px: 3,
                    color: status === item ? "white" : "#222831",
                    border: `1.5px solid ${
                      status === item ? "#222831" : alpha("#000000", 0.25)
                    }`,
                    backgroundColor: status === item ? "#222831" : "transparent",
                    ":hover": {
                      backgroundColor: "#222831",
                      color: "white",
                      borderColor: "#222831",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Button
                startIcon={<Tune fontSize="small" />}
                size="small"
                sx={{
                  border: `1.5px solid ${alpha("#000000", 0.25)}`,
                  color: "black",
                  px: 2,
                }}
              >
                Filter
              </Button>
            </Box>
          </Box>
        </Box>

        {/* <TableContainer sx={{ px: 5, maxHeight: "70vh" }}>
          <Table
            stickyHeader
            sx={{
              width: "100%",
              tableLayout: "fixed",
              borderCollapse: "collapse",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "40%", borderBottom: 0 }}>
                  (0) Orders
                </TableCell>
                <TableCell sx={{ borderBottom: 0 }} align="center">
                  Price
                </TableCell>
                <TableCell sx={{ borderBottom: 0 }} align="center">
                  Location
                </TableCell>
                <TableCell sx={{ borderBottom: 0 }} align="center">
                  Date
                </TableCell>
                <TableCell sx={{ borderBottom: 0 }} align="center">
                  Status
                </TableCell>
                <TableCell sx={{ borderBottom: 0 }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                ".MuiTableRow-root": {
                  border: `1px solid ${alpha("#000000", 0.25)}`,
                  borderRight: 0,
                  borderLeft: 0,
                },
                "& .MuiTableRow-root td:first-child": {
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  border: `1px solid ${alpha("#000000", 0.25)}`,
                  borderRight: 0,
                },
                "& .MuiTableRow-root td:last-child": {
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  border: `1px solid ${alpha("#000000", 0.25)}`,
                  borderLeft: 0,
                },
              }}
            >
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <img
                    src="/image/Icon.png"
                    style={{
                      width: "120px",
                      objectFit: "contain",
                      aspectRatio: "16/9",
                    }}
                  />
                  <Box>
                    <Typography variant="body1">Title</Typography>
                    <Typography variant="body2">Description</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">₹ 500</TableCell>
                <TableCell align="center">Ahmedabad</TableCell>
                <TableCell align="center">
                  {date.getDate() +
                    " " +
                    date.toLocaleString("en-IN", { month: "short" }) +
                    " " +
                    date.getFullYear()}
                </TableCell>
                <TableCell align="center">
                  <Button color="success" variant="text">
                    Active
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <IconButton>
                    <MoreHoriz />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer> */}

        <Box sx={{ mx: "40px", my: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Orders</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Price</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Location</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Date</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>Status</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography></Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            mx: "20px",
            border: "1px solid lightgray",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #00000020",
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={4}>
              <Typography>Section 1</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Section 2</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Section 3</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Section 4</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>Section 5</Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default OrderList;
