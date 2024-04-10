import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Divider, Typography } from "@mui/material";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Add, Factory, ViewList } from "@mui/icons-material";
import AddProductScreen from "./routes/AddProductScreen";
import ManufactureScreen from "./routes/ManuFactureScreen";
import CategoryScreen from "./routes/categoryScreen";
import CategoryIcon from "@mui/icons-material/Category";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import MyProductList from "./routes/myProductList";
import OrderList from "./routes/OrderList";
import { alpha } from "@material-ui/core";

const routePath = [
  {
    path: "",
    name: "AddProduct",
    icon: <Add />,
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
  {
    path: "orderList",
    name: "Orders",
    icon: <ViewList />,
  },
];

const theme = createTheme({
  palette: {
    text: {
      gray: "#969696",
      dark: "#000000",
      light: "#ffffff",
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
        width: "13%",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        gap: 3,
        py: 5,
        bgcolor: "black",
      }}
    >
      <Typography
        color={"white"}
        fontSize={30}
        fontWeight={600}
        textAlign={"start"}
        ml={2}
        letterSpacing={2}
      >
        GREETO.
      </Typography>
      <Divider sx={{ width: "100%", borderColor: alpha("#ffffff", 0.2) }} />
      {routePath.map((item) => (
        <>
          {item.path === "orderList" && (
            <Divider
              sx={{ width: "100%", borderColor: alpha("#ffffff", 0.2) }}
            />
          )}
          <Box
            key={item.path}
            sx={{
              bgcolor:
                location.pathname === `/${item.path}` ? "white" : "black",
              color: location.pathname === `/${item.path}` ? "black" : "white",
              py: 1,
              borderRadius: 6,
              px: 2,
              mx: 1,
            }}
          >
            <Link
              to={`/${item.path}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Box display={"flex"} gap={1}>
                {item.icon}
                <Typography>{item.name}</Typography>
              </Box>
            </Link>
          </Box>
        </>
      ))}
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"} width={"100%"}>
        <Navbar />
        <Box
          fontFamily={"Poppins"}
          bgcolor={"white"}
          flex={1}
          height={"100vh"}
          overflow={"auto"}
        >
          <Routes>
            <Route path="/" element={<AddProductScreen />} />
            <Route path="/manufactureScreen" element={<ManufactureScreen />} />
            <Route path="/categoryScreen" element={<CategoryScreen />} />
            <Route path="/MyProductList" element={<MyProductList />} />
            <Route path="/orderList" element={<OrderList />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
