import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Factory } from "@mui/icons-material";
import AddProductScreen from "./routes/AddProductScreen";
import ManufactureScreen from "./routes/ManuFactureScreen";
import PersonIcon from "@mui/icons-material/Person";
import CategoryScreen from "./routes/categoryScreen";
import CategoryIcon from "@mui/icons-material/Category";
import MyProductHeader from "./myProduct/myProductHeader";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import MyProductList from "./routes/myProductList";

const routePath = [
  {
    path: "",
    name: "AddProduct",
    icon: <PersonIcon />,
  },
  {
    path: "categoryScreen",
    name: "Category",
    icon: <CategoryIcon />,
  },
  {
    path: "manufactureScreen",
    name: "Manufacture",
    icon: <Factory />,
  },
  {
    path: "MyProductList",
    name: "MyProduct",
    icon: <PlaylistAddCheckIcon />,
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F79E0",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const Navbar = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        width: "15%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        py: 5,
        px: 2,
        boxShadow: "5px 0px 32px #1E20261A",
      }}
    >
      <Typography
        color={"primary.main"}
        fontSize={30}
        fontWeight={600}
        textAlign={"center"}
        pb={2}
      >
        GREETO
      </Typography>
      {routePath.map((item) => (
        <Box
          key={item.path}
          sx={{
            bgcolor:
              location.pathname === `/${item.path}` ? "#cfe5ff" : "transparent",
            color:
              location.pathname === `/${item.path}` ? "#1F79E0" : "#4E5566",
            ":hover": { bgcolor: "#cfe5ff", color: "#1F79E0" },
            p: 1,
            borderRadius: 6,
          }}
        >
          <Link
            to={`/${item.path}`}
            style={{
              textDecoration: "none",
              backgroundColor:
                location.pathname === `/${item.path}`
                  ? "#cfe5ff"
                  : "transparent",
              color:
                location.pathname === `/${item.path}` ? "#1F79E0" : "#4E5566",
            }}
          >
            <Box display={"flex"} gap={1}>
              {item.icon}
              <Typography>{item.name}</Typography>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"}>
        <Navbar />
        <Box fontFamily={"Poppins"} maxWidth={"1440px"} width={"1300px"}>
          <Routes>
            <Route path="/" element={<AddProductScreen />} />
            <Route path="/manufactureScreen" element={<ManufactureScreen />} />
            <Route path="/categoryScreen" element={<CategoryScreen />} />
            <Route path="/MyProductList" element={<MyProductList />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
