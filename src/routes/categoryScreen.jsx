import React, { useState } from "react";
import CategoryTable from "../categories/CategoryTable";
import Header from "../categories/Header";
import Dialogbox from "../categories/Dialogbox";
import { Box } from "@mui/material";

const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    status: true,
  });
  const [activeUser, setActiveUser] = useState(false);

  const handleOpenDeleteDialog = (index) => {
    setDeleteIndex(index);
    setDeleteOpen(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditCategory = (index) => {
    const editedCategory = categories[index];
    setFormData(editedCategory);
    setEditIndex(index);
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleClose = () => {
    setOpen(false);
    setEditIndex(null);
    setFormData({
      id: null,
      name: "",
      status: true,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseDeleteDialog = () => {
    setDeleteOpen(false);
    setDeleteIndex(null);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      handleDeleteCategory(deleteIndex);
      handleCloseDeleteDialog();
    }
  };

  const handleSwitch = () => {
    setActiveUser(!activeUser);
  };

  const handleAddCategory = () => {
    if (formData.name === "") {
      return;
    }
    if (editIndex !== null) {
      const updatedCategories = [...categories];
      updatedCategories[editIndex] = formData;
      setCategories(updatedCategories);
      handleClose();
      return;
    }
    console.log(formData);

    setCategories([...categories, formData]);
    handleClose();
  };
  const filteredCategories = searchTerm
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categories;

  const handleRefresh = () => {
    setSearchTerm("");
  };

  const handleSwitchChange = (index) => {
    const updatedData = filteredCategories.filter((item) => {
      if (item === index) {
        item.status = !item.status;
        return true;
      }
      return true;
    });
    setCategories(updatedData);
  };
  return (
    <Box sx={{padding:"20px"}}>
      <Header
        filteredCategories={filteredCategories}
        searchTerm={searchTerm}
        handleRefresh={handleRefresh}
        open={open}
        handleOpen={handleOpen}
        handleSearch={handleSearch}
        handleSwitch={handleSwitch}
        activeUser={activeUser}
      />
      <CategoryTable
        filteredCategories={filteredCategories}
        handleClose={handleClose}
        categories={categories}
        formData={formData}
        handleChange={handleChange}
        handleOpen={handleOpen}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        handleEditCategory={handleEditCategory}
        setCategories={setCategories}
        handleSwitchChange={handleSwitchChange}
        handleOpenDeleteDialog={handleOpenDeleteDialog}
        activeUser={activeUser}
      />
      <Dialogbox
        handleClose={handleClose}
        formData={formData}
        handleChange={handleChange}
        handleAddCategory={handleAddCategory}
        deleteOpen={deleteOpen}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
        handleConfirmDelete={handleConfirmDelete}
        handleEditCategory={handleEditCategory}
        open={open}
        handleSwitchChange={handleSwitchChange}
      />
    </Box>
  );
};

export default CategoryScreen;
