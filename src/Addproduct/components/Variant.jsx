import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add,
  CurrencyRupee,
  Delete,
  Percent,
  SearchOutlined,
} from "@mui/icons-material";
import FieldButton from "../../CommonComponent/FieldButton";
import OutlineButton from "../../CommonComponent/OutlineButton";

const VariantPage = ({ nextValue }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nextVariantId, setNextVariantId] = useState(2);
  const [variants, setVariants] = useState([
    {
      id: 1,
      variant: "Color",
      value: "",
      color: "",
      discountType: "Percent",
      price: "",
      maxDiscount: "",
      image: null,
    },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const defaultImage = "/image/Icon.png";

  const handleAddVariant = () => {
    const newVariant = {
      id: nextVariantId,
      variant: "Color",
      value: "",
      color: "",
      discountType: "Percent",
      price: "",
      maxDiscount: "",
      image: null,
    };
    setVariants([...variants, newVariant]);
    setNextVariantId(nextVariantId + 1);
  };

  const handleVariantChange = (id, event) => {
    const selectedVariant = event.target.value;
    const updatedVariants = variants.map((variant) => {
      if (variant.id === id) {
        return {
          ...variant,
          variant: selectedVariant,
          discountType: selectedVariant === "Color" ? "Percent" : "Currency",
        };
      }
      return variant;
    });

    setVariants(updatedVariants);
  };

  const handleValueChange = (id, field, value) => {
    const updatedVariants = variants.map((variant) => {
      if (variant.id === id) {
        return { ...variant, [field]: value };
      }
      return variant;
    });
    setVariants(updatedVariants);
  };

  const handleImageUpload = (event, id) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedVariants = variants.map((variant) =>
        variant.id === id ? { ...variant, image: reader.result } : variant
      );
      setVariants(updatedVariants);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteVariant = (id) => {
    const updatedVariants = variants.filter((variant) => variant.id !== id);
    setVariants(updatedVariants);
  };

  const handleSave = () => {
    nextValue();
  };

  return (
    <Box
      bgcolor={"white"}
      height={"80vh"}
      boxShadow={"0px 12px 32px #1E20261A"}
      padding={"30px"}
      borderRadius={"5px"}
      width={"100%"}
    >
      <Box>
        <Typography fontSize={"25px"} fontWeight={600}>
          Product Variant
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingY: "20px",
        }}
      >
        <Box>
          <TextField
            sx={{ width: "550px" }}
            size="small"
            label={
              <Box>
                <SearchOutlined />
                Search
              </Box>
            }
            value={searchTerm}
            onChange={handleSearch}
          />
        </Box>
        <Box>
          <OutlineButton
            onClick={handleAddVariant}
            title={"Add Variant"}
            icon={<Add />}
          />
          <FieldButton onClick={handleSave} title={"Save"} />
        </Box>
      </Box>
      <Box
        sx={{ mt: "10px", border: "1px solid lightgray", borderRadius: "5px" }}
      >
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: "#EBF1FDE5" }}>
              <TableRow>
                <TableCell>VARIANT</TableCell>
                <TableCell>VALUE</TableCell>
                <TableCell>IMAGE</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>DISCOUNT</TableCell>
                <TableCell>MAX DISCOUNT</TableCell>
                <TableCell>STOCK</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {variants.map((variant) => (
                <TableRow key={variant.id}>
                  <TableCell>
                    <Select
                      size="small"
                      value={variant.variant}
                      onChange={(e) => handleVariantChange(variant.id, e)}
                    >
                      <MenuItem value="Color">Color</MenuItem>
                      <MenuItem value="Size">Size</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    {variant.variant === "Color" ? (
                      <TextField
                        size="small"
                        placeholder="Color"
                        value={variant.color}
                        onChange={(e) =>
                          handleValueChange(variant.id, "color", e.target.value)
                        }
                      />
                    ) : (
                      <TextField
                        size="small"
                        placeholder="Size"
                        value={variant.value}
                        onChange={(e) =>
                          handleValueChange(variant.id, "value", e.target.value)
                        }
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <label htmlFor={`upload-image-${variant.id}`}>
                      <input
                        type="file"
                        id={`upload-image-${variant.id}`}
                        accept="image/*"
                        onChange={(event) =>
                          handleImageUpload(event, variant.id)
                        }
                        style={{ display: "none" }}
                      />
                      <img
                        src={variant.image ? variant.image : defaultImage}
                        alt="image"
                        style={{
                          objectFit: "contain",
                          width: "90%",
                          cursor: "pointer",
                          aspectRatio: "16/9",
                        }}
                      />
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      placeholder="₹"
                      size="small"
                      sx={{ width: "80px" }}
                      value={variant.price}
                      onChange={(e) =>
                        handleValueChange(variant.id, "price", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Box display={"flex"}>
                      <TextField
                        size="small"
                        type="number"
                        placeholder="Discount"
                        sx={{ width: "150px" }}
                        InputProps={{
                          endAdornment: (
                            <Select size="small">
                              <MenuItem value="Percent">
                                <Percent sx={{ fontSize: "15px" }} />
                              </MenuItem>
                              <MenuItem value="Currency">
                                <CurrencyRupee sx={{ fontSize: "15px" }} />
                              </MenuItem>
                            </Select>
                          ),
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell size="small">
                    <TextField
                      size="small"
                      type="number"
                      placeholder="Max.discount"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" type="number" placeholder="10" />
                  </TableCell>
                  <TableCell padding="0px" width={"190px"}>
                    {"PRO-001-" +
                      variant.variant +
                      "-" +
                      (variant.variant === "Color"
                        ? variant.color
                        : variant.value)}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteVariant(variant.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default VariantPage;
