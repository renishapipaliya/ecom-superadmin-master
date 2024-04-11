import { Button } from "@mui/material";
import React from "react";

const FieldButton = ({ title, icon,onClick }) => {
  return (
    <>
      <Button
        sx={{
          color: "white",
          bgcolor: "#222831",
          border: "1px solid black",
          "&:hover": {
            bgcolor: "#222831",
            color: "white",
          },
        }}
        startIcon={icon}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
};

export default FieldButton;
